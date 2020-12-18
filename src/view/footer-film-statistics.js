import {createElement} from '../util.js';

const createFooterFilmStatistics = () => {
  return `<p>130 291 movies inside</p>`;
};

export default class FooterFilmStatistics {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFooterFilmStatistics();
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
