export const STATE_KEY = {
  MAIN: 'CaliperometryTest',
  RESULTS: 'results',
  RESULTS_BY_RANGE: 'resultsByRange'
};

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
  WRIST: 'wrist'
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

export const API_PATH = 'caliperometry';

export const CALIPEROMETRY_LOAD_SUCCESS = `athleteTests/${STATE_KEY.MAIN}/CALIPEROMETRY_LOAD_SUCCESS`;
export const CALIPEROMETRY_LOAD_ERROR = `athleteTests/${STATE_KEY.MAIN}/CALIPEROMETRY_LOAD_ERROR`;

export const CALIPEROMETRY_BY_DATE_RANGE_LOAD_SUCCESS = `athleteTests/${STATE_KEY.MAIN}/CALIPEROMETRY_BY_DATE_RANGE_LOAD_SUCCESS`;
export const CALIPEROMETRY_BY_DATE_RANGE_LOAD_ERROR = `athleteTests/${STATE_KEY.MAIN}/CALIPEROMETRY_BY_DATE_RANGE_LOAD_ERROR`;
