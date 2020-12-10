import {getFilmData} from './data-template.js';

const filmProfileData = getFilmData();

const favorites = filmProfileData.filter((el) => el.isFavorite);
const watchList = filmProfileData.filter((el) => el.onWatchlist);
const history = filmProfileData.filter((el) => el.inHistory);

export const getfiltersDataNum = () => {
  return {
    favoritesCount: favorites.length,
    watchListCount: watchList.length,
    historyCount: history.length
  };
};
