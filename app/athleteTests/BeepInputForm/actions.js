import { BEEP_SAVE_FORM } from './constants';

export function saveForm(inputValues) {
  return {
    type: BEEP_SAVE_FORM,
    inputValues
  };
}
