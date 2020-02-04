import produce from 'immer';

import { CHANGE_DATE, GET_DATES_BY_PERSON_ID } from '@/containers/DateSelector/constants';
import { REQUEST_STATUS } from '@/utils/constants';

import {
  SPEED_AND_POWER_THREE_JUMPS_BY_DATE_RANGE_LOAD_ERROR,
  SPEED_AND_POWER_THREE_JUMPS_BY_DATE_RANGE_LOAD_SUCCESS,
  SPEED_AND_POWER_THREE_JUMPS_LOAD_ERROR,
  SPEED_AND_POWER_THREE_JUMPS_LOAD_SUCCESS,
  STATE_KEY
} from './constants';
export const initialState = {
  [STATE_KEY.SPEED_AND_POWER_THREE_JUMPS]: [],
  [STATE_KEY.SPEED_AND_POWER_THREE_JUMPS_BY_RANGE]: [],
  status: {
    [STATE_KEY.SPEED_AND_POWER_THREE_JUMPS]: REQUEST_STATUS.LOADING,
    [STATE_KEY.SPEED_AND_POWER_THREE_JUMPS_BY_RANGE]: REQUEST_STATUS.LOADING
  }
};

/* eslint-disable default-case, no-param-reassign */
const SpeedAndPowerThreeJumpsTestReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SPEED_AND_POWER_THREE_JUMPS_LOAD_SUCCESS:
        draft[STATE_KEY.SPEED_AND_POWER_THREE_JUMPS] = action.payload;
        draft.status[STATE_KEY.SPEED_AND_POWER_THREE_JUMPS] = REQUEST_STATUS.LOADED;
        break;
      case SPEED_AND_POWER_THREE_JUMPS_BY_DATE_RANGE_LOAD_SUCCESS:
        draft[STATE_KEY.SPEED_AND_POWER_THREE_JUMPS_BY_RANGE] = action.payload;
        draft.status[STATE_KEY.SPEED_AND_POWER_THREE_JUMPS_BY_RANGE] = REQUEST_STATUS.LOADED;
        break;
      case SPEED_AND_POWER_THREE_JUMPS_LOAD_ERROR:
        draft.status[STATE_KEY.SPEED_AND_POWER_THREE_JUMPS] = REQUEST_STATUS.ERROR;
        break;
      case SPEED_AND_POWER_THREE_JUMPS_BY_DATE_RANGE_LOAD_ERROR:
        draft.status[STATE_KEY.SPEED_AND_POWER_THREE_JUMPS_BY_RANGE] = REQUEST_STATUS.ERROR;
        break;
      case GET_DATES_BY_PERSON_ID:
        draft.status[STATE_KEY.RESULTS] = REQUEST_STATUS.LOADING;
        draft.status[STATE_KEY.RESULTS_BY_RANGE] = REQUEST_STATUS.LOADING;
        break;
      case CHANGE_DATE:
        draft.status[STATE_KEY.SPEED_AND_POWER_THREE_JUMPS_BY_RANGE] = REQUEST_STATUS.LOADING;
        break;
    }
  });

export default SpeedAndPowerThreeJumpsTestReducer;
