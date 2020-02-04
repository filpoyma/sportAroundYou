import { ANXIETY_SAVE } from './constants';

export function saveForm(inputValues) {
  return {
    type: ANXIETY_SAVE,
    inputValues
  };
}
