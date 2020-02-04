import { EXPLOSIVE_THROW_SAVE_FORM } from './constants';

export function saveForm(inputValues) {
  return {
    type: EXPLOSIVE_THROW_SAVE_FORM,
    inputValues
  };
}
