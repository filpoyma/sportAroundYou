import produce from 'immer';

import { CHANGE_DATE, GET_DATES_BY_PERSON_ID } from '@/containers/DateSelector/constants';
import { REQUEST_STATUS } from '@/utils/constants';

import {
  MOTILITY_JUMPS_DIFF_VERTICAL_BY_DATE_RANGE_LOAD_ERROR,
  MOTILITY_JUMPS_DIFF_VERTICAL_BY_DATE_RANGE_LOAD_SUCCESS,
  MOTILITY_JUMPS_DIFF_VERTICAL_LOAD_ERROR,
  MOTILITY_JUMPS_DIFF_VERTICAL_LOAD_SUCCESS,
  STATE_KEY
} from './constants';
export const initialState = {
  [STATE_KEY.MOTILITY_JUMPS_DIFF_VERTICAL]: [],
  [STATE_KEY.MOTILITY_JUMPS_DIFF_VERTICAL_BY_RANGE]: [],
  status: {
    [STATE_KEY.MOTILITY_JUMPS_DIFF_VERTICAL]: REQUEST_STATUS.LOADING,
    [STATE_KEY.MOTILITY_JUMPS_DIFF_VERTICAL_BY_RANGE]: REQUEST_STATUS.LOADING
  }
};

/* eslint-disable default-case, no-param-reassign */
const motilityJumpsDiffVerticalTestReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case MOTILITY_JUMPS_DIFF_VERTICAL_LOAD_SUCCESS:
        draft[STATE_KEY.MOTILITY_JUMPS_DIFF_VERTICAL] = action.payload;
        draft.status[STATE_KEY.MOTILITY_JUMPS_DIFF_VERTICAL] = REQUEST_STATUS.LOADED;
        break;
      case MOTILITY_JUMPS_DIFF_VERTICAL_BY_DATE_RANGE_LOAD_SUCCESS:
        draft[STATE_KEY.MOTILITY_JUMPS_DIFF_VERTICAL_BY_RANGE] = action.payload;
        draft.status[STATE_KEY.MOTILITY_JUMPS_DIFF_VERTICAL_BY_RANGE] = REQUEST_STATUS.LOADED;
        break;
      case MOTILITY_JUMPS_DIFF_VERTICAL_LOAD_ERROR:
        draft.status[STATE_KEY.MOTILITY_JUMPS_DIFF_VERTICAL] = REQUEST_STATUS.ERROR;
        break;
      case MOTILITY_JUMPS_DIFF_VERTICAL_BY_DATE_RANGE_LOAD_ERROR:
        draft.status[STATE_KEY.MOTILITY_JUMPS_DIFF_VERTICAL_BY_RANGE] = REQUEST_STATUS.ERROR;
        break;
      case GET_DATES_BY_PERSON_ID:
        draft.status[STATE_KEY.RESULTS] = REQUEST_STATUS.LOADING;
        draft.status[STATE_KEY.RESULTS_BY_RANGE] = REQUEST_STATUS.LOADING;
        break;
      case CHANGE_DATE:
        draft.status[STATE_KEY.MOTILITY_JUMPS_DIFF_VERTICAL_BY_RANGE] = REQUEST_STATUS.LOADING;
        break;
    }
  });

export default motilityJumpsDiffVerticalTestReducer;
