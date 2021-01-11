import UserRankView from '../view/user-rank.js';
import {RenderPosition, render} from '../render.js';

export default class UserRank {
  constructor(container) {
    this._container = container;
    this._userRank = new UserRankView();
  }

  init() {
    render(this._container, this._userRank, RenderPosition.BEFOREEND);
  }
}
