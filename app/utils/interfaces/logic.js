import { LOCATION_CHANGE } from 'connected-react-router';
import { stringify } from 'querystring';
import { createLogic } from 'redux-logic';

import { CHANGE_DATE, DATES_LOAD_SUCCESS } from '@/containers/DateSelector/constants';
import { makeSelectCurrentDateRange } from '@/containers/DateSelector/selectors';
import { CHANGE_TEST } from '@/pages/TestPage/constants';
import { makeSelectPersonId } from '@/pages/TestPage/selectors';

export const getDataByDateRangeLogic = CONSTANTS =>
  createLogic({
    type: [DATES_LOAD_SUCCESS, CHANGE_DATE],
    cancelType: [CHANGE_TEST, LOCATION_CHANGE],
    latest: true,
    processOptions: {
      dispatchReturn: true,
      successType: CONSTANTS.ACTIONS.DATE_RANGE_LOAD_SUCCESS,
      failType: CONSTANTS.ACTIONS.DATE_RANGE_LOAD_ERROR
    },
    process({ getState, request }) {
      const { API_PATH, API_TYPE, GRAPHQL_BACK_TYPE, GRAPHQL_KEYS } = CONSTANTS;

      const query = {
        personId: makeSelectPersonId()(getState()), ...makeSelectCurrentDateRange()(getState())
      };

      if (GRAPHQL_BACK_TYPE)
      {

        let graphQlKeys = '';

        for (let i = 0; i < GRAPHQL_KEYS.length; i++) {
          graphQlKeys += GRAPHQL_KEYS[i];
          if ( i !== GRAPHQL_KEYS.length - 1) {
            graphQlKeys += ',';
          }
        }


        const Gquery = `
        query ${API_PATH}Query ( $PersonId : Int! ) {
          ${API_PATH}( personId : $PersonId ) {
           id,
           personId,
           ${graphQlKeys}
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
            variables: { PersonId: query.personId }
          })
        }).then(result => result.data[API_PATH]);

      }

      else

      {

        if (API_TYPE === 'string') {
          query.type = API_TYPE;
        } else if (API_TYPE && API_TYPE.type && API_TYPE.value) {
          query[API_TYPE.type] = API_TYPE.value;
        }

        const requestURL = `${API_URL}/${API_PATH}/?${stringify(query)}`;
        return request(requestURL);

      }


    }
  });

export const getAllDataLogic = CONSTANTS =>
  createLogic({
    type: DATES_LOAD_SUCCESS,
    cancelType: [CHANGE_TEST, LOCATION_CHANGE],
    latest: true,
    processOptions: {
      dispatchReturn: true,
      successType: CONSTANTS.ACTIONS.LOAD_SUCCESS,
      failType: CONSTANTS.ACTIONS.LOAD_ERROR
    },
    process({ getState, request }) {
      const { API_PATH, API_TYPE, GRAPHQL_BACK_TYPE, GRAPHQL_KEYS } = CONSTANTS;

      const query = {
        personId: makeSelectPersonId()(getState())
      };


      if (GRAPHQL_BACK_TYPE)
      {

        let graphQlKeys = '';

        for (let i = 0; i < GRAPHQL_KEYS.length; i++) {
          graphQlKeys += GRAPHQL_KEYS[i];
          if ( i !== GRAPHQL_KEYS.length - 1) {
            graphQlKeys += ',';
          }
        }


        const Gquery = `
        query ${API_PATH}Query ( $PersonId : Int! ) {
          ${API_PATH}( personId : $PersonId ) {
           id,
           personId,
           ${graphQlKeys}
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
            variables: { PersonId: query.personId }
          })
        }).then(result => result.data[API_PATH]);

      }

      else

      {

        if (API_TYPE === 'string') {
         query.type = API_TYPE;
        } else if (API_TYPE && API_TYPE.type && API_TYPE.value) {
          query[API_TYPE.type] = API_TYPE.value;
        }

        const requestURL = `${API_URL}/${API_PATH}/?${stringify(query)}`;
        return request(requestURL);

      }

    }
  });
