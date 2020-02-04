import { createLogic } from 'redux-logic';

import { API_PATH } from '@/athleteTests/Caliperometry/constants';
import { ROUTE } from '@/pages/Root/constants';
import { replaceTest } from '@/pages/TestPage/actions';
import { makeSelectPersonGender, makeSelectPersonId } from '@/pages/TestPage/selectors';

import {
  CALIPEROMETRY_SAVE_FORM,
  CALIPEROMETRY_SAVE_FORM_ERROR,
  CALIPEROMETRY_SAVE_FORM_SUCCESS
} from './constants';

export const saveForm = createLogic({
  type: CALIPEROMETRY_SAVE_FORM,
  latest: true,
  processOptions: {
    dispatchReturn: true,
    failType: CALIPEROMETRY_SAVE_FORM_ERROR
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
    return request(requestURL, {
      method: 'POST',
      body: JSON.stringify({
        personId,
        gender,
        ...inputValues
      })
    }).then(() => {
      dispatch({
        type: CALIPEROMETRY_SAVE_FORM_SUCCESS
      });

      dispatch(replaceTest(ROUTE.TEST.CALIPEROMETRY));

      done();
    });
  }
});

export default [saveForm];
