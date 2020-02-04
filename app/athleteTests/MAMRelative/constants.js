import CONSTANTS from '@/utils/interfaces/constants';

const REDUCER_KEY = 'MAMRelativeTest';
const API_PATH = 'mam';
const API_TYPE = 2;

export const RESULT_KEY = {
  AP: 'ap',
  APR: 'apr',
  LOAD: 'load',
  PEAK_POWER: 'peakPwr',
  RELATIVE_POWER: 'relativePwr',
  RPM: 'rpm',
  TIME: 'time'
};

export const LABELS = {
  [RESULT_KEY.AP]: 'МАМ, Вт',
  [RESULT_KEY.APR]: 'Относительная МАМ, Вт/кг',
  [RESULT_KEY.LOAD]: 'Нагрузка, кг',
  [RESULT_KEY.PEAK_POWER]: 'Мощность, Вт',
  [RESULT_KEY.RELATIVE_POWER]: 'Относительная мощность, Вт/кг',
  [RESULT_KEY.RPM]: 'Скорость, об/мин',
  [RESULT_KEY.TIME]: 'Время, мс'
};

export default CONSTANTS(REDUCER_KEY, API_PATH, API_TYPE);
