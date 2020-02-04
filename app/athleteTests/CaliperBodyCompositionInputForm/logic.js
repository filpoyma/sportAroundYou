import { createLogic } from 'redux-logic';

import { API_PATH } from '@/athleteTests/CaliperBodyComposition/constants';
import { ROUTE } from '@/pages/Root/constants';
import { replaceTest } from '@/pages/TestPage/actions';
import { makeSelectPersonGender, makeSelectPersonId } from '@/pages/TestPage/selectors';

import {
  CALIPER_BODY_COMPOSITION_SAVE_FORM,
  CALIPER_BODY_COMPOSITION_SAVE_FORM_ERROR,
  CALIPER_BODY_COMPOSITION_SAVE_FORM_SUCCESS
} from './constants';

export const saveForm = createLogic({
  type: CALIPER_BODY_COMPOSITION_SAVE_FORM,
  latest: true,
  processOptions: {
    dispatchReturn: true,
    failType: CALIPER_BODY_COMPOSITION_SAVE_FORM_ERROR
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

    dispatch(replaceTest(ROUTE.TEST.CALIPER_BODY_COMPOSITION));

    return request(requestURL, {
      method: 'POST',
      body: JSON.stringify({
        personId,
        gender,
        ...inputValues
      })
    }).then(() => {
      dispatch({
        type: CALIPER_BODY_COMPOSITION_SAVE_FORM_SUCCESS
      });

      dispatch(replaceTest(ROUTE.TEST.CALIPER_BODY_COMPOSITION));

      done();
    });
  }
});

export default [saveForm];
