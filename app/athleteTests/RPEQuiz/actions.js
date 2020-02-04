import { RPE_QUIZ_SAVE } from './constants';

export function saveForm(inputValues) {
  return {
    type: RPE_QUIZ_SAVE,
    inputValues
  };
}
