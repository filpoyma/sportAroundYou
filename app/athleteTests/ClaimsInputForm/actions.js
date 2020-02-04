import { CLAIMS_SAVE } from './constants';

export function saveForm(inputValues) {
  return {
    type: CLAIMS_SAVE,
    inputValues
  };
}
