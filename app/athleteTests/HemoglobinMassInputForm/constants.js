import { LABELS, RESULT_KEY } from '@/athleteTests/HemoglobinMass/constants';
import { INPUT_TYPE } from '@/containers/Form';

export const HEMOGLOBIN_MASS_SAVE_FORM = `athleteTests/HemoglobinMassInputForm/HEMOGLOBIN_MASS_SAVE_FORM`;
export const HEMOGLOBIN_MASS_SAVE_FORM_ERROR = `athleteTests/HemoglobinMassInputForm/HEMOGLOBIN_MASS_SAVE_FORM_ERROR`;
export const HEMOGLOBIN_MASS_SAVE_FORM_SUCCESS = `athleteTests/HemoglobinMassInputForm/HEMOGLOBIN_MASS_SAVE_FORM_SUCCESS`;

export const INPUTS = [
  {
    id: RESULT_KEY.HEMOGLOBIN_TOTAL_MASS,
    label: `${LABELS[RESULT_KEY.HEMOGLOBIN_TOTAL_MASS]}, г`,
    type: INPUT_TYPE.FLOAT
  },
  {
    id: RESULT_KEY.RELATIVE_TOTAL_MASS,
    label: `${LABELS[RESULT_KEY.RELATIVE_TOTAL_MASS]}, г/кг`,
    type: INPUT_TYPE.FLOAT
  },
  {
    id: RESULT_KEY.TOTAL_CIRCULATING_BLOOD_VOLUME,
    label: `${LABELS[RESULT_KEY.TOTAL_CIRCULATING_BLOOD_VOLUME]}, мл`,
    type: INPUT_TYPE.FLOAT
  },
  {
    id: RESULT_KEY.RELATIVE_CIRCULATING_BLOOD_VOLUME,
    label: `${LABELS[RESULT_KEY.RELATIVE_CIRCULATING_BLOOD_VOLUME]}, мл/кг`,
    type: INPUT_TYPE.FLOAT
  },
  {
    id: RESULT_KEY.HEMOGLOBIN,
    label: `${LABELS[RESULT_KEY.HEMOGLOBIN]}, г/л`,
    type: INPUT_TYPE.FLOAT
  }
];
