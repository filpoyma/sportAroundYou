import { createSelector } from 'reselect';

import { selectCurrentDate } from '@/containers/DateSelector/selectors';
import { toPrecision } from '@/utils/formatData';

import { RESULT_KEY, STATE_KEY } from './constants';
import { initialState } from './reducer';

export const selectResults = state =>
  state[STATE_KEY.MAIN]?.[STATE_KEY.RESULTS] || initialState[STATE_KEY.RESULTS];
const selectResultsByRange = state =>
  state[STATE_KEY.MAIN]?.[STATE_KEY.RESULTS_BY_RANGE] || initialState[STATE_KEY.RESULTS_BY_RANGE];
const selectStatus = state => state[STATE_KEY.MAIN]?.status || initialState.status;

export const makeSelectStatus = key =>
  createSelector(
    selectStatus,
    status => status[key]
  );

export const makeSelectResultsByRange = () =>
  createSelector(
    selectResultsByRange,
    selectCurrentDate,
    (resultsByRange, currentDate) => {
      let result = resultsByRange.filter(({ id }) => id === currentDate);

      if (result.length === 0) {
        return {};
      }

      [result] = result;

      return {
        [RESULT_KEY.LEFT_SHOULDER]: toPrecision(result?.[RESULT_KEY.LEFT_SHOULDER], 0),
        [RESULT_KEY.RIGHT_SHOULDER]: toPrecision(result?.[RESULT_KEY.RIGHT_SHOULDER], 0),
        [RESULT_KEY.WRING]: toPrecision(result?.[RESULT_KEY.WRING], 0)
      };
    }
  );
