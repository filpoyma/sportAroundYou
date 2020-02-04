import CONSTANTS from '@/utils/interfaces/constants';

const REDUCER_KEY = 'RPETest';
export const API_PATH = 'getTestRpe';
const API_TYPE = 1;
const GRAPHQL_BACK_TYPE = 1;

export const RESULT_KEY = {
  SRPE: 'sessionRpe',
  RPE: 'rpe',
  DURATION: 'duration'
};

export const GRAPHQL_KEYS = [
  'sessionRpe'
]

export const LABELS = {
  [RESULT_KEY.SRPE]: 'Session RPE',
  [RESULT_KEY.RPE]: 'RPE',
  [RESULT_KEY.DURATION]: 'Длительность тренировки, мин'
};

export default CONSTANTS(REDUCER_KEY, API_PATH, API_TYPE, undefined, GRAPHQL_BACK_TYPE, GRAPHQL_KEYS);
