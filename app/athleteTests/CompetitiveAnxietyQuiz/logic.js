import { createLogic } from 'redux-logic';

import { ROUTE } from '@/pages/Root/constants';
import { replaceTest } from '@/pages/TestPage/actions';
import { makeSelectPersonId } from '@/pages/TestPage/selectors';

import {
  COMPETITEVE_ANXIETY_SAVE,
  COMPETITEVE_ANXIETY_SAVE_ERROR,
  COMPETITEVE_ANXIETY_SAVE_SUCCESS
} from './constants';

export const saveForm = createLogic({
  type: COMPETITEVE_ANXIETY_SAVE,
  latest: true,
  processOptions: {
    dispatchReturn: true,
    failType: COMPETITEVE_ANXIETY_SAVE_ERROR
  },
  process(
    {
      action: { answers },
      getState,
      request
    },
    dispatch,
    done
  ) {
    const personId = makeSelectPersonId()(getState());

    const Gquery = `
    mutation CreateTestCompAnxiety ( $PersonId : Int!, $Raw: [Int]! ) {
      createTestCompAnxiety (
        personId : $PersonId,
        raw: $Raw
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
          Raw: answers
        }
      })
    }).then(() => {
      dispatch({
        type: COMPETITEVE_ANXIETY_SAVE_SUCCESS
      });

      dispatch(replaceTest(ROUTE.TEST.COMPETITIVE_ANXIETY));

      done();
    });
  }
});

export default [saveForm];
