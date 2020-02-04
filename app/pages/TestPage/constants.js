export const STATE_KEY = {
  CURRENT_TEST: 'currentTest',
  MAIN: 'TestPage',
  NEXT_TEST: 'nextTest',
  ORGANIZATION: 'organization',
  PERSON: 'person',
  SPORT: 'sport',
  STATUS: 'status'
};

export const GET_ATHLETE_BY_ID = `pages/${STATE_KEY.MAIN}/GET_ATHLETE_BY_ID`;
export const ATHLETE_LOAD_SUCCESS = `pages/${STATE_KEY.MAIN}/ATHLETE_LOAD_SUCCESS`;
export const ATHLETE_LOAD_ERROR = `pages/${STATE_KEY.MAIN}/ATHLETE_LOAD_ERROR`;

export const CHANGE_TEST = `pages/${STATE_KEY.MAIN}/CHANGE_TEST`;
export const REPLACE_TEST = `pages/${STATE_KEY.MAIN}/REPLACE_TEST`;
