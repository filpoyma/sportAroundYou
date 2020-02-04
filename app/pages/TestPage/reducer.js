import produce from 'immer';

import { REQUEST_STATUS } from '@/utils/constants';

import {
  ATHLETE_LOAD_ERROR,
  ATHLETE_LOAD_SUCCESS,
  CHANGE_TEST,
  REPLACE_TEST,
  STATE_KEY
} from './constants';

export const initialState = {
  [STATE_KEY.CURRENT_TEST]: '',
  [STATE_KEY.NEXT_TEST]: '',
  [STATE_KEY.ORGANIZATION]: {},
  [STATE_KEY.PERSON]: {},
  [STATE_KEY.SPORT]: {},
  [STATE_KEY.STATUS]: REQUEST_STATUS.LOADING
};

/* eslint-disable default-case, no-param-reassign */
const testPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ATHLETE_LOAD_SUCCESS:
        draft[STATE_KEY.ORGANIZATION] = action.payload.organization;
        draft[STATE_KEY.PERSON] = action.payload.person;
        draft[STATE_KEY.SPORT] = action.payload.sport;
        draft[STATE_KEY.STATUS] = REQUEST_STATUS.LOADED;
        break;
      case ATHLETE_LOAD_ERROR:
        draft[STATE_KEY.STATUS] = REQUEST_STATUS.ERROR;
        break;
      case CHANGE_TEST:
        draft[STATE_KEY.CURRENT_TEST] = action.key;
        draft[STATE_KEY.NEXT_TEST] = '';
        break;
      case REPLACE_TEST:
        draft[STATE_KEY.NEXT_TEST] = action.key;
        break;
    }
  });

export default testPageReducer;
