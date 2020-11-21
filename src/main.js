import {createUserRankTemplate} from './view/user-rank.js';
import {mainNavigationMenu} from './view/main-navigation-menu.js';


const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeader = document.querySelector(`.header`);


render(siteHeader, createUserRankTemplate(), `beforeend`); // в DOM отрисовалась, на странице нет

const siteMainElement = document.querySelector(`.main`);
render(siteMainElement, mainNavigationMenu(), `afterbegin`);
