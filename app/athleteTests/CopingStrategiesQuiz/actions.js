import { COPING_STRATEGIES_SAVE_INTERPRETATION } from './constants';

export function saveTest(answers) {
  return {
    type: COPING_STRATEGIES_SAVE_INTERPRETATION,
    answers
  };
}
