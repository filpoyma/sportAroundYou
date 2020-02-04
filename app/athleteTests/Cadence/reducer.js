import { defaultProduce, INITIAL_STATE } from '@/utils/interfaces/reducer';

import CONSTANTS from './constants';

export const initialState = INITIAL_STATE(CONSTANTS);

const cadenceTestReducer = defaultProduce(CONSTANTS, initialState);

export default cadenceTestReducer;
