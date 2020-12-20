import {createElement, render, RenderPosition} from '../util.js';
import PopupFilmCardView from './popup-film-card.js';
import PopupBottomCardView from './popup-bottom-card.js';
import PopupFilmCommentsView from './popup-film-comments.js';
const createPopupBoard = () => {
  return `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
  </form>
  </section>`;
};

export default class PopupBoard {
  constructor(filmprofile, filmComments) {
    this._filmprofile = filmprofile;
    this._filmcomments = filmComments;
    this._element = null;
  }

  getTemplate() {
    return createPopupBoard();
  }

  createElements() {
    const temp = createElement(this.getTemplate());
    render(temp, new PopupFilmCardView(this._filmprofile).getElement(), RenderPosition.BEFOREEND);
    render(temp, new PopupBottomCardView(this._filmprofile).getElement(), RenderPosition.BEFOREEND);
    this._filmcomments.forEach((el) => render(temp, new PopupFilmCommentsView(el).getElement(), RenderPosition.BEFOREEND));
    return temp;
  }

  getElement() {
    if (!this._element) {
      this._element = this.createElements();
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
}
