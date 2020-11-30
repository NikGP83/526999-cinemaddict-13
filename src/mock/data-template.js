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
let commentsArray = [`Неплохо`, `Плохо`, `Могло быть и лучше`, `Что за халтура`, `Это божественно`];

const getAuthorName = () => authorName[getRandom(0, authorName.length - 1)];
const getComments = () => commentsArray[getRandom(0, commentsArray.length - 1)];
const getFilmDescription = () => descriptionList[getRandom(0, 5)];

export const generatefilmCard = () => {
  return {
    name: getRandom(),
    poster: getPoster(),
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
