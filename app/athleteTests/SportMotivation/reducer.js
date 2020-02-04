import produce from 'immer';

import { CHANGE_DATE, GET_DATES_BY_PERSON_ID } from '@/containers/DateSelector/constants';
import { REQUEST_STATUS } from '@/utils/constants';

import {
  SPORT_MOTIVATION_BY_DATE_RANGE_LOAD_ERROR,
  SPORT_MOTIVATION_BY_DATE_RANGE_LOAD_SUCCESS,
  SPORT_MOTIVATION_LOAD_ERROR,
  SPORT_MOTIVATION_LOAD_SUCCESS,
  STATE_KEY
} from './constants';
export const initialState = {
  [STATE_KEY.RESULTS]: [],
  [STATE_KEY.RESULTS_BY_RANGE]: [],
  status: {
    [STATE_KEY.RESULTS]: REQUEST_STATUS.LOADING,
    [STATE_KEY.RESULTS_BY_RANGE]: REQUEST_STATUS.LOADING
  }
};

/* eslint-disable default-case, no-param-reassign */
const sportMotivationTestReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SPORT_MOTIVATION_LOAD_SUCCESS:
        draft[STATE_KEY.RESULTS] = action.payload;
        draft.status[STATE_KEY.RESULTS] = REQUEST_STATUS.LOADED;
        break;
      case SPORT_MOTIVATION_LOAD_ERROR:
        draft.status[STATE_KEY.RESULTS] = REQUEST_STATUS.ERROR;
        break;
      case SPORT_MOTIVATION_BY_DATE_RANGE_LOAD_SUCCESS:
        draft[STATE_KEY.RESULTS_BY_RANGE] = action.payload;
        draft.status[STATE_KEY.RESULTS_BY_RANGE] = REQUEST_STATUS.LOADED;
        break;
      case SPORT_MOTIVATION_BY_DATE_RANGE_LOAD_ERROR:
        draft.status[STATE_KEY.RESULTS_BY_RANGE] = REQUEST_STATUS.ERROR;
        break;
      case GET_DATES_BY_PERSON_ID:
        draft.status[STATE_KEY.RESULTS] = REQUEST_STATUS.LOADING;
        draft.status[STATE_KEY.RESULTS_BY_RANGE] = REQUEST_STATUS.LOADING;
        break;
      case CHANGE_DATE:
        draft.status[STATE_KEY.RESULTS_BY_RANGE] = REQUEST_STATUS.LOADING;
        break;
    }
  });

export default sportMotivationTestReducer;
