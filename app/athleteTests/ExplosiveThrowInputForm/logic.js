import { createLogic } from 'redux-logic';

import { API_PATH, API_TYPE } from '@/athleteTests/ExplosiveThrow/constants';
import { ROUTE } from '@/pages/Root/constants';
import { replaceTest } from '@/pages/TestPage/actions';
import { makeSelectPersonId } from '@/pages/TestPage/selectors';

import {
  EXPLOSIVE_THROW_SAVE_FORM,
  EXPLOSIVE_THROW_SAVE_FORM_ERROR,
  EXPLOSIVE_THROW_SAVE_FORM_SUCCESS
} from './constants';
export const saveForm = createLogic({
  type: EXPLOSIVE_THROW_SAVE_FORM,
  latest: true,
  processOptions: {
    dispatchReturn: true,
    failType: EXPLOSIVE_THROW_SAVE_FORM_ERROR
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

    const requestURL = `${API_URL}/${API_PATH}/add`;
    return request(requestURL, {
      method: 'POST',
      body: JSON.stringify({
        personId,
        ...inputValues,
        type: API_TYPE
      })
    }).then(() => {
      dispatch({
        type: EXPLOSIVE_THROW_SAVE_FORM_SUCCESS
      });

      dispatch(replaceTest(ROUTE.TEST.EXPLOSIVE_THROW));

      done();
    });
  }
});

export default [saveForm];
