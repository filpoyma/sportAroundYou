import { createLogic } from 'redux-logic';

import CONSTANTS from '@/athleteTests/BackForwardRun/constants';
import { ROUTE } from '@/pages/Root/constants';
import { replaceTest } from '@/pages/TestPage/actions';
import { makeSelectPersonId } from '@/pages/TestPage/selectors';

import {
  BACK_FORWARD_RUN_SAVE_FORM,
  BACK_FORWARD_RUN_SAVE_FORM_ERROR,
  BACK_FORWARD_RUN_SAVE_FORM_SUCCESS
} from './constants';

export const saveForm = createLogic({
  type: BACK_FORWARD_RUN_SAVE_FORM,
  latest: true,
  processOptions: {
    dispatchReturn: true,
    failType: BACK_FORWARD_RUN_SAVE_FORM_ERROR
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

    const requestURL = `${API_URL}/${CONSTANTS.API_PATH}/add`;
    return request(requestURL, {
      method: 'POST',
      body: JSON.stringify({
        personId,
        ...inputValues
      })
    }).then(() => {
      dispatch({
        type: BACK_FORWARD_RUN_SAVE_FORM_SUCCESS
      });

      dispatch(replaceTest(ROUTE.TEST.BACK_FORWARD_RUN));

      done();
    });
  }
});

export default [saveForm];
