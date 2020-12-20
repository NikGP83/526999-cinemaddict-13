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
  constructor(filmprofile, filmComments) {
    super();
    this._filmprofile = filmprofile;
    this._filmcomments = filmComments;
  }

  getTemplate() {
    return createPopupBoard();
  }

  createElements() {
    const temp = createElement(this.getTemplate());
    render(temp, new PopupFilmCardView(this._filmprofile), RenderPosition.BEFOREEND);
    render(temp, new PopupBottomCardView(this._filmprofile), RenderPosition.BEFOREEND);
    const commentContainer = temp.querySelector(`.film-details__comments-list`);
    this._filmcomments.forEach((el) => render(commentContainer, new PopupFilmCommentsView(el), RenderPosition.BEFOREEND));
    return temp;
  }

  getElement() {
    if (!this._element) {
      this._element = this.createElements();
    }
    return this._element;
  }
}
