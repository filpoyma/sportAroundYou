import CONSTANTS from '@/utils/interfaces/constants';

const REDUCER_KEY = 'CoordinationTennisTest';
const API_PATH = 'coordination';

export default CONSTANTS(REDUCER_KEY, API_PATH);

export const RESULT_KEY = {
  PADDING: 'padding',
  STEP_OVER: 'stepOver'
};

export const LABELS = {
  [RESULT_KEY.PADDING]: 'Подбивания',
  [RESULT_KEY.STEP_OVER]: 'Перестроения'
};
