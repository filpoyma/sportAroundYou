import CONSTANTS from '@/utils/interfaces/constants';

const REDUCER_KEY = 'Anxiety';
const API_PATH = 'anxiety';
const API_TYPE = 1;

export const RESULT_KEY = {
  KOG: 'kog',
  SOM: 'som',
  SURANCE: 'surance'
};

export const LABELS = {
  [RESULT_KEY.SRPE]: 'Session RPE',
  [RESULT_KEY.RPE]: 'RPE',
  [RESULT_KEY.DURATION]: 'Длительность тренировки, мин'
};

export default CONSTANTS(REDUCER_KEY, API_PATH, API_TYPE);
