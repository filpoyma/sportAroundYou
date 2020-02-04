import { createLogic } from 'redux-logic';

import { ROUTE } from '@/pages/Root/constants';
import { replaceTest } from '@/pages/TestPage/actions';
import { makeSelectPersonId } from '@/pages/TestPage/selectors';
import { RESULT_KEY } from '@/athleteTests/HemoglobinMass/constants';

import {
  HEMOGLOBIN_MASS_SAVE_FORM,
  HEMOGLOBIN_MASS_SAVE_FORM_ERROR,
  HEMOGLOBIN_MASS_SAVE_FORM_SUCCESS
} from './constants';

export const saveForm = createLogic({
  type: HEMOGLOBIN_MASS_SAVE_FORM,
  latest: true,
  processOptions: {
    dispatchReturn: true,
    failType: HEMOGLOBIN_MASS_SAVE_FORM_ERROR
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
    mutation CreateTestHemoglobin ( 
        $PersonId : Int!, 
        $MassTotal: Float!, 
        $MassRel: Float!, 
        $BloodTotal: Float!,
        $BloodRel: Float!, 
        $Hemoglobin: Float!
      ) {
      createTestHemoglobin (
        personId : $PersonId,
        massTotal: $MassTotal,
        massRel: $MassRel,
        bloodTotal: $BloodTotal,
        bloodRel: $BloodRel,
        hemoglobin: $Hemoglobin
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
          MassTotal: inputValues[RESULT_KEY.HEMOGLOBIN_TOTAL_MASS],
          MassRel: inputValues[RESULT_KEY.RELATIVE_TOTAL_MASS],
          BloodTotal: inputValues[RESULT_KEY.TOTAL_CIRCULATING_BLOOD_VOLUME],
          BloodRel: inputValues[RESULT_KEY.RELATIVE_CIRCULATING_BLOOD_VOLUME],
          Hemoglobin: inputValues[RESULT_KEY.HEMOGLOBIN],
        }
      })
    }).then(() => {
      dispatch({
        type: HEMOGLOBIN_MASS_SAVE_FORM_SUCCESS
      });

      dispatch(replaceTest(ROUTE.TEST.HEMOGLOBIN_MASS));

      done();
    });
  }
});

export default [saveForm];
