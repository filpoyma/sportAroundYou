import { createLogic } from 'redux-logic';

import { ROUTE } from '@/pages/Root/constants';
import { replaceTest } from '@/pages/TestPage/actions';
import { makeSelectPersonId } from '@/pages/TestPage/selectors';
import { RESULT_KEY } from '@/athleteTests/MAMSkiEgrometer/constants';

import {
  MAM_SKI_EGROMETER_SAVE,
  MAM_SKI_EGROMETER_SAVE_ERROR,
  MAM_SKI_EGROMETER_SAVE_SUCCESS
} from './constants';

export const saveForm = createLogic({
  type: MAM_SKI_EGROMETER_SAVE,
  latest: true,
  processOptions: {
    dispatchReturn: true,
    failType: MAM_SKI_EGROMETER_SAVE_ERROR
  },
  process(
    {
      action: { inputValues },
      getState,
      request
    },
    dispatch,
    done
  ) {
    const personId = makeSelectPersonId()(getState());

    const Gquery = `
    mutation CreateTestMAMSki ( $PersonId : Int!, $MaxPow: Float!, $MaxFreq: Float!, $Weight: Float!) {
      createTestMamSki (
        personId : $PersonId,
        maxPow: $MaxPow,
        maxFreq: $MaxFreq,
        weight: $Weight 
      ) {
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
        variables: {
          PersonId: personId,
          MaxPow: inputValues[RESULT_KEY.MAXPOWER],
          MaxFreq: inputValues[RESULT_KEY.MAXCAP],
          Weight: inputValues[RESULT_KEY.WEIGHT]
        }
      })
    }).then(() => {
      dispatch({
        type: MAM_SKI_EGROMETER_SAVE_SUCCESS
      });

      dispatch(replaceTest(ROUTE.TEST.MAM_SKI_EGROMETER));

      done();
    });
  }
});

export default [saveForm];
