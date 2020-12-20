import AbstractView from './abstract.js';

const createMainNavigationMenu = (filters) => {
  const {favoritesCount, watchListCount, historyCount} = filters;
  return `<nav class="main-navigation">
  <div class="main-navigation__items">
    <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
    <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${watchListCount}</span></a>
    <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${historyCount}</span></a>
    <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${favoritesCount}</span></a>
  </div>
  <a href="#stats" class="main-navigation__additional">Stats</a>
</nav>`;
};

export default class MainNavigationMenu extends AbstractView {
  constructor(filters) {
    super();
    this._filters = filters;
  }
  getTemplate() {
    return createMainNavigationMenu(this._filters);
  }
}
