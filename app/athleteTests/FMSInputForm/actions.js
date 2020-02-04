import { FMS_SAVE_FORM } from './constants';

export function saveForm(inputValues) {
  return {
    type: FMS_SAVE_FORM,
    inputValues
  };
}
