import { STRESS_AND_RECOVERY_SAVE_INTERPRETATION } from './constants';

export function saveTest(answers) {
  return {
    type: STRESS_AND_RECOVERY_SAVE_INTERPRETATION,
    answers
  };
}
