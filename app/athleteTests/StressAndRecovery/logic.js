import { LOCATION_CHANGE } from 'connected-react-router';
import { stringify } from 'querystring';
import { createLogic } from 'redux-logic';

import { CHANGE_DATE, DATES_LOAD_SUCCESS } from '@/containers/DateSelector/constants';
import { makeSelectCurrentDateRange } from '@/containers/DateSelector/selectors';
import { CHANGE_TEST } from '@/pages/TestPage/constants';
import { makeSelectPersonId } from '@/pages/TestPage/selectors';

import {
  API_PATH,
  STRESS_AND_RECOVERY_BY_DATE_RANGE_LOAD_ERROR,
  STRESS_AND_RECOVERY_BY_DATE_RANGE_LOAD_SUCCESS,
  STRESS_AND_RECOVERY_LOAD_ERROR,
  STRESS_AND_RECOVERY_LOAD_SUCCESS
} from './constants';

export const getByDateRangeLogic = createLogic({
  type: [DATES_LOAD_SUCCESS, CHANGE_DATE],
  cancelType: [CHANGE_TEST, LOCATION_CHANGE],
  latest: true,
  processOptions: {
    dispatchReturn: true,
    successType: STRESS_AND_RECOVERY_BY_DATE_RANGE_LOAD_SUCCESS,
    failType: STRESS_AND_RECOVERY_BY_DATE_RANGE_LOAD_ERROR
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
    successType: STRESS_AND_RECOVERY_LOAD_SUCCESS,
    failType: STRESS_AND_RECOVERY_LOAD_ERROR
  },
  process({ getState, request }) {
    const personId = makeSelectPersonId()(getState());

    const requestURL = `${API_URL}/${API_PATH}/?personId=${personId}`;
    return request(requestURL);
  }
});

export default [getByDateRangeLogic, getAllLogic];
