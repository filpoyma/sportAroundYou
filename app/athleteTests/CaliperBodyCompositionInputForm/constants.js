import {
  LABELS_INPUT as LABELS,
  RESULT_KEY
} from '@/athleteTests/CaliperBodyComposition/constants';

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
    id: RESULT_KEY.SHOULDER_TENSIONED_R,
    label: `${LABELS[RESULT_KEY.SHOULDER_TENSIONED_R]} правое обхват, см`
  },
  {
    id: RESULT_KEY.SHOULDER_TENSIONED_L,
    label: `${LABELS[RESULT_KEY.SHOULDER_TENSIONED_L]} левое обхват, см`
  },
  {
    id: RESULT_KEY.SHOULDER_RELAXED_R,
    label: `${LABELS[RESULT_KEY.SHOULDER_RELAXED_R]} правое обхват, см`
  },
  {
    id: RESULT_KEY.SHOULDER_RELAXED_L,
    label: `${LABELS[RESULT_KEY.SHOULDER_RELAXED_L]} левое обхват, см`
  },
  {
    id: RESULT_KEY.FOREARM_R,
    label: `${LABELS[RESULT_KEY.FOREARM_R]} правое обхват, см`
  },
  {
    id: RESULT_KEY.FOREARM_L,
    label: `${LABELS[RESULT_KEY.FOREARM_L]} левое обхват, см`
  },
  {
    id: RESULT_KEY.WAIST,
    label: `${LABELS[RESULT_KEY.WAIST]} обхват, см`
  },
  {
    id: RESULT_KEY.HIPS,
    label: `${LABELS[RESULT_KEY.HIPS]} обхват, см`
  },
  {
    id: RESULT_KEY.HIP_UP_RIGHT,
    label: `${LABELS[RESULT_KEY.HIP_UP_RIGHT]} правое обхват, см`
  },
  {
    id: RESULT_KEY.HIP_UP_LEFT,
    label: `${LABELS[RESULT_KEY.HIP_UP_LEFT]} левое обхват, см`
  },
  {
    id: RESULT_KEY.HIP_MID_RIGHT,
    label: `${LABELS[RESULT_KEY.HIP_MID_RIGHT]} правое обхват, см`
  },
  {
    id: RESULT_KEY.HIP_MID_LEFT,
    label: `${LABELS[RESULT_KEY.HIP_MID_LEFT]} левое обхват, см`
  },
  {
    id: RESULT_KEY.SHIN_LEFT,
    label: `${LABELS[RESULT_KEY.SHIN_LEFT]} левая обхват, см`
  },
  {
    id: RESULT_KEY.SHIN_RIGHT,
    label: `${LABELS[RESULT_KEY.SHIN_RIGHT]} правая обхват, см`
  },
  {
    id: RESULT_KEY.HEIGHT,
    label: `${LABELS[RESULT_KEY.HEIGHT]}, см`
  },
  {
    id: RESULT_KEY.WEIGHT,
    label: `${LABELS[RESULT_KEY.WEIGHT]}, кг`
  }
];

export const CALIPER_BODY_COMPOSITION_SAVE_FORM = `athleteTests/CaliperBodyCompositionInputForm/CALIPER_BODY_COMPOSITION_SAVE_FORM`;
export const CALIPER_BODY_COMPOSITION_SAVE_FORM_ERROR = `athleteTests/CaliperBodyCompositionInputForm/CALIPER_BODY_COMPOSITION_SAVE_FORM_ERROR`;
export const CALIPER_BODY_COMPOSITION_SAVE_FORM_SUCCESS = `athleteTests/CaliperBodyCompositionInputForm/CALIPER_BODY_COMPOSITION_SAVE_FORM_SUCCESS`;
