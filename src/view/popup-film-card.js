import AbstractView from './abstract.js';

const createPopupFilmCard = (filmProfiles = {}) => {
  const {adultRating, filmName, fullDescription, genre, duration, productDate, originalName, poster, director, country, screenwriters, cast, rating} = filmProfiles;

  return `<div class="film-details__top-container">
    <div class="film-details__close">
    <button class="film-details__close-btn" type="button">close</button>
    </div>
  <div class="film-details__info-wrap">
    <div class="film-details__poster">
      <img class="film-details__poster-img" src="./images/posters/${poster}" alt="">

      <p class="film-details__age">${adultRating}+</p>
    </div>

    <div class="film-details__info">
      <div class="film-details__info-head">
        <div class="film-details__title-wrap">
          <h3 class="film-details__title">${filmName}</h3>
          <p class="film-details__title-original">${originalName}</p>
        </div>

        <div class="film-details__rating">
          <p class="film-details__total-rating">${rating}</p>
        </div>
      </div>

      <table class="film-details__table">
        <tr class="film-details__row">
          <td class="film-details__term">Director</td>
          <td class="film-details__cell">${director}</td>
        </tr>
        <tr class="film-details__row">
          <td class="film-details__term">Writers</td>
          <td class="film-details__cell">${screenwriters}</td>
        </tr>
        <tr class="film-details__row">
          <td class="film-details__term">Actors</td>
          <td class="film-details__cell">${cast}</td>
        </tr>
        <tr class="film-details__row">
          <td class="film-details__term">Release Date</td>
          <td class="film-details__cell">${productDate}</td>
        </tr>
        <tr class="film-details__row">
          <td class="film-details__term">Runtime</td>
          <td class="film-details__cell">${duration}</td>
        </tr>
        <tr class="film-details__row">
          <td class="film-details__term">Country</td>
          <td class="film-details__cell">${country}</td>
        </tr>
        <tr class="film-details__row">
          <td class="film-details__term">Genres</td>
          <td class="film-details__cell">
            <span class="film-details__genre">${genre}</span>
            <span class="film-details__genre">${genre}</span>
            <span class="film-details__genre">${genre}</span></td>
        </tr>
      </table>

      <p class="film-details__film-description">
        ${fullDescription}
      </p>
      </div>
  </div>

  <section class="film-details__controls">
        <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
        <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched">
        <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
        <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
      </section>
  </div>`;
};


export default class PopupFilmCard extends AbstractView {
  constructor(filmProfiles) {
    super();
    this._filmProfiles = filmProfiles;
  }

  getTemplate() {
    return createPopupFilmCard(this._filmProfiles);
  }
}
