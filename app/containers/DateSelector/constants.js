export const STATE_KEY = {
  CURRENT_DATE: 'currentDate',
  DATES: 'dates',
  DATE_RANGE_LAST_INDEX: 'dateRangeLastIndex',
  MAIN: 'DateSelector',
  STATUS: 'status'
};

export const CHANGE_DATE = `containers/${STATE_KEY.MAIN}/CHANGE_DATE`;
export const CHANGE_DATE_RANGE = `containers/${STATE_KEY.MAIN}/CHANGE_DATE_RANGE`;
export const GET_DATES_BY_PERSON_ID = `containers/${STATE_KEY.MAIN}/GET_DATES_BY_PERSON_ID`;
export const DATES_LOAD_SUCCESS = `containers/${STATE_KEY.MAIN}/DATES_LOAD_SUCCESS`;
export const DATES_LOAD_ERROR = `containers/${STATE_KEY.MAIN}/DATES_LOAD_ERROR`;
