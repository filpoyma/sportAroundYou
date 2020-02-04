import { BACK_FORWARD_RUN_SAVE_FORM } from './constants';

export function saveForm(inputValues) {
  return {
    type: BACK_FORWARD_RUN_SAVE_FORM,
    inputValues
  };
}
