import {createUserRankTemplate} from './view/user-rank.js';
import {createMainNavigationMenu} from './view/main-navigation-menu.js';
import {createFIlterList} from './view/filter-list.js';
import {createItemBoard} from './view/item-board.js';
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

const filmProfile = getFilmData();
const favorites = filmProfile.filter((el) => el.isFavorite);
const watchList = filmProfile.filter((el) => el.onWatchlist);
const history = filmProfile.filter((el) => el.inHistory);

const favoritesCount = favorites.length;
const watchListCount = watchList.length;
const historyCount = history.length;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeader = document.querySelector(`.header`);


render(siteHeader, createUserRankTemplate(), `beforeend`);

const siteMainElement = document.querySelector(`.main`);
render(siteMainElement, createMainNavigationMenu({favoritesCount, watchListCount, historyCount}), `afterbegin`);
render(siteMainElement, createFIlterList(), `beforeend`);
render(siteMainElement, createItemBoard(), `beforeend`);

const filmMainSection = siteMainElement.querySelector(`.films`);
const filmsListContainer = filmMainSection.querySelector(`.films-list__container`);
const MAX_FULL_FILM_CARDS = 5;

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

