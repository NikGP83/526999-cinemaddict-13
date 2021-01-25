import MainNavigationMenuView from '../view/main-navigation-menu.js';
import FIlterListView from '../view/filter-list.js';
import ItemBoardView from '../view/item-board.js';
import {render, RenderPosition} from '../render.js';

export default class HeaderPresenter {
  constructor(siteMainElement) {
    this._siteMainElement = siteMainElement;
    this._testMenu = null;

    // this._mainNavigationMenuView = new MainNavigationMenuView();
    this._fIlterListView = new FIlterListView();
    this._itemBoardView = new ItemBoardView();
  }

  init(filters) {
    this._filters = filters;
    this._testMenu = new MainNavigationMenuView(filters);
    render(this._siteMainElement, this._testMenu, RenderPosition.AFTERBEGIN);
    this._renderFilterList();
  }

  _renderFilter() {
    render(this._siteMainElement, this._fIlterListView, RenderPosition.BEFOREEND);
  }

  _itemBoard() {
    render(this._siteMainElement, this._itemBoardView, RenderPosition.BEFOREEND);
  }

  _renderFilterList() {
    this._renderFilter();
    this._itemBoardView();
  }
}
