import AbstractView from './abstract.js';

const createFooterFilmStatistics = () => {
  return `<p>130 291 movies inside</p>`;
};

export default class FooterFilmStatistics extends AbstractView {
  getTemplate() {
    return createFooterFilmStatistics();
  }
}
