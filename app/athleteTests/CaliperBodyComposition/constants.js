import CONSTANTS from '@/utils/interfaces/constants';

const REDUCER_KEY = 'CaliperBodyCompositionTest';
export const API_PATH = 'caliperometry2';

export default CONSTANTS(REDUCER_KEY, API_PATH);

export const RESULT_KEY = {
  BELLY: 'belly',
  BFM: 'bfm',
  BICEPS: 'biceps',
  BMI: 'bmi',
  CHEST: 'chest',
  D: 'd',
  FFM: 'ffm',
  FOREARM: 'forearm',
  HEIGHT: 'height',
  HIP_MID: 'hipMid',
  HIP_UP: 'hipUp',
  ILIAC: 'iliac',
  PBFM: 'pbfm',
  PFFM: 'pffm',
  SHIN: 'shin',
  TRICEPS: 'triceps',
  UNDER_SHOULDER_BLADE: 'underShoulderBlade',
  WEIGHT: 'weight',
  WRIST: 'wrist',
  SHOULDER_TENSIONED_R: 'shoulderTensionedR',
  SHOULDER_TENSIONED_L: 'shoulderTensionedL',
  SHOULDER_RELAXED_R: 'shoulderRelaxedR',
  SHOULDER_RELAXED_L: 'shoulderRelaxedL',
  FOREARM_R: 'forearmR',
  FOREARM_L: 'forearmL',
  WAIST: 'waist',
  HIPS: 'hips',
  HIP_UP_RIGHT: 'hipUpRight',
  HIP_UP_LEFT: 'hipUpLeft',
  HIP_MID_RIGHT: 'hipMidRight',
  HIP_MID_LEFT: 'hipMidLeft',
  SHIN_LEFT: 'shinLeft',
  SHIN_RIGHT: 'shinRight'
};

export const LABELS = {
  [RESULT_KEY.BICEPS]: 'Бицепс',
  [RESULT_KEY.FOREARM]: 'Предплечье',
  [RESULT_KEY.WRIST]: 'Кисть',
  [RESULT_KEY.ILIAC]: 'Подвздошная',
  [RESULT_KEY.UNDER_SHOULDER_BLADE]: 'Под лопаткой',
  [RESULT_KEY.TRICEPS]: 'Трицепс',
  [RESULT_KEY.BELLY]: 'На животе',
  [RESULT_KEY.HIP_UP]: 'Бедро верх',
  [RESULT_KEY.HIP_MID]: 'Бедро середина',
  [RESULT_KEY.SHIN]: 'Голень',
  [RESULT_KEY.CHEST]: 'Грудная складка'
};

export const LABELS_INPUT = {
  [RESULT_KEY.BICEPS]: 'Складка на бицепсе, мм',
  [RESULT_KEY.FOREARM]: 'Складка на предплечье, мм',
  [RESULT_KEY.WRIST]: 'Складка на кисти, мм',
  [RESULT_KEY.ILIAC]: 'Складка на подвздошной, мм',
  [RESULT_KEY.UNDER_SHOULDER_BLADE]: 'Складка под лопаткой ,мм',
  [RESULT_KEY.TRICEPS]: 'Складка на трицепсе ,мм',
  [RESULT_KEY.BELLY]: 'Складка на животе ,мм',
  [RESULT_KEY.HIP_UP]: 'Складка на бедре верх ,мм',
  [RESULT_KEY.HIP_MID]: 'Складка на бедре середина ,мм',
  [RESULT_KEY.SHIN]: 'Складка на голени ,мм',
  [RESULT_KEY.CHEST]: 'Грудной складка ,мм',
  [RESULT_KEY.SHOULDER_TENSIONED_L]: 'Плечо напряженное',
  [RESULT_KEY.SHOULDER_TENSIONED_R]: 'Плечо напряженное',
  [RESULT_KEY.SHOULDER_RELAXED_L]: 'Плечо расслабленное',
  [RESULT_KEY.SHOULDER_RELAXED_R]: 'Плечо расслабленное',
  [RESULT_KEY.FOREARM_L]: 'Предплечье',
  [RESULT_KEY.FOREARM_R]: 'Предплечье',
  [RESULT_KEY.HIP_UP_LEFT]: 'Бедро верх',
  [RESULT_KEY.HIP_UP_RIGHT]: 'Бедро верх',
  [RESULT_KEY.HIP_MID_LEFT]: 'Бедро середина',
  [RESULT_KEY.HIP_MID_RIGHT]: 'Бедро середина',
  [RESULT_KEY.SHIN_LEFT]: 'Голень макс',
  [RESULT_KEY.SHIN_RIGHT]: 'Голень макс',
  [RESULT_KEY.HEIGHT]: 'Рост',
  [RESULT_KEY.HIPS]: 'Бедра вместе',
  [RESULT_KEY.WAIST]: 'Талия',
  [RESULT_KEY.WEIGHT]: 'Вес'
};
