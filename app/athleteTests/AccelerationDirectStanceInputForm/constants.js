import { LABELS, RESULT_KEY } from '@/athleteTests/AccelerationDirectStance/constants';

export const INPUTS = [
  {
    id: RESULT_KEY.BRIDGING_TIME,
    label: LABELS[RESULT_KEY.BRIDGING_TIME]
  },
  {
    id: RESULT_KEY.REACTION_TIME,
    label: LABELS[RESULT_KEY.REACTION_TIME]
  },
  {
    id: RESULT_KEY.ACCELERATION_TIME,
    label: LABELS[RESULT_KEY.ACCELERATION_TIME]
  },
  {
    id: RESULT_KEY.FIRST_STEP_DURATION,
    label: LABELS[RESULT_KEY.FIRST_STEP_DURATION]
  },
  {
    id: RESULT_KEY.ACCELERATION_SPEED,
    label: LABELS[RESULT_KEY.ACCELERATION_SPEED]
  }
];

export const ACCELERATION_DIRECT_STANCE_SAVE_FORM = `athleteTests/ACCELERATION_DIRECT_STANCEInputForm/ACCELERATION_DIRECT_STANCE_SAVE_FORM`;
export const ACCELERATION_DIRECT_STANCE_SAVE_FORM_ERROR = `athleteTests/ACCELERATION_DIRECT_STANCEInputForm/ACCELERATION_DIRECT_STANCE_SAVE_FORM_ERROR`;
export const ACCELERATION_DIRECT_STANCE_SAVE_FORM_SUCCESS = `athleteTests/ACCELERATION_DIRECT_STANCEInputForm/ACCELERATION_DIRECT_STANCE_SAVE_FORM_SUCCESS`;