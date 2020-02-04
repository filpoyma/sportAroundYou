import { createLogic } from 'redux-logic';

import { API_PATH } from '@/athleteTests/RPE/constants';
import { ROUTE } from '@/pages/Root/constants';
import { replaceTest } from '@/pages/TestPage/actions';
import { makeSelectPersonGender, makeSelectPersonId } from '@/pages/TestPage/selectors';

import { ANXIETY_SAVE, ANXIETY_SAVE_ERROR, ANXIETY_SAVE_SUCCESS } from './constants';

export const saveForm = createLogic({
  type: ANXIETY_SAVE,
  latest: true,
  processOptions: {
    dispatchReturn: true,
    failType: ANXIETY_SAVE_ERROR
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
    const gender = makeSelectPersonGender()(getState());

    const requestURL = `${API_URL}/${API_PATH}/add`;

    return dispatch(replaceTest(ROUTE.TEST.ANXIETY));

    /* return request(requestURL, {
      method: 'POST',
      body: JSON.stringify({
        personId,
        gender,
        ...inputValues
      })
    }).then(() => {
      dispatch({
        type: ANXIETY_SAVE_SUCCESS
      });

      dispatch(replaceTest(ROUTE.TEST.CALIPER_BODY_COMPOSITION));

      done();
    }); */
  }
});

export default [saveForm];
