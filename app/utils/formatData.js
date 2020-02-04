import dayjs from 'dayjs';

export const toPrecision = (value, precision) => {
  if (typeof value !== 'number') {
    return value;
  }

  return Number(value.toFixed(precision));
};

export const toLocaleDate = (date, format = 'DD.MM.YYYY') =>
  date instanceof dayjs ? date.format(format) : dayjs(date).format(format);

  export const toLocaleDateGraphQl = (date, format = 'DD.MM.YYYY') =>
  date instanceof dayjs ? date.format(format) : dayjs(date).format(format);  

export const now = () => dayjs().format('YYYY-MM-DDTHH:mm:ss');
