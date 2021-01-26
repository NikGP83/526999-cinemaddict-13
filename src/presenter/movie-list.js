import FilmCardView from '../view/film-card.js';
import {render, RenderPosition, remove} from '../render.js';
import ShowMoreBtnView from '../view/show-more-btn.js';
import {getCommentsData} from '../mock/data-template.js';
import PopupBoardView from '../view/popup-board.js';

const MAX_FULL_FILM_CARDS = 5;
const FILM_CARDS_PER_STEP = 5;

export default class MovieList {
  constructor(siteMainElement, filmsListContainer, footerContainer) {
    this._siteMainElement = siteMainElement;
    this._filmsListContainer = filmsListContainer;
    this._footerContainer = footerContainer;

    this._filmCardView = null;
    this._ShowMoreBtnView = new ShowMoreBtnView();
  }

  init(filmProfiles) {
    this._filmProfiles = filmProfiles;

    this._renderFilmCard(filmProfiles);
    this._renderShowMoreBtnView(filmProfiles);
  }

  _closePopup(el) {
    document.querySelector(`body`).classList.remove(`hide-overflow`);
    el.parentElement.removeChild(el);
  }

  _openPopup(film) {
    document.querySelector(`body`).classList.add(`hide-overflow`);
    const currentFilmComments = getCommentsData().filter((el) => el.filmId === film.id);
    const popup = new PopupBoardView(film, currentFilmComments, this._closePopup);
    render(this._footerContainer, popup, RenderPosition.AFTEREND);
  }

  _renderFilmCard(filmCard) {
    const limit = Math.min(MAX_FULL_FILM_CARDS, filmCard.length);
    for (let i = 0; i < limit; i++) {
      const currentFilmProfile = filmCard[i];
      const callback = () => {
        _openPopup(currentFilmProfile);
      };
      const view = new FilmCardView(currentFilmProfile, callback);
      render(this._filmsListContainer, view, RenderPosition.BEFOREEND);
    }
  }

  _renderShowMoreBtnView(filmProfiles) {
    if (filmProfiles.length > FILM_CARDS_PER_STEP) {
      let renderFilmCount = FILM_CARDS_PER_STEP;
      const showMoreBtnComponent = new ShowMoreBtnView();
      render(this._filmsListContainer, showMoreBtnComponent, RenderPosition.AFTEREND);
      showMoreBtnComponent.setClickhandler(() => {
        filmProfiles.slice(renderFilmCount, renderFilmCount + FILM_CARDS_PER_STEP).forEach((el) => render(this._filmsListContainer, new FilmCardView(el), RenderPosition.BEFOREEND));
        renderFilmCount += FILM_CARDS_PER_STEP;
        if (renderFilmCount >= filmProfiles.length) {
          remove(showMoreBtnComponent);
        }
      });
    }
  }
}
