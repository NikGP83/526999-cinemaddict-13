import dayjs from 'dayjs';

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const humanizeTaskDueDate = (dueDate) => (dayjs(dueDate).format(`YYYY/MM/D HH:ss`));
