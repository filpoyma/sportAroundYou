import { createLogic } from 'redux-logic';

import { API_PATH } from '@/athleteTests/CoordinationJumpsDiffHorizontal/constants';
import { ROUTE } from '@/pages/Root/constants';
import { replaceTest } from '@/pages/TestPage/actions';
import { makeSelectPersonId } from '@/pages/TestPage/selectors';

import {
  COORDINATION_JUMPS_DIFF_HORIZONTAL_SAVE,
  COORDINATION_JUMPS_DIFF_HORIZONTAL_SAVE_ERROR,
  COORDINATION_JUMPS_DIFF_HORIZONTAL_SAVE_SUCCESS
} from './constants';
export const saveInterpretation = createLogic({
  type: COORDINATION_JUMPS_DIFF_HORIZONTAL_SAVE,
  latest: true,
  processOptions: {
    dispatchReturn: true,
    failType: COORDINATION_JUMPS_DIFF_HORIZONTAL_SAVE_ERROR
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
        type: COORDINATION_JUMPS_DIFF_HORIZONTAL_SAVE_SUCCESS
      });

      dispatch(replaceTest(ROUTE.TEST.COORDINATION_JUMPS_DIFF_HORIZONTAL));

      done();
    });
  }
});

export default [saveInterpretation];
