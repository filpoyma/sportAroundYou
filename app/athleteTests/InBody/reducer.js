import produce from 'immer';

import { CHANGE_DATE, GET_DATES_BY_PERSON_ID } from '@/containers/DateSelector/constants';
import { REQUEST_STATUS } from '@/utils/constants';

import {
  INBODY_BY_DATE_RANGE_LOAD_ERROR,
  INBODY_BY_DATE_RANGE_LOAD_SUCCESS,
  INBODY_LOAD_ERROR,
  INBODY_LOAD_SUCCESS,
  STATE_KEY
} from './constants';
export const initialState = {
  [STATE_KEY.IN_BODY]: [],
  [STATE_KEY.IN_BODY_BY_RANGE]: [],
  status: {
    [STATE_KEY.IN_BODY]: REQUEST_STATUS.LOADING,
    [STATE_KEY.IN_BODY_BY_RANGE]: REQUEST_STATUS.LOADING
  }
};

/* eslint-disable default-case, no-param-reassign */
const inBodyTestReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case INBODY_LOAD_SUCCESS:
        draft[STATE_KEY.IN_BODY] = action.payload;
        draft.status[STATE_KEY.IN_BODY] = REQUEST_STATUS.LOADED;
        break;
      case INBODY_BY_DATE_RANGE_LOAD_SUCCESS:
        draft[STATE_KEY.IN_BODY_BY_RANGE] = action.payload;
        draft.status[STATE_KEY.IN_BODY_BY_RANGE] = REQUEST_STATUS.LOADED;
        break;
      case INBODY_LOAD_ERROR:
        draft.status[STATE_KEY.IN_BODY] = REQUEST_STATUS.ERROR;
        break;
      case INBODY_BY_DATE_RANGE_LOAD_ERROR:
        draft.status[STATE_KEY.IN_BODY_BY_RANGE] = REQUEST_STATUS.ERROR;
        break;
      case GET_DATES_BY_PERSON_ID:
        draft.status[STATE_KEY.RESULTS] = REQUEST_STATUS.LOADING;
        draft.status[STATE_KEY.RESULTS_BY_RANGE] = REQUEST_STATUS.LOADING;
        break;
      case CHANGE_DATE:
        draft.status[STATE_KEY.IN_BODY_BY_RANGE] = REQUEST_STATUS.LOADING;
        break;
    }
  });

export default inBodyTestReducer;
