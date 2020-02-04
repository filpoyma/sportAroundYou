import { FLEXIBILITY_SHOULDERS_SAVE_FORM } from './constants';

export function saveForm(inputValues) {
  return {
    type: FLEXIBILITY_SHOULDERS_SAVE_FORM,
    inputValues
  };
}
