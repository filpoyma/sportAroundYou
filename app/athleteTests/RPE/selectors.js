import { createSelector } from 'reselect';

import { selectCurrentDate } from '@/containers/DateSelector/selectors';
import { toPrecision } from '@/utils/formatData';
import { withDataHashKey } from '@/utils/hashData';

import CONSTANTS, { LABELS, RESULT_KEY } from './constants';
import { initialState } from './reducer';

export const selectResults = state =>
  state[CONSTANTS.REDUCER_KEY.KEY]?.[CONSTANTS.REDUCER_KEY.RESULTS] ||
  initialState[CONSTANTS.REDUCER_KEY.RESULTS];
const selectResultsByRange = state =>
  state[CONSTANTS.REDUCER_KEY.KEY]?.[CONSTANTS.REDUCER_KEY.RESULTS_BY_RANGE] ||
  initialState[CONSTANTS.REDUCER_KEY.RESULTS_BY_RANGE];
const selectStatus = state =>
  state[CONSTANTS.REDUCER_KEY.KEY]?.[CONSTANTS.REDUCER_KEY.STATUS] ||
  initialState[CONSTANTS.REDUCER_KEY.STATUS];

export const makeSelectStatus = key =>
  createSelector(
    selectStatus,
    status => status[key]
  );

export const makeSelectPlatesResultByRange = () =>
  createSelector(
    selectResultsByRange,
    selectCurrentDate,
    (resultsByRange, currentDate) => {
      let result = resultsByRange.filter(({ id }) => id === currentDate.toString());

      if (result.length === 0) {
        return [];
      }

      [result] = result;

      return [
        {
          id: 0,
          title: LABELS[RESULT_KEY.SRPE],
          value: result[RESULT_KEY.SRPE]
        }
      ];
    }
  );
