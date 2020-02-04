import { LABELS, RESULT_KEY } from '@/athleteTests/MAMSkiEgrometer/constants';

export const INPUTS = [
  {
    id: RESULT_KEY.MAXPOWER,
    label: LABELS[RESULT_KEY.MAXPOWER]
  },
  {
    id: RESULT_KEY.WEIGHT,
    label: LABELS[RESULT_KEY.WEIGHT]
  },
  {
    id: RESULT_KEY.MAXCAP,
    label: LABELS[RESULT_KEY.MAXCAP]
  }
];

export const DESCRIPTION = 'Описание';

export const QUESTIONS = [
  /* {
    id: 0,
    title:
      'Я беспокоюсь из-за этих соревнований'
  }, */
];

export const MAM_SKI_EGROMETER_SAVE = `athleteTests/MAMSkiEgrometerInputForm/MAM_SKI_EGROMETER_SAVE`;
export const MAM_SKI_EGROMETER_SAVE_ERROR = `athleteTests/MAMSkiEgrometerInputForm/MAM_SKI_EGROMETER_SAVE_ERROR`;
export const MAM_SKI_EGROMETER_SAVE_SUCCESS = `athleteTests/MAMSkiEgrometerInputForm/MAM_SKI_EGROMETER_SAVE_SUCCESS`;
