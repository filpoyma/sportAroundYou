import { LOCATION_CHANGE } from 'connected-react-router';
import { stringify } from 'querystring';
import { createLogic } from 'redux-logic';

import { CHANGE_DATE, DATES_LOAD_SUCCESS } from '@/containers/DateSelector/constants';
import { makeSelectCurrentDateRange } from '@/containers/DateSelector/selectors';
import { CHANGE_TEST } from '@/pages/TestPage/constants';
import { makeSelectPersonId } from '@/pages/TestPage/selectors';

import {
  API_PATH,
  COORDINATION_JUMPS_DIFF_HORIZONTAL_BY_DATE_RANGE_LOAD_ERROR,
  COORDINATION_JUMPS_DIFF_HORIZONTAL_BY_DATE_RANGE_LOAD_SUCCESS,
  COORDINATION_JUMPS_DIFF_HORIZONTAL_LOAD_ERROR,
  COORDINATION_JUMPS_DIFF_HORIZONTAL_LOAD_SUCCESS
} from './constants';

export const getByDateRangeLogic = createLogic({
  type: [DATES_LOAD_SUCCESS, CHANGE_DATE],
  cancelType: [CHANGE_TEST, LOCATION_CHANGE],
  latest: true,
  processOptions: {
    dispatchReturn: true,
    successType: COORDINATION_JUMPS_DIFF_HORIZONTAL_BY_DATE_RANGE_LOAD_SUCCESS,
    failType: COORDINATION_JUMPS_DIFF_HORIZONTAL_BY_DATE_RANGE_LOAD_ERROR
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

export const getAllLogic = createLogic({
  type: DATES_LOAD_SUCCESS,
  cancelType: [CHANGE_TEST, LOCATION_CHANGE],
  latest: true,
  processOptions: {
    dispatchReturn: true,
    successType: COORDINATION_JUMPS_DIFF_HORIZONTAL_LOAD_SUCCESS,
    failType: COORDINATION_JUMPS_DIFF_HORIZONTAL_LOAD_ERROR
  },
  process({ getState, request }) {
    const requestURL = `${API_URL}/${API_PATH}/?personId=${makeSelectPersonId()(getState())}`;
    return request(requestURL);
  }
});

export default [getByDateRangeLogic, getAllLogic];
