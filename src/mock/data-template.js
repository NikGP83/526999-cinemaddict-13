export const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const descriptionList = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
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

const getAuthorName = () => authorName[getRandom(0, authorName.length - 1)];
const getComments = () => commentsArray[getRandom(0, commentsArray.length - 1)];
const getFilmDescription = () => descriptionList[getRandom(0, 5)];
const getPoster = () => postersArr[getRandom(0, postersArr.length - 1)];
const getFilmName = () => filmName[getRandom(0, filmName.length - 1)];

export const generatefilmCard = () => {
  return {
    name: getFilmName(),
    poster: `/public/images/posters ${getPoster()}`,
    descriprion: getFilmDescription()
  };
};

export const generateComments = () => {
  return {
    name: getAuthorName(),
    data: getDate(),
    comments: getComments()
  };
};
