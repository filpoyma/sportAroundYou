import { createSelector } from 'reselect';

import { selectCurrentDate } from '@/containers/DateSelector/selectors';
import { toPrecision } from '@/utils/formatData';
import { withDataHashKey } from '@/utils/hashData';

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

export const makeSelectResultByRange = () =>
  createSelector(
    selectResultsByRange,
    selectCurrentDate,
    (resultsByRange, currentDate) => {
      const data = [];

      return withDataHashKey(data);
    }
  );

export const makeSelectHistogramResultByRange = () =>
  createSelector(
    selectResultsByRange,
    selectCurrentDate,
    (resultsByRange, currentDate) => {
      const data = [];

      data.push(
        {
          id: '1',
          value: 4,
          value2: 6
        },
        {
          id: '2',
          value: 10,
          value2: 8
        },
        {
          id: '3',
          value: 4,
          value2: 7
        },
        {
          id: '4',
          value: 2,
          value2: 8
        }
      );

      return withDataHashKey(data);
    }
  );
