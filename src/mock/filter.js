export const getfiltersDataNum = (filmProfileData) => {
  return {
    favoritesCount: filmProfileData.filter((el) => el.isFavorite).length,
    watchListCount: filmProfileData.filter((el) => el.onWatchlist).length,
    historyCount: filmProfileData.filter((el) => el.inHistory).length
  };
};
