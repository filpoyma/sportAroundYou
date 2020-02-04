import { COMPETITEVE_ANXIETY_SAVE } from './constants';

export function saveForm(answers) {
  return {
    type: COMPETITEVE_ANXIETY_SAVE,
    answers
  };
}
