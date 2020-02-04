import produce from 'immer';

import { REQUEST_STATUS } from '@/utils/constants';

import {
  JUMPS_FATUGUE_LOAD_ERROR,
  JUMPS_FATUGUE_LOAD_SUCCESS,
  JUMPS_FATUGUE_LOADING,
  STATE_KEY
} from './constants';
export const initialState = {
  [STATE_KEY.RESULTS]: [],
  [STATE_KEY.STATUS]: REQUEST_STATUS.LOADING
};

/* eslint-disable default-case, no-param-reassign */
const jumpsFatigueTestReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case JUMPS_FATUGUE_LOAD_ERROR:
        draft[STATE_KEY.STATUS] = REQUEST_STATUS.ERROR;
        break;
      case JUMPS_FATUGUE_LOAD_SUCCESS:
        draft[STATE_KEY.STATUS] = REQUEST_STATUS.LOADED;
        draft[STATE_KEY.RESULTS] = action.payload;
        break;
      case JUMPS_FATUGUE_LOADING:
        draft[STATE_KEY.STATUS] = REQUEST_STATUS.LOADING;
        break;
    }
  });

export default jumpsFatigueTestReducer;
