import { ANTHROPOMETRY_SAVE_FORM } from './constants';

export function saveForm(inputValues) {
  return {
    type: ANTHROPOMETRY_SAVE_FORM,
    inputValues
  };
}
