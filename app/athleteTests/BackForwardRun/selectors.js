import { createSelector } from 'reselect';

import { selectCurrentDate } from '@/containers/DateSelector/selectors';
import { toPrecision } from '@/utils/formatData';

import CONSTANTS from './constants';
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

export const makeSelectResultsByRange = () =>
  createSelector(
    selectResultsByRange,
    selectCurrentDate,
    selectResults,
    (resultsByRange, currentDate, results) => {
      let result = resultsByRange.filter(({ id }) => id === currentDate);

      if (result.length === 0) {
        return {
          value: 0
        };
      }

      [result] = result;

      let avg = 0;
      let max = Number.NEGATIVE_INFINITY;

      results.forEach(({ sum }) => {
        if (sum > max) {
          max = sum;
        }

        avg += sum;
      });

      avg /= results.length;

      return {
        avg: toPrecision(avg, 1),
        max: toPrecision(max, 1),
        value: toPrecision(result?.sum, 1) ?? 0
      };
    }
  );
