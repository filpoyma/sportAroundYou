import { LOCATION_CHANGE } from 'connected-react-router';
import { createLogic } from 'redux-logic';

import { CHANGE_DATE, DATES_LOAD_SUCCESS } from '@/containers/DateSelector/constants';
import { makeSelectCurrentDate } from '@/containers/DateSelector/selectors';
import { CHANGE_TEST } from '@/pages/TestPage/constants';
import { makeSelectCurrentTestKey, makeSelectPersonId } from '@/pages/TestPage/selectors';

import {
  API_PATH,
  LOAD_INTERPRETATION,
  LOAD_INTERPRETATION_ERROR,
  LOAD_INTERPRETATION_SUCCESS,
  SAVE_INTERPRETATION,
  SAVE_INTERPRETATION_ERROR,
  SAVE_INTERPRETATION_SUCCESS
} from './constants';
import { makeSelectInterpretationId } from './selectors';

export const saveInterpretatiton = createLogic({
  type: SAVE_INTERPRETATION,
  latest: true,
  processOptions: {
    dispatchReturn: true,
    successType: SAVE_INTERPRETATION_SUCCESS,
    failType: SAVE_INTERPRETATION_ERROR
  },
  process(
    {
      getState,
      action: { interpretatiton },
      request
    },
    dispatch,
    done
  ) {
    const id = makeSelectInterpretationId()(getState());
    const requestURL = `${API_URL}/${API_PATH}/${id ? 'edit' : 'add'}`;

    const body = {
      personId: makeSelectPersonId()(getState()),
      testId: makeSelectCurrentDate()(getState()),
      type: makeSelectCurrentTestKey()(getState()).toUpperCase(),
      comments: interpretatiton
    };

    if (id) {
      body.id = id;
    }

    return request(requestURL, {
      method: id ? 'PUT' : 'POST',
      body: JSON.stringify(body)
    }).then(() => done());
  }
});

export const loadInterpretation = createLogic({
  type: [DATES_LOAD_SUCCESS, CHANGE_DATE, LOAD_INTERPRETATION],
  cancelType: [CHANGE_TEST, LOCATION_CHANGE],
  latest: true,
  processOptions: {
    dispatchReturn: true,
    successType: LOAD_INTERPRETATION_SUCCESS,
    failType: LOAD_INTERPRETATION_ERROR
  },
  process({ getState, request }) {
    const testId = makeSelectCurrentDate()(getState());
    const requestURL = `${API_URL}/${API_PATH}/?testId=${testId}`;
    return request(requestURL);
  }
});

export default [saveInterpretatiton, loadInterpretation];
