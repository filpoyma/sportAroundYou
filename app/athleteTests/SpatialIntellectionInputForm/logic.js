import { createLogic } from 'redux-logic';

import CONSTANTS from '@/athleteTests/Anthropometry/constants';
import { ROUTE } from '@/pages/Root/constants';
import { replaceTest } from '@/pages/TestPage/actions';

// import { makeSelectPersonId } from '@/pages/TestPage/selectors';
import {
  SPATIAL_INTELLECTION_SAVE_FORM,
  SPATIAL_INTELLECTION_SAVE_FORM_ERROR
  // SPATIAL_INTELLECTION_SAVE_FORM_SUCCESS
} from './constants';

export const saveForm = createLogic({
  type: SPATIAL_INTELLECTION_SAVE_FORM,
  latest: true,
  processOptions: {
    dispatchReturn: true,
    failType: SPATIAL_INTELLECTION_SAVE_FORM_ERROR
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

    console.log('requestURL === >', requestURL);
    console.log('inputValues === >', inputValues);

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

    dispatch(replaceTest(ROUTE.TEST.SPATIAL_INTELLECTION));

    done();
    // });
  }
});

export default [saveForm];
