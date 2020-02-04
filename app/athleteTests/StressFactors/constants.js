export const STATE_KEY = {
  MAIN: 'StressFactorsTest',
  RESULTS: 'results',
  RESULTS_BY_RANGE: 'resultByRange'
};

export const API_PATH = 'stressfactor';

export const FACTOR_KEY = {
  ORG_QUESTIONS: 'orgQuestions',
  READINESS: 'readiness',
  PERSONAL: 'personal'
};

export const STRESS_FACTORS_LOAD_SUCCESS = `athleteTests/${STATE_KEY.MAIN}/STRESS_FACTORS_LOAD_SUCCESS`;
export const STRESS_FACTORS_LOAD_ERROR = `athleteTests/${STATE_KEY.MAIN}/STRESS_FACTORS_LOAD_ERROR`;
export const STRESS_FACTORS_BY_DATE_RANGE_LOAD_SUCCESS = `athleteTests/${STATE_KEY.MAIN}/STRESS_FACTORS_BY_DATE_RANGE_LOAD_SUCCESS`;
export const STRESS_FACTORS_BY_DATE_RANGE_LOAD_ERROR = `athleteTests/${STATE_KEY.MAIN}/STRESS_FACTORS_BY_DATE_RANGE_LOAD_ERROR`;
