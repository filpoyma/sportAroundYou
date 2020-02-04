import CONSTANTS from '@/utils/interfaces/constants';

const REDUCER_KEY = 'AccelerationDirectStanceTest';
const API_PATH = 'accelerationfront';

export default CONSTANTS(REDUCER_KEY, API_PATH);

export const RESULT_KEY = {
  BRIDGING_TIME: 'distanceT',
  REACTION_TIME: 'reactionT',
  ACCELERATION_TIME: 'accelerationT',
  FIRST_STEP_DURATION: 'firstStepT',
  ACCELERATION_SPEED: 'accelerationVelocity'
};

export const LABELS = {
  [RESULT_KEY.BRIDGING_TIME]: 'Время преодоления дистанции, мс',
  [RESULT_KEY.REACTION_TIME]: 'Время реакции, мс',
  [RESULT_KEY.ACCELERATION_TIME]: 'Время разгона, мс',
  [RESULT_KEY.FIRST_STEP_DURATION]: 'Длительность первого шага, мс',
  [RESULT_KEY.ACCELERATION_SPEED]: 'Скорость разгона, мс'
};
