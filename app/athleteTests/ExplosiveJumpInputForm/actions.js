import { EXPLOSIVE_JUMP_SAVE_FORM } from './constants';

export function saveForm(inputValues) {
  return {
    type: EXPLOSIVE_JUMP_SAVE_FORM,
    inputValues
  };
}
