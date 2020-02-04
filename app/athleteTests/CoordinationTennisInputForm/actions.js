import { COORDINATION_TENNIS_SAVE_FORM } from './constants';

export function saveForm(inputValues) {
  return {
    type: COORDINATION_TENNIS_SAVE_FORM,
    inputValues
  };
}
