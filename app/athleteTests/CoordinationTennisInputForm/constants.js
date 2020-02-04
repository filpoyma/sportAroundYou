import { LABELS, RESULT_KEY } from '@/athleteTests/CoordinationTennis/constants';

export const INPUTS = [
  {
    id: RESULT_KEY.PADDING,
    label: `${LABELS[RESULT_KEY.PADDING]}`
  },
  {
    id: RESULT_KEY.STEP_OVER,
    label: `${LABELS[RESULT_KEY.STEP_OVER]}`
  }
];

export const COORDINATION_TENNIS_SAVE_FORM = `athleteTests/CoordinationTennisInputForm/COORDINATION_TENNIS_SAVE_FORM`;
export const COORDINATION_TENNIS_SAVE_FORM_ERROR = `athleteTests/CoordinationTennisInputForm/COORDINATION_TENNIS_SAVE_FORM_ERROR`;
export const COORDINATION_TENNIS_SAVE_FORM_SUCCESS = `athleteTests/CoordinationTennisInputForm/COORDINATION_TENNIS_SAVE_FORM_SUCCESS`;
