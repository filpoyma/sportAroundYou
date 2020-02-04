import CONSTANTS from '@/utils/interfaces/constants';

const REDUCER_KEY = 'CompetitiveAnxiety';
const API_PATH = 'getTestCompAnxiety';
const API_TYPE = 1;
const GRAPHQL_BACK_TYPE = 1;

export const RESULT_KEY = {
  KOG: 'cognitive',
  SOM: 'somatic',
  SURANCE: 'selfConfidence',
  RAW: 'raw'
};

export const GRAPHQL_KEYS = [
  RESULT_KEY.KOG,
  RESULT_KEY.SOM,
  RESULT_KEY.SURANCE,  
  RESULT_KEY.RAW
]

export const LABELS = {
  [RESULT_KEY.KOG]: 'Когнитивная',
  [RESULT_KEY.SOM]: 'Соматическая',
  [RESULT_KEY.SURANCE]: 'Уверенность в себе'
};

export default CONSTANTS(REDUCER_KEY, API_PATH, API_TYPE, undefined, GRAPHQL_BACK_TYPE, GRAPHQL_KEYS);
