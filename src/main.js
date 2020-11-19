import {createUserRankTemplate} from './view/user-rank';

const render = (container, template, place) => {
  container.insertAdjacentHtml(place, template);
}
