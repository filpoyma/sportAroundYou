import CONSTANTS from '@/utils/interfaces/constants';

const REDUCER_KEY = 'IsomedTestKnee';
const API_PATH = 'isomed';
const API_TYPE = {
  type: 'joint',
  value: 'knee'
};

export const KEYS = {
  FORCE: 'force',
  POWER: 'power',
  LEFT_SIDE: 'leftSide',
  RIGHT_SIDE: 'rightSide',
  MEAN_VALUE: 'meanValue',
  LEFT: 'left',
  RIGHT: 'right',
  FLEXION_GRAPH: 'flexionGraph',
  EXTENSION_GRAPH: 'extentionGraph'
};

export default CONSTANTS(REDUCER_KEY, API_PATH, API_TYPE);
