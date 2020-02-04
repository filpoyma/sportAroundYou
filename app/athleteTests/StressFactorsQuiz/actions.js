import { STRESS_FACTORS_SAVE_INTERPRETATION } from './constants';

export function saveTest(answers) {
  return {
    type: STRESS_FACTORS_SAVE_INTERPRETATION,
    answers
  };
}
