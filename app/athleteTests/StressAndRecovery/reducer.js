import produce from 'immer';

import { CHANGE_DATE, GET_DATES_BY_PERSON_ID } from '@/containers/DateSelector/constants';
import { REQUEST_STATUS } from '@/utils/constants';

import {
  STATE_KEY,
  STRESS_AND_RECOVERY_BY_DATE_RANGE_LOAD_ERROR,
  STRESS_AND_RECOVERY_BY_DATE_RANGE_LOAD_SUCCESS,
  STRESS_AND_RECOVERY_LOAD_ERROR,
  STRESS_AND_RECOVERY_LOAD_SUCCESS
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
const stressAndRecoveryTestReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case STRESS_AND_RECOVERY_LOAD_SUCCESS:
        draft[STATE_KEY.RESULTS] = action.payload;
        draft.status[STATE_KEY.RESULTS] = REQUEST_STATUS.LOADED;
        break;
      case STRESS_AND_RECOVERY_LOAD_ERROR:
        draft.status[STATE_KEY.RESULTS] = REQUEST_STATUS.ERROR;
        break;
      case STRESS_AND_RECOVERY_BY_DATE_RANGE_LOAD_SUCCESS:
        draft[STATE_KEY.RESULTS_BY_RANGE] = action.payload;
        draft.status[STATE_KEY.RESULTS_BY_RANGE] = REQUEST_STATUS.LOADED;
        break;
      case STRESS_AND_RECOVERY_BY_DATE_RANGE_LOAD_ERROR:
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

export default stressAndRecoveryTestReducer;
