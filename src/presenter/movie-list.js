import FilmCardView from '../view/film-card.js';
import {render, RenderPosition, remove} from '../render.js';
import ShowMoreBtnView from '../view/show-more-btn.js';

const MAX_FULL_FILM_CARDS = 5;
const FILM_CARDS_PER_STEP = 5;

export default class MovieList {
  constructor(siteMainElement, filmsListContainer) {
    this._siteMainElement = siteMainElement;
    this._filmsListContainer = filmsListContainer;

    this._filmCardView = null;
    this._ShowMoreBtnView = new ShowMoreBtnView();
  }

  init(filmProfiles) {
    this._filmProfiles = filmProfiles;

    this._renderFilmCard(filmProfiles);
    this._renderShowMoreBtnView(filmProfiles);
  }

  _renderFilmCard(filmCard) {
    const limit = Math.min(MAX_FULL_FILM_CARDS, filmCard.length);
    for (let i = 0; i < limit; i++) {
      const currentFilmProfile = filmCard[i];
      // const callback = () => {
      //   openPopup(currentFilmProfile);
      // };
      const view = new FilmCardView(currentFilmProfile);
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
