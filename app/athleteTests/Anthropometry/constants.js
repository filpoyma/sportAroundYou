import CONSTANTS from '@/utils/interfaces/constants';

const REDUCER_KEY = 'AnthropometryTest';
const API_PATH = 'anthropometry2';

export default CONSTANTS(REDUCER_KEY, API_PATH);

export const RESULT_KEY = {
  SHOULDER_DIAMETER: 'shoulderD',
  FOREARM_DIAMETER: 'forearmD',
  HIP_DIAMETER: 'hipsD',
  HIP_LENGTH: 'hipLength',
  SHIN_DIAMETER: 'shinD',
  SHIN_LENGTH: 'shinL',
  LEG_LENGTH: 'legsLength',
  BONE_MASS: 'km',
  HEIGHT: 'height'
};

export const LABELS = {
  [RESULT_KEY.SHOULDER_DIAMETER]: 'Диаметр плеча',
  [RESULT_KEY.FOREARM_DIAMETER]: 'Диаметр предплечья',
  [RESULT_KEY.HIP_DIAMETER]: 'Диаметр бедра',
  [RESULT_KEY.SHIN_DIAMETER]: 'Диаметр голени',
  [RESULT_KEY.LEG_LENGTH]: 'Нога',
  [RESULT_KEY.SHIN_LENGTH]: 'Длина голени',
  [RESULT_KEY.HIP_LENGTH]: 'Бедро',
  [RESULT_KEY.HEIGHT]: 'Рост'
};
