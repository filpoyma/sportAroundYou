import { SAVE_INTERPRETATION } from './constants';

export function saveInterpretation(interpretatiton) {
  return {
    type: SAVE_INTERPRETATION,
    interpretatiton
  };
}
