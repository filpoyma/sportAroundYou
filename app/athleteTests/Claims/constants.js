import CONSTANTS from '@/utils/interfaces/constants';

const REDUCER_KEY = 'Claims';
const API_PATH = 'claims';
const API_TYPE = 1;

export const RESULT_KEY = {
  CLAIM_1: 'claim1',
  ACHIVIEMENT_1: 'achievement1',
  CLAIM_2: 'claim2',
  ACHIVIEMENT_2: 'achievement2',
  CLAIM_3: 'claim3',
  ACHIVIEMENT_3: 'achievement3',
  CLAIM_4: 'claim4',
  ACHIVIEMENT_4: 'achievement4'
};

export const LABELS = {
  [RESULT_KEY.CLAIM_1]: 'Притязания, серия 1',
  [RESULT_KEY.ACHIVIEMENT_1]: 'Достижения, серия 1',
  [RESULT_KEY.CLAIM_2]: 'Притязания, серия 2',
  [RESULT_KEY.ACHIVIEMENT_2]: 'Достижения, серия 2',
  [RESULT_KEY.CLAIM_3]: 'Притязания, серия 3',
  [RESULT_KEY.ACHIVIEMENT_3]: 'Достижения, серия 3',
  [RESULT_KEY.CLAIM_4]: 'Притязания, серия 4',
  [RESULT_KEY.ACHIVIEMENT_4]: 'Достижения, серия 4'
};

export default CONSTANTS(REDUCER_KEY, API_PATH, API_TYPE);
