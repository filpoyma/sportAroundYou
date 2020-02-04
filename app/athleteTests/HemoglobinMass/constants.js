import CONSTANTS from '@/utils/interfaces/constants';

const REDUCER_KEY = 'HemoglobinMassTest';
const API_PATH = 'getTestHemoglobin';
const GRAPHQL_BACK_TYPE = 1;
const API_TYPE = 1;

export const RESULT_KEY = {
  HEMOGLOBIN_TOTAL_MASS: 'massTotal',
  RELATIVE_TOTAL_MASS: 'massRel',
  TOTAL_CIRCULATING_BLOOD_VOLUME: 'bloodTotal',
  RELATIVE_CIRCULATING_BLOOD_VOLUME: 'bloodRel',
  HEMOGLOBIN: 'hemoglobin'
};

export const GRAPHQL_KEYS = [
  RESULT_KEY.HEMOGLOBIN_TOTAL_MASS,
  RESULT_KEY.RELATIVE_TOTAL_MASS,
  RESULT_KEY.TOTAL_CIRCULATING_BLOOD_VOLUME,  
  RESULT_KEY.RELATIVE_CIRCULATING_BLOOD_VOLUME,
  RESULT_KEY.HEMOGLOBIN
]

export const LABELS = {
  [RESULT_KEY.HEMOGLOBIN_TOTAL_MASS]: 'Общая масса гемоглобина',
  [RESULT_KEY.RELATIVE_TOTAL_MASS]: 'Относительная масса гемоглобина',
  [RESULT_KEY.TOTAL_CIRCULATING_BLOOD_VOLUME]: 'Общий объем циркулирующей крови',
  [RESULT_KEY.RELATIVE_CIRCULATING_BLOOD_VOLUME]: 'Относительный объем циркулирующей крови',
  [RESULT_KEY.HEMOGLOBIN]: 'Гемоглобин'
};

export default CONSTANTS(REDUCER_KEY, API_PATH, API_TYPE, undefined, GRAPHQL_BACK_TYPE, GRAPHQL_KEYS);