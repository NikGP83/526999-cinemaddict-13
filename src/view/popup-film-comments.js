import {createElement} from '../util.js';

const createPopupFilmComments = (filmComments = {}) => {
  const {name, emoji, date, comments} = filmComments;
  return `<li class="film-details__comment">
        <span class="film-details__comment-emoji">
            <img src="./images/emoji/${emoji}" width="55" height="55" alt="emoji-smile">
        </span>
        <div>
        <p class="film-details__comment-text">${comments}</p>
        <p class="film-details__comment-info">
        <span class="film-details__comment-author">${name}</span>
        <span class="film-details__comment-day">${date}</span>
        <button class="film-details__comment-delete">Delete</button>
            </p>
        </div>
    </li>`;
};

export default class PopupFilmComments {
  constructor(filmComments) {
    this._filmComments = filmComments;
    this._element = null;
  }

  getTemplate() {
    return createPopupFilmComments(this._filmComments);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
}
