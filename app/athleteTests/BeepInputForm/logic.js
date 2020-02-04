import { createLogic } from 'redux-logic';

import CONSTANTS from '@/athleteTests/Beep/constants';
import { ROUTE } from '@/pages/Root/constants';
import { replaceTest } from '@/pages/TestPage/actions';
import { makeSelectPersonId } from '@/pages/TestPage/selectors';

import { BEEP_SAVE_FORM, BEEP_SAVE_FORM_ERROR, BEEP_SAVE_FORM_SUCCESS } from './constants';

export const saveForm = createLogic({
  type: BEEP_SAVE_FORM,
  latest: true,
  processOptions: {
    dispatchReturn: true,
    failType: BEEP_SAVE_FORM_ERROR
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
        type: BEEP_SAVE_FORM_SUCCESS
      });

      dispatch(replaceTest(ROUTE.TEST.BEEP));

      done();
    });
  }
});

export default [saveForm];
