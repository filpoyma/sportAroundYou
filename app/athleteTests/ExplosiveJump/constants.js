export const STATE_KEY = {
  MAIN: 'ExplosiveJumpTest',
  RESULTS: 'results',
  RESULTS_BY_RANGE: 'resultsByRange'
};

export const RESULT_KEY = {
  JUMP_HEIGHT: 'jumpHeight',
  JUMP_LENGTH: 'jumpLength'
};

export const API_PATH = 'explosive';

export const API_TYPE = 'JUMPS';

export const EXPLOSIVE_JUMP_LOAD_SUCCESS = `athleteTests/${STATE_KEY.MAIN}/EXPLOSIVE_JUMP_LOAD_SUCCESS`;
export const EXPLOSIVE_JUMP_LOAD_ERROR = `athleteTests/${STATE_KEY.MAIN}/EXPLOSIVE_JUMP_LOAD_ERROR`;

export const EXPLOSIVE_JUMP_BY_DATE_RANGE_LOAD_SUCCESS = `athleteTests/${STATE_KEY.MAIN}/EXPLOSIVE_JUMP_BY_DATE_RANGE_LOAD_SUCCESS`;
export const EXPLOSIVE_JUMP_BY_DATE_RANGE_LOAD_ERROR = `athleteTests/${STATE_KEY.MAIN}/EXPLOSIVE_JUMP_BY_DATE_RANGE_LOAD_ERROR`;
