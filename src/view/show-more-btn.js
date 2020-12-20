import AbstractView from './abstract.js';

const createShowMoreBtn = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};

export default class ShowMoreBtn extends AbstractView {
  getTemplate() {
    return createShowMoreBtn();
  }
}
