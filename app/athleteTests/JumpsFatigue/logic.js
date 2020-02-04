import { LOCATION_CHANGE } from 'connected-react-router';
import { stringify } from 'querystring';
import { createLogic } from 'redux-logic';

import { CHANGE_DATE, DATES_LOAD_SUCCESS } from '@/containers/DateSelector/constants';
import { makeSelectCurrentDateRange } from '@/containers/DateSelector/selectors';
import { CHANGE_TEST } from '@/pages/TestPage/constants';
import { makeSelectPersonId } from '@/pages/TestPage/selectors';

import {
  API_PATH,
  JUMPS_FATUGUE_LOAD_ERROR,
  JUMPS_FATUGUE_LOAD_SUCCESS,
  JUMPS_FATUGUE_LOADING
} from './constants';

export const getByDateRangeLogic = createLogic({
  type: [DATES_LOAD_SUCCESS, CHANGE_DATE, JUMPS_FATUGUE_LOADING],
  cancelType: [CHANGE_TEST, LOCATION_CHANGE],
  latest: true,
  processOptions: {
    dispatchReturn: true,
    successType: JUMPS_FATUGUE_LOAD_SUCCESS,
    failType: JUMPS_FATUGUE_LOAD_ERROR
  },
  process({ getState, request }) {
    const query = {
      personId: makeSelectPersonId()(getState()),
      ...makeSelectCurrentDateRange()(getState())
    };

    const requestURL = `${API_URL}/${API_PATH}/?${stringify(query)}`;
    return request(requestURL);
  }
});

export default [getByDateRangeLogic];
