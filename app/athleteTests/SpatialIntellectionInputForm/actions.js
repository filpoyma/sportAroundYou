import { VISUAL_ATTENTION_SAVE_FORM } from './constants';

export function saveForm(inputValues) {
  return {
    type: VISUAL_ATTENTION_SAVE_FORM,
    inputValues
  };
}
