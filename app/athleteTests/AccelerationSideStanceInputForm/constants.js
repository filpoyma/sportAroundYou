import { LABELS, RESULT_KEY } from '@/athleteTests/AccelerationSideStance/constants';

export const INPUTS = [
  {
    id: 'title_first',
    title: 'Правая стойка'
  },
  {
    id: RESULT_KEY.BRIDGING_TIME_RIGHT,
    label: LABELS[RESULT_KEY.BRIDGING_TIME_RIGHT]
  },
  {
    id: RESULT_KEY.REACTION_TIME_RIGHT,
    label: LABELS[RESULT_KEY.REACTION_TIME_RIGHT]
  },
  {
    id: RESULT_KEY.ACCELERATION_TIME_RIGHT,
    label: LABELS[RESULT_KEY.ACCELERATION_TIME_RIGHT]
  },
  {
    id: RESULT_KEY.FIRST_STEP_DURATION_RIGHT,
    label: LABELS[RESULT_KEY.FIRST_STEP_DURATION_RIGHT]
  },
  {
    id: RESULT_KEY.ACCELERATION_SPEED_RIGHT,
    label: LABELS[RESULT_KEY.ACCELERATION_SPEED_RIGHT]
  },

  {
    id: 'split',
    split: true
  },
  {
    id: 'title_second',
    title: 'Левая стойка'
  },
  {
    id: RESULT_KEY.BRIDGING_TIME_LEFT,
    label: LABELS[RESULT_KEY.BRIDGING_TIME_LEFT]
  },
  {
    id: RESULT_KEY.REACTION_TIME_LEFT,
    label: LABELS[RESULT_KEY.REACTION_TIME_LEFT]
  },
  {
    id: RESULT_KEY.ACCELERATION_TIME_LEFT,
    label: LABELS[RESULT_KEY.ACCELERATION_TIME_LEFT]
  },
  {
    id: RESULT_KEY.FIRST_STEP_DURATION_LEFT,
    label: LABELS[RESULT_KEY.FIRST_STEP_DURATION_LEFT]
  },
  {
    id: RESULT_KEY.ACCELERATION_SPEED_LEFT,
    label: LABELS[RESULT_KEY.ACCELERATION_SPEED_LEFT]
  }
];

export const ACCELERATION_SIDE_STANCE_SAVE_FORM = `athleteTests/ACCELERATION_SIDE_STANCEInputForm/ACCELERATION_SIDE_STANCE_SAVE_FORM`;
export const ACCELERATION_SIDE_STANCE_SAVE_FORM_ERROR = `athleteTests/ACCELERATION_SIDE_STANCEInputForm/ACCELERATION_SIDE_STANCE_SAVE_FORM_ERROR`;
export const ACCELERATION_SIDE_STANCE_SAVE_FORM_SUCCESS = `athleteTests/ACCELERATION_SIDE_STANCEInputForm/ACCELERATION_SIDE_STANCE_SAVE_FORM_SUCCESS`;
