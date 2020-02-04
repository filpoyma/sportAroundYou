import { LOCATION_CHANGE } from 'connected-react-router';
import { createLogic } from 'redux-logic';

import { makeSelectPersonId } from '@/pages/TestPage/selectors';

import { DATES_LOAD_ERROR, DATES_LOAD_SUCCESS, GET_DATES_BY_PERSON_ID } from './constants';

export const getDatesLogic = createLogic({
  type: GET_DATES_BY_PERSON_ID,
  cancelType: LOCATION_CHANGE,
  latest: true,
  processOptions: {
    dispatchReturn: true,
    successType: DATES_LOAD_SUCCESS,
    failType: DATES_LOAD_ERROR
  },
  process({ action: { apiPath, apiType, apiBackGraphQl }, getState, request }) {

    if (apiBackGraphQl) {
      const Gquery = `
      query ${apiPath}DatesQuery ( $PersonId : Int! ) {
        ${apiPath}Dates( personId : $PersonId ) {
         id,
         date,
         personId
        }
      }
      `;

      return request(`https://dlab-api.sosportom.ru/graphql`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          query: Gquery,
          variables: { PersonId: makeSelectPersonId()(getState()) }
        })
      }).then(result => result.data[`${apiPath}Dates`]);
    }

    else 

    {

      let requestURL = `${API_URL}/${apiPath}/dates?personId=${makeSelectPersonId()(getState())}`;

      if (apiType === 'string') {
        requestURL += `&type=${apiType}`;
      } else if (apiType && apiType.type && apiType.value) {
        requestURL += `&${apiType.type}=${apiType.value}`;
      }

      return request(requestURL);

    }
  }
});

export default [getDatesLogic];
