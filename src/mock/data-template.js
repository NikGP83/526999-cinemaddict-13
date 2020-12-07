import {
  getRandom
} from '../util.js';

const shortDescriptionList = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`, `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`, `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.In rutrum ac purus sit amet tempus.`
];

const authorName = [`Вася`, `Aня`, `Толя`, `Коля`, `Пуфик`];
const commentsArray = [`Неплохо`, `Плохо`, `Могло быть и лучше`, `Что за халтура`, `Это божественно`];
const postersArr = [`made-for-each-other.png`, `popeye-meets-sinbad.png`, `sagebrush-trail.jpg`, `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`, `the-great-flamarion.jpg`, `the-man-with-the-golden-arm.jpg`
];
const filmName = [`Фильм один`, `Фильм два`, `Фильм три`];
const commentDate = [`2020.10.14`, `2019.12.12`, `2013.12.10`]; // возможно функция с dayjs
const productDate = [`2001`, `1983`, `2020`];
const durationTime = [`1h 36m`, `36m`, `3h 45m`];
const genreName = [`Comedy`, `Drama`, `Musical`, `Action`];
const emojiArr = [`angry.png`, `puke.png`, `sleeping.png`, `smile.png`];
const originalNameArr = [`Полное название 1`, `Полное название 2`, `Полное нащвание 3`];
const directorNameArr = [`Шульц`, `Мульц`, `Шланген`];
const screenwritersNameArr = [`Наполеон, Афоний, Толик`, `Бонапарт, Шуберт, Шурик`, `Спилберг, Василий Петрович`];
const castNamesArr = [`Команда 1 - 2 - 3 - 4`, `Команда 5 - Команда 6 - Команда 7`];
const countryNameArr = [`Россия`, `Франция`, `Италия`];
const fullDescriptionArr = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Cras aliquet varius magna, non porta ligula feugiat eget.
  Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.
  Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae,
  sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.
  Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`];
const filmCount = 10 + getRandom(0, 40);

let lastUsedId = 1;
const filmsArray = [];
const commentArray = [];

const getAuthorName = () => authorName[getRandom(0, authorName.length - 1)];
const getComments = () => commentsArray[getRandom(0, 5)];
const getShortFilmDescription = () => shortDescriptionList[getRandom(0, 5)];
const getPoster = () => postersArr[getRandom(0, postersArr.length - 1)];
const getFilmName = () => filmName[getRandom(0, filmName.length - 1)];
const getProductDate = () => productDate[getRandom(0, productDate.length - 1)];
const getDuration = () => durationTime[getRandom(0, durationTime.length - 1)];
const getGenreName = () => genreName[getRandom(0, genreName.length - 1)];
const getEmoji = () => emojiArr[getRandom(0, genreName.length - 1)];
const getOriginalName = () => originalNameArr[getRandom(0, originalNameArr.length - 1)];
const getDirectorName = () => directorNameArr[getRandom(0, directorNameArr.length - 1)];
const getScreenwritersName = () => screenwritersNameArr[getRandom(0, screenwritersNameArr.length - 1)];
const getCastNames = () => castNamesArr[getRandom(0, castNamesArr.length - 1)];
const getCountryName = () => countryNameArr[getRandom(0, countryNameArr.length - 1)];
const getFullDesctiption = () => fullDescriptionArr[0];
const getDate = () => commentDate[getRandom(0, commentDate.length - 1)];
const generateNextId = () => ++lastUsedId;

const generatefilmCard = () => {
  return {
    id: generateNextId(),
    filmName: getFilmName(),
    isFavorite: false,
    originalName: getOriginalName(),
    poster: getPoster(),
    director: getDirectorName(),
    country: getCountryName(),
    screenwriters: getScreenwritersName(),
    cast: getCastNames(),
    productDate: getProductDate(),
    duration: getDuration(),
    genre: getGenreName(),
    descriprion: getShortFilmDescription(),
    fullDescription: getFullDesctiption(),
    rating: getRandom(1, 9),
    commentsNum: getRandom(0, 199)
  };
};

const generateCommentsBlock = (filmId) => {
  return {
    id: generateNextId(),
    filmId,
    name: getAuthorName(),
    emoji: getEmoji(),
    date: getDate(),
    comments: getComments(),
    deleteBtn: true
  };
};

new Array(filmCount).fill().forEach(() => {
  const tempFilmCard = generatefilmCard();
  filmsArray.push(tempFilmCard);
  const tempFilmCommentArray = new Array(tempFilmCard.commentsNum).fill().map(() => generateCommentsBlock(tempFilmCard.id));
  commentArray.push(...tempFilmCommentArray);
});
export const getFilmData = () => filmsArray;
export const getCommentsData = () => commentArray;
