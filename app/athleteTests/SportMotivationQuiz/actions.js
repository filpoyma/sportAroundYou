import { SPORT_MOTIVATION_SAVE_INTERPRETATION } from './constants';

export function saveTest(answers) {
  return {
    type: SPORT_MOTIVATION_SAVE_INTERPRETATION,
    answers
  };
}
