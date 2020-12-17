import UserRankView from './view/user-rank.js';
import MainNavigationMenuView from './view/main-navigation-menu.js';
import FIlterListView from './view/filter-list.js';
import ItemBoardView from './view/item-board.js';
import FilmCardView from './view/film-card.js';
import ShowMoreBtnView from './view/show-more-btn.js';
import ExtraFilmBoardView from './view/film-list-extra';
import ExtraFilmBoardCommentedView from './view/film-list-commented';
import FooterFilmStatisticsView from './view/footer-statistics';
import PopupBoardView from './view/popup-window.js';
import {getFilmData} from './mock/data-template.js';
import {getCommentsData} from './mock/data-template.js';
import {getfiltersDataNum} from './mock/filter.js';
import {RenderPosition, render} from './util.js';

const filmProfile = getFilmData();
const filters = getfiltersDataNum();

const siteHeader = document.querySelector(`.header`);


render(siteHeader, new UserRankView().getElement(), RenderPosition.BEFOREEND);

const siteMainElement = document.querySelector(`.main`);

render(siteMainElement, new MainNavigationMenuView(filters).getElement(), RenderPosition.AFTERBEGIN);
render(siteMainElement, new FIlterListView().getElement(), RenderPosition.BEFOREEND);
render(siteMainElement, new ItemBoardView().getElement(), RenderPosition.BEFOREEND);

const filmMainSection = siteMainElement.querySelector(`.films`);
const filmsListContainer = filmMainSection.querySelector(`.films-list__container`);
const MAX_FULL_FILM_CARDS = 5;
const FILM_CARDS_PER_STEP = 5;

const openPopup = (film) => {
  document.querySelector(`body`).classList.add(`hide-overflow`);
  const currentFilmComments = getCommentsData().filter((el) => el.filmId === film.id);
  const popup = new PopupBoardView(film, currentFilmComments).getElement();
  render(footerContainer, popup, RenderPosition.AFTEREND);
  // render(popup, new PopupFilmCardView(film).getElement(), RenderPosition.BEFOREEND);
  // render(popup, new PopupBottomCardView(film).getElement(), RenderPosition.BEFOREEND);
  // currentFilmComments.forEach((el) => render(popup, new PopupFilmCommentsView(el).getElement(), RenderPosition.BEFOREEND));
  popup.querySelector(`.film-details__close-btn`).addEventListener(`click`, (evt) => {
    document.querySelector(`body`).classList.remove(`hide-overflow`);
    evt.preventDefault();
    popup.parentElement.removeChild(popup);
  });
};

const limit = Math.min(MAX_FULL_FILM_CARDS, filmProfile.length);
for (let i = 0; i < limit; i++) {
  const view = new FilmCardView(filmProfile[i]).getElement();
  render(filmsListContainer, view, RenderPosition.BEFOREEND);
  view.querySelector(`.film-card__poster`).addEventListener(`click`, () => {
    openPopup(filmProfile[i]);
  });
  view.querySelector(`.film-card__title`).addEventListener(`click`, () => {
    openPopup(filmProfile[i]);
  });
  view.querySelector(`.film-card__comments`).addEventListener(`click`, () => {
    openPopup(filmProfile[i]);
  });
}

render(filmsListContainer, new ShowMoreBtnView().getElement(), RenderPosition.AFTEREND);
render(filmMainSection, new ExtraFilmBoardView().getElement(), RenderPosition.BEFOREEND);
render(filmMainSection, new ExtraFilmBoardCommentedView().getElement(), RenderPosition.BEFOREEND);

const MAX_SPECIAL_FILM_CARDS = 2;
const extraFilmList = siteMainElement.querySelector(`.films-list--extra .films-list__container`);
const extraFilmListCommented = siteMainElement.querySelector(`.films-list--extra:last-child .films-list__container`);

for (let i = 0; i < MAX_SPECIAL_FILM_CARDS; i++) {
  render(extraFilmList, new FilmCardView(filmProfile[i]).getElement(), RenderPosition.BEFOREEND);
  render(extraFilmListCommented, new FilmCardView(filmProfile[i]).getElement(), RenderPosition.BEFOREEND);
}

const footerContainer = document.querySelector(`.footer`);
const footerStatisticsContainer = document.querySelector(`.footer .footer__statistics`);

render(footerStatisticsContainer, new FooterFilmStatisticsView().getElement(), RenderPosition.BEFOREEND);


if (filmProfile.length > FILM_CARDS_PER_STEP) {
  let renderFilmCount = FILM_CARDS_PER_STEP;
  const loadMoreBtn = document.querySelector(`.films-list__show-more`);

  const getMoreFilmCards = (evt) => {
    evt.preventDefault();
    filmProfile.slice(renderFilmCount, renderFilmCount + FILM_CARDS_PER_STEP).forEach((el) => render(filmsListContainer, new FilmCardView(el).getElement(), RenderPosition.BEFOREEND));
    renderFilmCount += FILM_CARDS_PER_STEP;
    if (renderFilmCount >= filmProfile.length) {
      loadMoreBtn.remove();
    }
  };
  loadMoreBtn.addEventListener(`click`, getMoreFilmCards);
}
