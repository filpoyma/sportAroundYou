import { createLogic } from 'redux-logic';

import { API_PATH } from '@/athleteTests/RPE/constants';
import { ROUTE } from '@/pages/Root/constants';
import { replaceTest } from '@/pages/TestPage/actions';
import { makeSelectPersonGender, makeSelectPersonId } from '@/pages/TestPage/selectors';

import { RPE_QUIZ_SAVE, RPE_QUIZ_SAVE_ERROR, RPE_QUIZ_SAVE_SUCCESS } from './constants';

export const saveForm = createLogic({
  type: RPE_QUIZ_SAVE,
  latest: true,
  processOptions: {
    dispatchReturn: true,
    failType: RPE_QUIZ_SAVE_ERROR
  },
  process(
    {
      action: { ...inputValues },
      getState,
      request
    },
    dispatch,
    done
  ) {
    const personId = makeSelectPersonId()(getState());

    const Gquery = `
    mutation CreateTestRPE ( $PersonId : Int!, $Minutes: Int!, $Rpe: Int!) {
      createTestRpe (
        personId : $PersonId,
        minutes : $Minutes,
        rpe: $Rpe
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
          Minutes: inputValues.inputValues.parsedValues.duration,
          Rpe: inputValues.inputValues.answers[0]
        }
      })
    }).then(() => {
      dispatch({
        type: RPE_QUIZ_SAVE_SUCCESS
      });

      dispatch(replaceTest(ROUTE.TEST.RPE));

      done();
    });
  }
});

export default [saveForm];
