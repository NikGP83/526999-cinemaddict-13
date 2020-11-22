import {createUserRankTemplate} from './view/user-rank.js';
import {mainNavigationMenu} from './view/main-navigation-menu.js';
import {createFIlterList} from './view/filter-list.js';
import {createItemBoard} from './view/item-board.js';
import {createFilmCard} from './view/film-card.js';
import {createShowMoreBtn} from './view/show-more-btn.js';
import {createExtraFilmBoard} from './view/film-list-extra';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeader = document.querySelector(`.header`);


render(siteHeader, createUserRankTemplate(), `beforeend`);

const siteMainElement = document.querySelector(`.main`);
render(siteMainElement, mainNavigationMenu(), `afterbegin`);
render(siteMainElement, createFIlterList(), `beforeend`);
render(siteMainElement, createItemBoard(), `beforeend`);

const filmsListContainer = siteMainElement.querySelector(`.films-list__container`);
const MAX_FULL_FILM_CARDS = 5;


for (let i = 0; i <= MAX_FULL_FILM_CARDS - 1; i++) {
  render(filmsListContainer, createFilmCard(), `beforeend`);
}

render(filmsListContainer, createShowMoreBtn(), `afterend`);

const extraFilmContainer = siteMainElement.querySelector(`.films-list--extra`);
const MAX_SPECIAL_FILM_CARDS = 2;

render(siteMainElement, createExtraFilmBoard(), `beforeend`);

