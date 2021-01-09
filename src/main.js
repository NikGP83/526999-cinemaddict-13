import UserRankView from './view/user-rank.js';
import MainNavigationMenuView from './view/main-navigation-menu.js';
import FIlterListView from './view/filter-list.js';
import ItemBoardView from './view/item-board.js';
import FilmCardView from './view/film-card.js';
import ShowMoreBtnView from './view/show-more-btn.js';
import ExtraFilmBoardView from './view/extra-film-board';
import ExtraFilmBoardCommentedView from './view/extra-filmboard-commented';
import FooterFilmStatisticsView from './view/footer-film-statistics';
import PopupBoardView from './view/popup-board.js';
import {getFilmData} from './mock/data-template.js';
import {getCommentsData} from './mock/data-template.js';
import {getfiltersDataNum} from './mock/filter.js';
import {RenderPosition, render, remove} from './render.js';

const filmProfile = getFilmData();
const filters = getfiltersDataNum();

const siteHeader = document.querySelector(`.header`);


render(siteHeader, new UserRankView(), RenderPosition.BEFOREEND);

const siteMainElement = document.querySelector(`.main`);

render(siteMainElement, new MainNavigationMenuView(filters), RenderPosition.AFTERBEGIN);
render(siteMainElement, new FIlterListView(), RenderPosition.BEFOREEND);
render(siteMainElement, new ItemBoardView(), RenderPosition.BEFOREEND);

const filmMainSection = siteMainElement.querySelector(`.films`);
const filmsListContainer = filmMainSection.querySelector(`.films-list__container`);
const MAX_FULL_FILM_CARDS = 5;
const FILM_CARDS_PER_STEP = 5;

const closePopup = (el) => {
  document.querySelector(`body`).classList.remove(`hide-overflow`);
  el.parentElement.removeChild(el);
};

const openPopup = (film) => {
  document.querySelector(`body`).classList.add(`hide-overflow`);
  const currentFilmComments = getCommentsData().filter((el) => el.filmId === film.id);
  const popup = new PopupBoardView(film, currentFilmComments, closePopup);
  render(footerContainer, popup, RenderPosition.AFTEREND);
};

const limit = Math.min(MAX_FULL_FILM_CARDS, filmProfile.length);
for (let i = 0; i < limit; i++) {
  const currentFilmProfile = filmProfile[i];
  const callback = () => {
    openPopup(currentFilmProfile);
  };
  const view = new FilmCardView(currentFilmProfile, callback);
  render(filmsListContainer, view, RenderPosition.BEFOREEND);
}

if (filmProfile.length > FILM_CARDS_PER_STEP) {
  let renderFilmCount = FILM_CARDS_PER_STEP;
  const showMoreBtnComponent = new ShowMoreBtnView();
  render(filmsListContainer, showMoreBtnComponent, RenderPosition.AFTEREND);
  showMoreBtnComponent.setClickhandler(() => {
    filmProfile.slice(renderFilmCount, renderFilmCount + FILM_CARDS_PER_STEP).forEach((el) => render(filmsListContainer, new FilmCardView(el), RenderPosition.BEFOREEND));
    renderFilmCount += FILM_CARDS_PER_STEP;
    if (renderFilmCount >= filmProfile.length) {
      remove(showMoreBtnComponent);
    }
  });
}

render(filmMainSection, new ExtraFilmBoardView(), RenderPosition.BEFOREEND);
render(filmMainSection, new ExtraFilmBoardCommentedView(), RenderPosition.BEFOREEND);

const MAX_SPECIAL_FILM_CARDS = 2;
const extraFilmList = siteMainElement.querySelector(`.films-list--extra .films-list__container`);
const extraFilmListCommented = siteMainElement.querySelector(`.films-list--extra:last-child .films-list__container`);

for (let i = 0; i < MAX_SPECIAL_FILM_CARDS; i++) {
  render(extraFilmList, new FilmCardView(filmProfile[i]), RenderPosition.BEFOREEND);
  render(extraFilmListCommented, new FilmCardView(filmProfile[i]), RenderPosition.BEFOREEND);
}

const footerContainer = document.querySelector(`.footer`);
const footerStatisticsContainer = document.querySelector(`.footer .footer__statistics`);

render(footerStatisticsContainer, new FooterFilmStatisticsView(), RenderPosition.BEFOREEND);
