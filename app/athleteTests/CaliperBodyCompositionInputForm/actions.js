import { CALIPER_BODY_COMPOSITION_SAVE_FORM } from './constants';

export function saveForm(inputValues) {
  return {
    type: CALIPER_BODY_COMPOSITION_SAVE_FORM,
    inputValues
  };
}
