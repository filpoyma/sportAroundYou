import CONSTANTS from '@/utils/interfaces/constants';

const REDUCER_KEY = 'Cadence';
const API_PATH = 'mam/cadence';
const DATES_PATH = 'mam';

export const RESULT_KEY = {
  LOAD: 'load',
  RPM: 'rpm',
  TIME: 'time'
};

export const LABELS = {
  [RESULT_KEY.RPM]: 'Скорость, об/мин',
  [RESULT_KEY.TIME]: 'Время, мс'
};

export default CONSTANTS(REDUCER_KEY, API_PATH, null, DATES_PATH);
