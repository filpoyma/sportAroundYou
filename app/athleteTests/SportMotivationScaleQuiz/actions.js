import { SPORT_MOTIVATION_SCALE_SAVE_INTERPRETATION } from './constants';

export function saveTest(answers) {
  return {
    type: SPORT_MOTIVATION_SCALE_SAVE_INTERPRETATION,
    answers
  };
}
