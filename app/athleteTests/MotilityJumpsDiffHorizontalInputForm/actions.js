import { MOTILITY_JUMPS_DIFF_HORIZONTAL_SAVE } from './constants';

export function saveTest(data) {
  return {
    type: MOTILITY_JUMPS_DIFF_HORIZONTAL_SAVE,
    data
  };
}
