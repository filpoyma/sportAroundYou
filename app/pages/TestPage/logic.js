import { LOCATION_CHANGE } from 'connected-react-router';
import { createLogic } from 'redux-logic';

import { ATHLETE_LOAD_ERROR, ATHLETE_LOAD_SUCCESS, GET_ATHLETE_BY_ID } from './constants';

export const getAthleteLogic = createLogic({
  type: GET_ATHLETE_BY_ID,
  cancelType: LOCATION_CHANGE,
  latest: true,
  processOptions: {
    dispatchReturn: true,
    successType: ATHLETE_LOAD_SUCCESS,
    failType: ATHLETE_LOAD_ERROR
  },
  process({ action, request }) {
    /* return request( `${API_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({
        username:'denis',
        password: 'test'
      })
    }
    ); */

    const requestURL = `${API_URL}/athletes/${action.id}`;
    return request(requestURL);
  }
});

export default [getAthleteLogic];
