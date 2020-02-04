import { CALIPEROMETRY_SAVE_FORM } from './constants';

export function saveForm(inputValues) {
  return {
    type: CALIPEROMETRY_SAVE_FORM,
    inputValues
  };
}
