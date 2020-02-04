import produce from 'immer';

import { REQUEST_STATUS } from '@/utils/constants';

import {
  LOAD_INTERPRETATION,
  LOAD_INTERPRETATION_ERROR,
  LOAD_INTERPRETATION_SUCCESS,
  SAVE_INTERPRETATION,
  SAVE_INTERPRETATION_ERROR,
  SAVE_INTERPRETATION_SUCCESS,
  STATE_KEY
} from './constants';

export const initialState = {
  [STATE_KEY.DATA]: '',
  [STATE_KEY.LOADED_STATUS]: REQUEST_STATUS.LOADING,
  [STATE_KEY.SAVED_STATUS]: REQUEST_STATUS.WAITING
};

/* eslint-disable default-case, no-param-reassign */
const InterpretationReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SAVE_INTERPRETATION:
        draft[STATE_KEY.SAVED_STATUS] = REQUEST_STATUS.LOADING;
        break;
      case SAVE_INTERPRETATION_SUCCESS:
        draft[STATE_KEY.SAVED_STATUS] = REQUEST_STATUS.LOADED;
        break;
      case SAVE_INTERPRETATION_ERROR:
        draft[STATE_KEY.SAVED_STATUS] = REQUEST_STATUS.ERROR;
        break;

      case LOAD_INTERPRETATION:
        draft[STATE_KEY.LOADED_STATUS] = REQUEST_STATUS.LOADING;
        break;
      case LOAD_INTERPRETATION_SUCCESS:
        draft[STATE_KEY.DATA] = action.payload;
        draft[STATE_KEY.LOADED_STATUS] = REQUEST_STATUS.LOADED;
        break;
      case LOAD_INTERPRETATION_ERROR:
        draft[STATE_KEY.LOADED_STATUS] = REQUEST_STATUS.ERROR;
        break;
    }
  });

export default InterpretationReducer;
