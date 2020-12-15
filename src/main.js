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
import PopupFilmCardView from './view/popup-film-card.js';
import PopupFilmCommentsView from './view/popup-film-comments.js';
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

const limit = Math.min(MAX_FULL_FILM_CARDS, filmProfile.length);
for (let i = 0; i < limit; i++) {
  render(filmsListContainer, new FilmCardView(filmProfile[i]).getElement(), RenderPosition.BEFOREEND);
}

render(filmsListContainer, new ShowMoreBtnView().getElement(), RenderPosition.BEFOREEND);
render(filmMainSection, new ExtraFilmBoardView().getElement(), RenderPosition.BEFOREEND);
render(filmMainSection, new ExtraFilmBoardCommentedView().getElement(), RenderPosition.BEFOREEND);

const MAX_SPECIAL_FILM_CARDS = 2;
const extraFilmList = siteMainElement.querySelector(`.films-list--extra .films-list__container`);
const extraFilmListCommented = siteMainElement.querySelector(`.films-list--extra:last-child .films-list__container`);

for (let i = 0; i < MAX_SPECIAL_FILM_CARDS; i++) {
  render(extraFilmList, new FilmCardView(filmProfile[i]).getElement(), RenderPosition.BEFOREEND);
  render(extraFilmListCommented, new FilmCardView(filmProfile[i]).getElement(), RenderPosition.BEFOREEND);
}

const footerStatisticsContainer = document.querySelector(`.footer .footer__statistics`);

render(footerStatisticsContainer, new FooterFilmStatisticsView().getElement(), RenderPosition.BEFOREEND);

render(footerStatisticsContainer, new PopupBoardView().getElement(), `afterend`); // в вопросы местоположение

const popupFilmContainer = document.querySelector(`.film-details__inner`);


let chosenFilmCard = 0;
const film = filmProfile[chosenFilmCard];
render(popupFilmContainer, new PopupFilmCardView(film).getElement(), RenderPosition.BEFOREEND);


const popupCommentsContainer = document.querySelector(`.film-details__comments-list`);


const currentFilmComments = getCommentsData().filter((el) => el.filmId === film.id);
currentFilmComments.forEach((el) => render(popupCommentsContainer, new PopupFilmCommentsView(el).getElement(), RenderPosition.BEFOREEND));

if (filmProfile.length > FILM_CARDS_PER_STEP) {
  let renderFilmCount = FILM_CARDS_PER_STEP;
  const loadMoreBtn = document.querySelector(`.films-list__show-more`);

  const getMoreFilmCards = (evt) => {
    evt.preventDefault();
    filmProfile.slice(renderFilmCount, renderFilmCount + FILM_CARDS_PER_STEP).forEach((el) => render(filmsListContainer, new FilmCardView(el), RenderPosition.BEFOREEND));
    renderFilmCount += FILM_CARDS_PER_STEP;
    if (renderFilmCount >= filmProfile.length) {
      loadMoreBtn.remove();
    }
  };
  loadMoreBtn.addEventListener(`click`, getMoreFilmCards);
}

const popup = document.querySelector(`.film-details`);
const popupCloseBtn = document.querySelector(`.film-details__close-btn`);

const filmBoardForOpenPopapOloloTrololo = document.querySelector(`.films-list__container`);

const openPopap = () =>(popup.style.display = `block`);

filmBoardForOpenPopapOloloTrololo.addEventListener(`click`, openPopap);

const closePopap = (evt) => {
  evt.preventDefault();
  popup.style.display = `none`;
};
popupCloseBtn.addEventListener(`click`, closePopap);

