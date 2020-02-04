import { FLEXIBILITY_BACK_SAVE_FORM } from './constants';

export function saveForm(inputValues) {
  return {
    type: FLEXIBILITY_BACK_SAVE_FORM,
    inputValues
  };
}
