import UserRankView from './view/user-rank.js';
import MainNavigationMenuView from './view/main-navigation-menu.js';
import FIlterListView from './view/filter-list.js';
import ItemBoardView from './view/item-board.js';
import {createFilmCard} from './view/film-card.js';
import {createShowMoreBtn} from './view/show-more-btn.js';
import {createExtraFilmBoard} from './view/film-list-extra';
import {createExtraFilmBoardCommented} from './view/film-list-commented';
import {createFooterFilmStatistics} from './view/footer-statistics';
import {createPopupBoard} from './view/popup-window.js';
import {createPopupFilmCard} from './view/big-film-card.js';
import {createPopupFilmComments} from './view/popup-film-comments.js';
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
  render(filmsListContainer, createFilmCard(filmProfile[i]), `beforeend`);
}

render(filmsListContainer, createShowMoreBtn(), `afterend`);
render(filmMainSection, createExtraFilmBoard(), `beforeend`);
render(filmMainSection, createExtraFilmBoardCommented(), `beforeend`);

const MAX_SPECIAL_FILM_CARDS = 2;
const extraFilmList = siteMainElement.querySelector(`.films-list--extra .films-list__container`);
const extraFilmListCommented = siteMainElement.querySelector(`.films-list--extra:last-child .films-list__container`);

for (let i = 0; i < MAX_SPECIAL_FILM_CARDS; i++) {
  render(extraFilmList, createFilmCard(filmProfile[i]), `beforeend`);
  render(extraFilmListCommented, createFilmCard(filmProfile[i]), `beforeend`);
}

const footerStatisticsContainer = document.querySelector(`.footer .footer__statistics`);

render(footerStatisticsContainer, createFooterFilmStatistics(), `beforeend`);

render(footerStatisticsContainer, createPopupBoard(), `afterend`);

const popupFilmContainer = document.querySelector(`.film-details__inner`);


let chosenFilmCard = 0;
const film = filmProfile[chosenFilmCard];
render(popupFilmContainer, createPopupFilmCard(film), `beforeend`);


const popupCommentsContainer = document.querySelector(`.film-details__comments-list`);


const currentFilmComments = getCommentsData().filter((el) => el.filmId === film.id);
currentFilmComments.forEach((el) => render(popupCommentsContainer, createPopupFilmComments(el), `beforeend`));

if (filmProfile.length > FILM_CARDS_PER_STEP) {
  let renderFilmCount = FILM_CARDS_PER_STEP;
  const loadMoreBtn = document.querySelector(`.films-list__show-more`);

  const getMoreFilmCards = (evt) => {
    evt.preventDefault();
    filmProfile.slice(renderFilmCount, renderFilmCount + FILM_CARDS_PER_STEP).forEach((el) => render(filmsListContainer, createFilmCard(el), `beforeend`));
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

