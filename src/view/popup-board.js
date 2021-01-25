import {createElement, render, RenderPosition} from '../render.js';
import PopupFilmCardView from './popup-film-card.js';
import PopupBottomCardView from './popup-bottom-card.js';
import PopupFilmCommentsView from './popup-film-comments.js';
import AbstractView from './abstract.js';

const createPopupBoard = () => {
  return `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
  </form>
  </section>`;
};

export default class PopupBoard extends AbstractView {
  constructor(filmprofiles, filmComments, closeCallback) {
    super();
    this._filmprofile = filmprofiles;
    this._filmcomments = filmComments;
    this._clickHandlerOnImage = this._clickHandlerOnImage.bind(this);
    this._callback.close = closeCallback;
  }

  getTemplate() {
    return createPopupBoard();
  }

  _createElements() {
    const temp = createElement(this.getTemplate());
    render(temp, new PopupFilmCardView(this._filmprofiles), RenderPosition.BEFOREEND);
    render(temp, new PopupBottomCardView(this._filmprofiles), RenderPosition.BEFOREEND);
    const commentContainer = temp.querySelector(`.film-details__comments-list`);
    this._filmcomments.forEach((el) => render(commentContainer, new PopupFilmCommentsView(el), RenderPosition.BEFOREEND));
    return temp;
  }

  getElement() {
    if (!this._element) {
      this._element = this._createElements();
      this._setClickhandler();
    }
    return this._element;
  }

  _clickHandlerOnImage(evt) {
    evt.preventDefault();
    this._callback.close(this._element);
  }

  _setClickhandler() {
    const el = this._element;
    el.querySelector(`.film-details__close-btn`).addEventListener(`click`, this._clickHandlerOnImage);
  }
}
