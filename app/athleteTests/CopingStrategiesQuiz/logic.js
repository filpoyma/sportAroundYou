import { createLogic } from 'redux-logic';

import { API_PATH } from '@/athleteTests/CopingStrategies/constants';
import { ROUTE } from '@/pages/Root/constants';
import { replaceTest } from '@/pages/TestPage/actions';
import { makeSelectPersonId } from '@/pages/TestPage/selectors';

import {
  COPING_STRATEGIES_SAVE_INTERPRETATION,
  COPING_STRATEGIES_SAVE_INTERPRETATION_ERROR,
  COPING_STRATEGIES_SAVE_INTERPRETATION_SUCCESS
} from './constants';
export const saveInterpretation = createLogic({
  type: COPING_STRATEGIES_SAVE_INTERPRETATION,
  latest: true,
  processOptions: {
    dispatchReturn: true,
    failType: COPING_STRATEGIES_SAVE_INTERPRETATION_ERROR
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
        type: COPING_STRATEGIES_SAVE_INTERPRETATION_SUCCESS
      });

      dispatch(replaceTest(ROUTE.TEST.COPING_STRATEGIES));

      done();
    });
  }
});

export default [saveInterpretation];
