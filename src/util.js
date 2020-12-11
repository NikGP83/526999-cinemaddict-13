import dayjs from 'dayjs';

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const humanizeTaskDueDate = (dueDate) => (dayjs(dueDate).format(`YYYY/MM/D HH:mm`));

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

export const renderElement = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

export const render = (container, template, place) => {
  return (
    container.insertAdjacentHTML(place, template)
  );
};
