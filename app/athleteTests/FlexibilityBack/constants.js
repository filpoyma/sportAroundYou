export const STATE_KEY = {
  MAIN: 'FlexibilityBackTest',
  RESULTS: 'results',
  RESULTS_BY_RANGE: 'resultsByRange'
};

export const RESULT_KEY = {
  BACK: 'back'
};

export const API_PATH = 'flexibility';

export const API_TYPE = 'BACK';

export const FLEXIBILITY_BACK_LOAD_SUCCESS = `athleteTests/${STATE_KEY.MAIN}/FLEXIBILITY_BACK_LOAD_SUCCESS`;
export const FLEXIBILITY_BACK_LOAD_ERROR = `athleteTests/${STATE_KEY.MAIN}/FLEXIBILITY_BACK_LOAD_ERROR`;

export const FLEXIBILITY_BACK_BY_DATE_RANGE_LOAD_SUCCESS = `athleteTests/${STATE_KEY.MAIN}/FLEXIBILITY_BACK_BY_DATE_RANGE_LOAD_SUCCESS`;
export const FLEXIBILITY_BACK_BY_DATE_RANGE_LOAD_ERROR = `athleteTests/${STATE_KEY.MAIN}/FLEXIBILITY_BACK_BY_DATE_RANGE_LOAD_ERROR`;
