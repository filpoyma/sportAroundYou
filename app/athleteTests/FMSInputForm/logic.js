import { createLogic } from 'redux-logic';

import CONSTANTS from '@/athleteTests/Anthropometry/constants';
import { ROUTE } from '@/pages/Root/constants';
import { replaceTest } from '@/pages/TestPage/actions';

// import { makeSelectPersonId } from '@/pages/TestPage/selectors';
import {
  FMS_SAVE_FORM,
  FMS_SAVE_FORM_ERROR
  // VISUAL_ATTENTION_SAVE_FORM_SUCCESS
} from './constants';

export const saveForm = createLogic({
  type: FMS_SAVE_FORM,
  latest: true,
  processOptions: {
    dispatchReturn: true,
    failType: FMS_SAVE_FORM_ERROR
  },
  process(
    {
      action: { inputValues }
      // getState,
      // request
    },
    dispatch,
    done
  ) {
    // const personId = makeSelectPersonId()(getState());

    const requestURL = `${API_URL}/${CONSTANTS.API_PATH}/add`;

    console.log('requestURL, inputValues', requestURL, inputValues);

    // return request(requestURL, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     personId,
    //     ...inputValues
    //   })
    // }).then(() => {
    //   dispatch({
    //     type: VISUAL_ATTENTION_SAVE_FORM_SUCCESS
    //   });

    dispatch(replaceTest(ROUTE.TEST.FMS));

    done();
    // });
  }
});

export default [saveForm];
