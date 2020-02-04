import { createLogic } from 'redux-logic';

import { API_PATH } from '@/athleteTests/MotilityJumpsDiffHorizontal/constants';
import { ROUTE } from '@/pages/Root/constants';
import { replaceTest } from '@/pages/TestPage/actions';
import { makeSelectPersonId } from '@/pages/TestPage/selectors';

import {
  MOTILITY_JUMPS_DIFF_HORIZONTAL_SAVE,
  MOTILITY_JUMPS_DIFF_HORIZONTAL_SAVE_ERROR,
  MOTILITY_JUMPS_DIFF_HORIZONTAL_SAVE_SUCCESS
} from './constants';
export const saveInterpretation = createLogic({
  type: MOTILITY_JUMPS_DIFF_HORIZONTAL_SAVE,
  latest: true,
  processOptions: {
    dispatchReturn: true,
    failType: MOTILITY_JUMPS_DIFF_HORIZONTAL_SAVE_ERROR
  },
  process(
    {
      action: { data },
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
        rawData: data
      })
    }).then(() => {
      dispatch({
        type: MOTILITY_JUMPS_DIFF_HORIZONTAL_SAVE_SUCCESS
      });

      dispatch(replaceTest(ROUTE.TEST.MOTILITY_JUMPS_DIFF_HORIZONTAL));

      done();
    });
  }
});

export default [saveInterpretation];
