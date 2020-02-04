import CONSTANTS from '@/utils/interfaces/constants';

const REDUCER_KEY = 'RAMTest';
export const API_PATH = 'getTestRam';
const API_TYPE = 1;
const GRAPHQL_BACK_TYPE = 1;

export const RESULT_KEY = {
  SRAM: 'sessionRam',
  RAM: 'ram',
  DURATION: 'duration'
};

export const GRAPHQL_KEYS = [
  'sessionRam'
]

export const LABELS = {
  [RESULT_KEY.SRAM]: 'Session RAM',
  [RESULT_KEY.RAM]: 'RAM',
  [RESULT_KEY.DURATION]: 'Длительность тренировки, мин'
};

export default CONSTANTS(REDUCER_KEY, API_PATH, API_TYPE, undefined, GRAPHQL_BACK_TYPE, GRAPHQL_KEYS);
