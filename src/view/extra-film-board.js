import {createElement} from '../util.js';

const createExtraFilmBoard = () => {
  return `<section class="films-list films-list--extra">
  <h2 class="films-list__title">Top rated</h2>
  <div class="films-list__container">
  </div>
</section>`;
};

export default class ExtraFilmBoard {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createExtraFilmBoard();
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
