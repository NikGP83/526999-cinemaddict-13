import FilmCardView from './view/film-card.js';
import {render, RenderPosition} from '../render.js';
import ItemBoardView from './view/item-board.js';
import ShowMoreBtnView from './view/show-more-btn.js';

const MAX_FULL_FILM_CARDS = 5;
const FILM_CARDS_PER_STEP = 5;

export default class MovieList {
  constructor(siteMainElement) {
    this._siteMainElement = siteMainElement;

    this._ItemBoardView = new ItemBoardView();
    this._filmCardView = new FilmCardView();
    this._ShowMoreBtnView = new ShowMoreBtnView();
  }

  init(movieTask) {
    this._movieTask = movieTask.slice();

    render(this._siteMainElement, this._ItemBoardView, RenderPosition.BEFOREEND);
    render(this._ItemBoardView, this._filmCardView, RenderPosition.BEFOREEND);

    this._renderFilmBoard();
  }

  _renderFilmCard(filmProfile) {
    const limit = Math.min(MAX_FULL_FILM_CARDS, filmProfile.length);
    for (let i = 0; i < limit; i++) {
      const currentFilmProfile = filmProfile[i];
      // const callback = () => {
      //   openPopup(currentFilmProfile);
      // };
      const view = new FilmCardView(currentFilmProfile, callback);
      render(filmsListContainer, view, RenderPosition.BEFOREEND);
    }

  }
  _renderShowMoreButton() {

  }
}
