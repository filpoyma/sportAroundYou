import { LABELS, RESULT_KEY } from '@/athleteTests/Caliperometry/constants';

export const INPUTS = [
  {
    id: RESULT_KEY.UNDER_SHOULDER_BLADE,
    label: LABELS[RESULT_KEY.UNDER_SHOULDER_BLADE]
  },
  {
    id: RESULT_KEY.TRICEPS,
    label: LABELS[RESULT_KEY.TRICEPS]
  },
  {
    id: RESULT_KEY.BICEPS,
    label: LABELS[RESULT_KEY.BICEPS]
  },
  {
    id: RESULT_KEY.FOREARM,
    label: LABELS[RESULT_KEY.FOREARM]
  },
  {
    id: RESULT_KEY.WRIST,
    label: LABELS[RESULT_KEY.WRIST]
  },
  {
    id: RESULT_KEY.CHEST,
    label: LABELS[RESULT_KEY.CHEST]
  },
  {
    id: RESULT_KEY.BELLY,
    label: LABELS[RESULT_KEY.BELLY]
  },
  {
    id: RESULT_KEY.ILIAC,
    label: LABELS[RESULT_KEY.ILIAC]
  },
  {
    id: RESULT_KEY.HIP_UP,
    label: LABELS[RESULT_KEY.HIP_UP]
  },
  {
    id: RESULT_KEY.HIP_MID,
    label: LABELS[RESULT_KEY.HIP_MID]
  },
  {
    id: RESULT_KEY.SHIN,
    label: LABELS[RESULT_KEY.SHIN]
  },
  {
    id: 'height',
    label: 'Рост, см'
  },
  {
    id: 'weight',
    label: 'Вес, кг'
  }
];

export const CALIPEROMETRY_SAVE_FORM = `athleteTests/CalipereomtryInputForm/CALIPEROMETRY_SAVE_FORM`;
export const CALIPEROMETRY_SAVE_FORM_ERROR = `athleteTests/CaliperometryInputForm/CALIPEROMETRY_SAVE_FORM_ERROR`;
export const CALIPEROMETRY_SAVE_FORM_SUCCESS = `athleteTests/CaliperometryInputForm/CALIPEROMETRY_SAVE_FORM_SUCCESS`;
