import { createLogic } from 'redux-logic';

import { API_PATH } from '@/athleteTests/StressFactors/constants';
import { ROUTE } from '@/pages/Root/constants';
import { replaceTest } from '@/pages/TestPage/actions';
import { makeSelectPersonId } from '@/pages/TestPage/selectors';

import {
  STRESS_FACTORS_SAVE_INTERPRETATION,
  STRESS_FACTORS_SAVE_INTERPRETATION_ERROR,
  STRESS_FACTORS_SAVE_INTERPRETATION_SUCCESS
} from './constants';
export const saveInterpretation = createLogic({
  type: STRESS_FACTORS_SAVE_INTERPRETATION,
  latest: true,
  processOptions: {
    dispatchReturn: true,
    failType: STRESS_FACTORS_SAVE_INTERPRETATION_ERROR
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

    const requestURL = `${API_URL}/${API_PATH}/add`;
    return request(requestURL, {
      method: 'POST',
      body: JSON.stringify({
        personId,
        rawData: answers
      })
    }).then(() => {
      dispatch({
        type: STRESS_FACTORS_SAVE_INTERPRETATION_SUCCESS
      });

      dispatch(replaceTest(ROUTE.TEST.STRESS_FACTORS));

      done();
    });
  }
});

export default [saveInterpretation];
