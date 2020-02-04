import { createLogic } from 'redux-logic';

import CONSTANTS from '@/athleteTests/AccelerationSideStance/constants';
import { ROUTE } from '@/pages/Root/constants';
import { replaceTest } from '@/pages/TestPage/actions';
import { makeSelectPersonId } from '@/pages/TestPage/selectors';

import {
  ACCELERATION_SIDE_STANCE_SAVE_FORM,
  ACCELERATION_SIDE_STANCE_SAVE_FORM_ERROR,
  ACCELERATION_SIDE_STANCE_SAVE_FORM_SUCCESS
} from './constants';

export const saveForm = createLogic({
  type: ACCELERATION_SIDE_STANCE_SAVE_FORM,
  latest: true,
  processOptions: {
    dispatchReturn: true,
    failType: ACCELERATION_SIDE_STANCE_SAVE_FORM_ERROR
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
        type: ACCELERATION_SIDE_STANCE_SAVE_FORM_SUCCESS
      });

      dispatch(replaceTest(ROUTE.TEST.ACCELERATION_SIDE_STANCE));

      done();
    });
  }
});

export default [saveForm];
