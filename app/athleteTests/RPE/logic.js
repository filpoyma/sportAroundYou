import { getAllDataLogic, getDataByDateRangeLogic } from '@/utils/interfaces/logic';

import CONSTANTS from './constants';

export default [getDataByDateRangeLogic(CONSTANTS), getAllDataLogic(CONSTANTS)];