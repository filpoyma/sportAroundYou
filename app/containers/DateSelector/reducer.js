import produce from 'immer';

import { CHANGE_TEST } from '@/pages/TestPage/constants';
import { REQUEST_STATUS } from '@/utils/constants';

import {
  CHANGE_DATE,
  CHANGE_DATE_RANGE,
  DATES_LOAD_ERROR,
  DATES_LOAD_SUCCESS,
  GET_DATES_BY_PERSON_ID,
  STATE_KEY
} from './constants';

export const initialState = {
  [STATE_KEY.CURRENT_DATE]: null,
  [STATE_KEY.DATES]: [],
  [STATE_KEY.DATE_RANGE_LAST_INDEX]: null,
  [STATE_KEY.STATUS]: REQUEST_STATUS.LOADING
};

/* eslint-disable default-case, no-param-reassign */
const dateSelectorReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_DATE:
        draft[STATE_KEY.CURRENT_DATE] = action.id;
        break;
      case CHANGE_DATE_RANGE:
        draft[STATE_KEY.DATE_RANGE_LAST_INDEX] += action.direction;
        break;
      case DATES_LOAD_SUCCESS:
        draft[STATE_KEY.DATES] = action.payload;
        draft[STATE_KEY.CURRENT_DATE] = action.payload?.length > 0 ? action.payload[0].id : null;
        draft[STATE_KEY.DATE_RANGE_LAST_INDEX] = Math.min(3, action.payload.length);
        draft[STATE_KEY.STATUS] = REQUEST_STATUS.LOADED;
        break;
      case DATES_LOAD_ERROR:
        draft[STATE_KEY.STATUS] = REQUEST_STATUS.ERROR;
        break;
      case GET_DATES_BY_PERSON_ID:
      case CHANGE_TEST:
        draft[STATE_KEY.STATUS] = REQUEST_STATUS.LOADING;
        break;
    }
  });

export default dateSelectorReducer;
