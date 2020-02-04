import { defaultProduce, INITIAL_STATE } from '@/utils/interfaces/reducer';

import CONSTANTS from './constants';

export const initialState = INITIAL_STATE(CONSTANTS);

const isoMedShoulderTestReducer = defaultProduce(CONSTANTS, initialState);

export default isoMedShoulderTestReducer;
