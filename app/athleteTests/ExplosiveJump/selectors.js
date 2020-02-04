import { createSelector } from 'reselect';

import { selectCurrentDate } from '@/containers/DateSelector/selectors';
import { toPrecision } from '@/utils/formatData';
import { withDataHashKey } from '@/utils/hashData';

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

export const makeSelectResultsByRange = key =>
  createSelector(
    selectResultsByRange,
    selectCurrentDate,
    (resultsByRange, currentDate) => {
      let result = resultsByRange.filter(({ id }) => id === currentDate);

      if (result.length === 0) {
        return withDataHashKey({});
      }

      [result] = result;

      const data = {
        avg: key === RESULT_KEY.JUMP_LENGTH ? 200 : 100,
        max: key === RESULT_KEY.JUMP_LENGTH ? 230 : 120,
        value: toPrecision(result?.[key], 0)
      };

      return withDataHashKey(data);
    }
  );
