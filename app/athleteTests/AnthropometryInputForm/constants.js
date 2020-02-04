import { LABELS, RESULT_KEY } from '@/athleteTests/Anthropometry/constants';

export const INPUTS = [
  {
    id: RESULT_KEY.SHOULDER_DIAMETER,
    label: `${LABELS[RESULT_KEY.SHOULDER_DIAMETER]}, см`
  },
  {
    id: RESULT_KEY.FOREARM_DIAMETER,
    label: `${LABELS[RESULT_KEY.FOREARM_DIAMETER]}, см`
  },
  {
    id: RESULT_KEY.HIP_DIAMETER,
    label: `${LABELS[RESULT_KEY.HIP_DIAMETER]}, см`
  },
  {
    id: RESULT_KEY.SHIN_DIAMETER,
    label: `${LABELS[RESULT_KEY.SHIN_DIAMETER]}, см`
  },
  {
    id: RESULT_KEY.LEG_LENGTH,
    label: `${LABELS[RESULT_KEY.LEG_LENGTH]}, см`
  },
  {
    id: RESULT_KEY.SHIN_LENGTH,
    label: `${LABELS[RESULT_KEY.SHIN_LENGTH]}, см`
  },
  {
    id: RESULT_KEY.HEIGHT,
    label: `${LABELS[RESULT_KEY.HEIGHT]}, см`
  }
];

export const ANTHROPOMETRY_SAVE_FORM = `athleteTests/ANTHROPOMETRYInputForm/ANTHROPOMETRY_SAVE_FORM`;
export const ANTHROPOMETRY_SAVE_FORM_ERROR = `athleteTests/ANTHROPOMETRYInputForm/ANTHROPOMETRY_SAVE_FORM_ERROR`;
export const ANTHROPOMETRY_SAVE_FORM_SUCCESS = `athleteTests/ANTHROPOMETRYInputForm/ANTHROPOMETRY_SAVE_FORM_SUCCESS`;
