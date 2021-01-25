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
import UserRankPresenter from './presenter/user-rank.js';
import MovieListPresenter from './presenter/movie-list.js';

const filmProfiles = getFilmData();
const filters = getfiltersDataNum(filmProfiles);

const userRankPresenter = new UserRankPresenter(document.querySelector(`.header`));
userRankPresenter.init();

const siteMainElement = document.querySelector(`.main`);

render(siteMainElement, new MainNavigationMenuView(filters), RenderPosition.AFTERBEGIN);
render(siteMainElement, new FIlterListView(), RenderPosition.BEFOREEND);
render(siteMainElement, new ItemBoardView(), RenderPosition.BEFOREEND);

const filmMainSection = siteMainElement.querySelector(`.films`);
const filmsListContainer = filmMainSection.querySelector(`.films-list__container`);

new MovieListPresenter(siteMainElement, filmsListContainer).init(filmProfiles);
// const closePopup = (el) => {
//   document.querySelector(`body`).classList.remove(`hide-overflow`);
//   el.parentElement.removeChild(el);
// };

// const openPopup = (film) => {
//   document.querySelector(`body`).classList.add(`hide-overflow`);
//   const currentFilmComments = getCommentsData().filter((el) => el.filmId === film.id);
//   const popup = new PopupBoardView(film, currentFilmComments, closePopup);
//   render(footerContainer, popup, RenderPosition.AFTEREND);
// };

// const limit = Math.min(MAX_FULL_FILM_CARDS, filmProfiles.length);
// for (let i = 0; i < limit; i++) {
//   const currentFilmProfile = filmProfiles[i];
//   const callback = () => {
//     openPopup(currentFilmProfile);
//   };
//   const view = new FilmCardView(currentFilmProfile, callback);
//   render(filmsListContainer, view, RenderPosition.BEFOREEND);
// }

// render(filmMainSection, new ExtraFilmBoardView(), RenderPosition.BEFOREEND);
// render(filmMainSection, new ExtraFilmBoardCommentedView(), RenderPosition.BEFOREEND);

const MAX_SPECIAL_FILM_CARDS = 2;
const extraFilmList = siteMainElement.querySelector(`.films-list--extra .films-list__container`);
const extraFilmListCommented = siteMainElement.querySelector(`.films-list--extra:last-child .films-list__container`);

// for (let i = 0; i < MAX_SPECIAL_FILM_CARDS; i++) {
//   render(extraFilmList, new FilmCardView(filmProfiles[i]), RenderPosition.BEFOREEND);
//   render(extraFilmListCommented, new FilmCardView(filmProfiles[i]), RenderPosition.BEFOREEND);
// }

const footerContainer = document.querySelector(`.footer`);
const footerStatisticsContainer = document.querySelector(`.footer .footer__statistics`);

render(footerStatisticsContainer, new FooterFilmStatisticsView(), RenderPosition.BEFOREEND);
