export const STATE_KEY = {
  MAIN: 'SportMotivationTest',
  RESULTS: 'results',
  RESULTS_BY_RANGE: 'resultByRange'
};

export const API_PATH = 'sportmotivation';

export const MOTIVATION_KEY = {
  EU: 'eu',
  SS: 'ss',
  FS: 'fs',
  SE: 'se',
  SM: 'sm',
  DU: 'du',
  SP: 'sp',
  RV: 'rv',
  PD: 'pd',
  GP: 'gp'
};

export const SPORT_MOTIVATION_LOAD_SUCCESS = `athleteTests/${STATE_KEY.MAIN}/SPORT_MOTIVATION_LOAD_SUCCESS`;
export const SPORT_MOTIVATION_LOAD_ERROR = `athleteTests/${STATE_KEY.MAIN}/SPORT_MOTIVATION_LOAD_ERROR`;
export const SPORT_MOTIVATION_BY_DATE_RANGE_LOAD_SUCCESS = `athleteTests/${STATE_KEY.MAIN}/SPORT_MOTIVATION_BY_DATE_RANGE_LOAD_SUCCESS`;
export const SPORT_MOTIVATION_BY_DATE_RANGE_LOAD_ERROR = `athleteTests/${STATE_KEY.MAIN}/SPORT_MOTIVATION_BY_DATE_RANGE_LOAD_ERROR`;
