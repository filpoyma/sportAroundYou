import { LABELS, RESULT_KEY } from '@/athleteTests/Claims/constants';

export const INPUTS = [
  {
    id: RESULT_KEY.CLAIM_1,
    label: LABELS[RESULT_KEY.CLAIM_1]
  },
  {
    id: RESULT_KEY.ACHIVIEMENT_1,
    label: LABELS[RESULT_KEY.ACHIVIEMENT_1]
  },
  {
    id: RESULT_KEY.CLAIM_2,
    label: LABELS[RESULT_KEY.CLAIM_2]
  },
  {
    id: RESULT_KEY.ACHIVIEMENT_2,
    label: LABELS[RESULT_KEY.ACHIVIEMENT_2]
  },
  {
    id: RESULT_KEY.CLAIM_3,
    label: LABELS[RESULT_KEY.CLAIM_3]
  },
  {
    id: RESULT_KEY.ACHIVIEMENT_3,
    label: LABELS[RESULT_KEY.ACHIVIEMENT_3]
  },
  {
    id: RESULT_KEY.CLAIM_4,
    label: LABELS[RESULT_KEY.CLAIM_4]
  },
  {
    id: RESULT_KEY.ACHIVIEMENT_4,
    label: LABELS[RESULT_KEY.ACHIVIEMENT_4]
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

export const CLAIMS_SAVE = `athleteTests/ClaimsInputForm/CLAIMS_SAVE`;
export const CLAIMS_SAVE_ERROR = `athleteTests/ClaimsInputForm/CLAIMS_SAVE_ERROR`;
export const CLAIMS_SAVE_SUCCESS = `athleteTests/ClaimsInputForm/CLAIMS_SAVE_SUCCESS`;
