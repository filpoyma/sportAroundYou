import { createLogic } from 'redux-logic';

import { API_PATH } from '@/athleteTests/SportMotivation/constants';
import { ROUTE } from '@/pages/Root/constants';
import { replaceTest } from '@/pages/TestPage/actions';
import { makeSelectPersonId } from '@/pages/TestPage/selectors';

import {
  SPORT_MOTIVATION_SAVE_INTERPRETATION,
  SPORT_MOTIVATION_SAVE_INTERPRETATION_ERROR,
  SPORT_MOTIVATION_SAVE_INTERPRETATION_SUCCESS
} from './constants';
export const saveInterpretation = createLogic({
  type: SPORT_MOTIVATION_SAVE_INTERPRETATION,
  latest: true,
  processOptions: {
    dispatchReturn: true,
    failType: SPORT_MOTIVATION_SAVE_INTERPRETATION_ERROR
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
        type: SPORT_MOTIVATION_SAVE_INTERPRETATION_SUCCESS
      });

      dispatch(replaceTest(ROUTE.TEST.SPORT_MOTIVATION));

      done();
    });
  }
});

export default [saveInterpretation];
