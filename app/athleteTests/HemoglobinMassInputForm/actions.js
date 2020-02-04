import { HEMOGLOBIN_MASS_SAVE_FORM } from './constants';

export function saveForm(inputValues) {
  return {
    type: HEMOGLOBIN_MASS_SAVE_FORM,
    inputValues
  };
}
