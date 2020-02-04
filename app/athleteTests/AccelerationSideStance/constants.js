import CONSTANTS from '@/utils/interfaces/constants';

const REDUCER_KEY = 'AccelerationSideStanceTest';
const API_PATH = 'accelerationside';

export default CONSTANTS(REDUCER_KEY, API_PATH);

export const RESULT_KEY = {
  BRIDGING_TIME_LEFT: 'distanceTL',
  REACTION_TIME_LEFT: 'reactionTL',
  ACCELERATION_TIME_LEFT: 'accelerationTL',
  FIRST_STEP_DURATION_LEFT: 'firstStepTL',
  ACCELERATION_SPEED_LEFT: 'accelerationVelocityL',

  BRIDGING_TIME_RIGHT: 'distanceTR',
  REACTION_TIME_RIGHT: 'reactionTR',
  ACCELERATION_TIME_RIGHT: 'accelerationTR',
  FIRST_STEP_DURATION_RIGHT: 'firstStepTR',
  ACCELERATION_SPEED_RIGHT: 'accelerationVelocityR'
};

export const LABELS = {
  [RESULT_KEY.BRIDGING_TIME_LEFT]: 'Время преодоления дистанции, мс',
  [RESULT_KEY.REACTION_TIME_LEFT]: 'Время реакции, мс',
  [RESULT_KEY.ACCELERATION_TIME_LEFT]: 'Время разгона, мс',
  [RESULT_KEY.FIRST_STEP_DURATION_LEFT]: 'Длительность первого шага, мс',
  [RESULT_KEY.ACCELERATION_SPEED_LEFT]: 'Скорость разгона, мс',

  [RESULT_KEY.BRIDGING_TIME_RIGHT]: 'Время преодоления дистанции, мс',
  [RESULT_KEY.REACTION_TIME_RIGHT]: 'Время реакции, мс',
  [RESULT_KEY.ACCELERATION_TIME_RIGHT]: 'Время разгона, мс',
  [RESULT_KEY.FIRST_STEP_DURATION_RIGHT]: 'Длительность первого шага, мс',
  [RESULT_KEY.ACCELERATION_SPEED_RIGHT]: 'Скорость разгона, мс'
};
