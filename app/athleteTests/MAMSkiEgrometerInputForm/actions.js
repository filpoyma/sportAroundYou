import { MAM_SKI_EGROMETER_SAVE } from './constants';

export function saveForm(inputValues) {
  return {
    type: MAM_SKI_EGROMETER_SAVE,
    inputValues
  };
}
