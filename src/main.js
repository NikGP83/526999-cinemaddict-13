import {createUserRankTemplate} from './view/user-rank.js';
import {createMainNavigationMenu} from './view/main-navigation-menu.js';
import {createFIlterList} from './view/filter-list.js';
import {createItemBoard} from './view/item-board.js';
import {createFilmCard} from './view/film-card.js';
import {createShowMoreBtn} from './view/show-more-btn.js';
import {createExtraFilmBoard} from './view/film-list-extra';
import {createExtraFilmBoardCommented} from './view/film-list-commented';
import {createFooterFilmStatistics} from './view/footer-statistics';
import {generatefilmCard} from './mock/data-template.js';

const FILM_PROFILE_NUM = 5;

const filmProfile = new Array(FILM_PROFILE_NUM).fill().map(generatefilmCard);
console.log(filmProfile);
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeader = document.querySelector(`.header`);


render(siteHeader, createUserRankTemplate(), `beforeend`);

const siteMainElement = document.querySelector(`.main`);
render(siteMainElement, createMainNavigationMenu(), `afterbegin`);
render(siteMainElement, createFIlterList(), `beforeend`);
render(siteMainElement, createItemBoard(), `beforeend`);

const filmMainSection = siteMainElement.querySelector(`.films`);
const filmsListContainer = filmMainSection.querySelector(`.films-list__container`);
const MAX_FULL_FILM_CARDS = 5;


for (let i = 0; i <= MAX_FULL_FILM_CARDS - 1; i++) {
  render(filmsListContainer, createFilmCard(), `beforeend`);
}

render(filmsListContainer, createShowMoreBtn(), `afterend`);
render(filmMainSection, createExtraFilmBoard(), `beforeend`);
render(filmMainSection, createExtraFilmBoardCommented(), `beforeend`);

const MAX_SPECIAL_FILM_CARDS = 2;
const extraFilmList = siteMainElement.querySelector(`.films-list--extra .films-list__container`);
const extraFilmListCommented = siteMainElement.querySelector(`.films-list--extra:last-child .films-list__container`);

for (let i = 0; i < MAX_SPECIAL_FILM_CARDS; i++) {
  render(extraFilmList, createFilmCard(), `beforeend`);
  render(extraFilmListCommented, createFilmCard(filmProfile[i]), `beforeend`);
}

const footerStatisticsContainer = document.querySelector(`.footer .footer__statistics`);

render(footerStatisticsContainer, createFooterFilmStatistics(), `beforeend`);


