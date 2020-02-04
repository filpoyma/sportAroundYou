import { createLogic } from 'redux-logic';

import { ROUTE } from '@/pages/Root/constants';
import { replaceTest } from '@/pages/TestPage/actions';
import { makeSelectPersonId } from '@/pages/TestPage/selectors';
import { now } from '@/utils/formatData';

import {
  STRESS_AND_RECOVERY_SAVE_INTERPRETATION,
  STRESS_AND_RECOVERY_SAVE_INTERPRETATION_ERROR,
  STRESS_AND_RECOVERY_SAVE_INTERPRETATION_SUCCESS
} from './constants';

export const saveInterpretation = createLogic({
  type: STRESS_AND_RECOVERY_SAVE_INTERPRETATION,
  latest: true,
  processOptions: {
    dispatchReturn: true,
    failType: STRESS_AND_RECOVERY_SAVE_INTERPRETATION_ERROR
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

    const requestURL = `${API_URL}/add/stressAndRecovery`;
    return request(requestURL, {
      method: 'POST',
      body: JSON.stringify({
        personId,
        rawData: answers,
        date: now()
      })
    }).then(() => {
      dispatch({
        type: STRESS_AND_RECOVERY_SAVE_INTERPRETATION_SUCCESS
      });

      dispatch(replaceTest(ROUTE.TEST.STRESS_AND_RECOVERY));

      done();
    });
  }
});

export default [saveInterpretation];
