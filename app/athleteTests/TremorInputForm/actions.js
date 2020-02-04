import { TREMOR_SAVE } from './constants';

export function saveForm(inputValues) {
  return {
    type: TREMOR_SAVE,
    inputValues
  };
}
