import { ACCELERATION_SIDE_STANCE_SAVE_FORM } from './constants';

export function saveForm(inputValues) {
  return {
    type: ACCELERATION_SIDE_STANCE_SAVE_FORM,
    inputValues
  };
}
