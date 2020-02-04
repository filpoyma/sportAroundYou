import CONSTANTS from '@/utils/interfaces/constants';

const REDUCER_KEY = 'MAMSkiEgrometer';
const API_PATH = 'getTestMamSki';
const API_TYPE = 1;
const GRAPHQL_BACK_TYPE = 1;

export const RESULT_KEY = {
  MAXPOWER: 'maxPow',
  WEIGHT: 'weigth',
  MAXCAP: 'maxFreq',
  MAXPOWERREL: 'maxPowRel'
};

export const GRAPHQL_KEYS = [
  RESULT_KEY.MAXPOWER,
  RESULT_KEY.MAXCAP,
  RESULT_KEY.MAXPOWERREL,  
]

export const LABELS = {
  [RESULT_KEY.MAXPOWER]: 'Максимальная мощность, Вт',
  [RESULT_KEY.WEIGHT]: 'Вес тестируемого, кг',
  [RESULT_KEY.MAXCAP]: 'Максимальная частота, об./мин'
};

export default CONSTANTS(REDUCER_KEY, API_PATH, API_TYPE, undefined, GRAPHQL_BACK_TYPE, GRAPHQL_KEYS);
