import {createElement} from '../render.js';
import AbstractView from './abstract.js';

const createFilmCard = (filmProfiles) => {
  const {filmName, poster, productDate, duration, genre, descriprion, rating, commentsNum} = filmProfiles;

  return `<article class="film-card">
  <h3 class="film-card__title">${filmName}</h3>
  <p class="film-card__rating">${rating}</p>
  <p class="film-card__info">
    <span class="film-card__year">${productDate}</span>
    <span class="film-card__duration">${duration}</span>
    <span class="film-card__genre">${genre}</span>
  </p>
  <img src="./images/posters/${poster}" alt="" class="film-card__poster">
  <p class="film-card__description">${descriprion}</p>
  <a class="film-card__comments">${commentsNum}</a>
  <div class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as favorite</button>
  </div>
</article>`;
};

export default class FilmCard extends AbstractView {
  constructor(filmProfiles, callback) {
    super();
    this._filmprofiles = filmProfiles;
    this._clickHandler = this._clickHandler.bind(this);
    this._callback.click = callback;
  }

  _createElements() {
    const temp = createElement(this.getTemplate());
    return temp;
  }

  getElement() {
    if (!this._element) {
      this._element = this._createElements();
      this._setClickhandler();
    }
    return this._element;
  }

  getTemplate() {
    return createFilmCard(this._filmprofiles);
  }

  _clickHandler(evt) {
    evt.preventDefault();

    this._callback.click();
  }

  _setClickhandler() {
    const el = this._element;
    el.querySelector(`.film-card__poster`).addEventListener(`click`, this._clickHandler);
    el.querySelector(`.film-card__title`).addEventListener(`click`, this._clickHandler);
    el.querySelector(`.film-card__comments`).addEventListener(`click`, this._clickHandler);
  }
}
