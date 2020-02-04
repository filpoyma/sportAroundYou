import { createSelector } from 'reselect';

import { selectCurrentDate } from '@/containers/DateSelector/selectors';
import { toPrecision } from '@/utils/formatData';
import { withDataHashKey } from '@/utils/hashData';
import { COLORS } from '@/utils/styleConstants';

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

export const makeSelectHistogramResultByRange = () =>
  createSelector(
    selectResultsByRange,
    selectCurrentDate,
    (resultsByRange, currentDate) => {
      {
        const data = [];
        let result = resultsByRange.filter(({ id }) => id === currentDate);
  
        if (result.length === 0) {
          return data;
        }
  
        [result] = result;

        data.push(
        {
          id: LABELS[RESULT_KEY.KOG],
          color: COLORS.CHARTS.HISTOGRAM.DARK_GRAY,
          value: result[RESULT_KEY.KOG]
        },
        {
          id: LABELS[RESULT_KEY.SOM],
          color: COLORS.CHARTS.HISTOGRAM.LIGHT_BLUE,
          value: result[RESULT_KEY.SOM]
        },
        {
          id: LABELS[RESULT_KEY.SURANCE],
          color: COLORS.CHARTS.HISTOGRAM.DARK_GRAY,
          value: result[RESULT_KEY.SURANCE]
        }
        );

        return withDataHashKey(data);
      }
    }
  );

  export const makeSelectAnswersResultByRange = () =>
  createSelector(
    selectResultsByRange,
    selectCurrentDate,
    (resultsByRange, currentDate) => {
      {
        const data = [];
        let result = resultsByRange.filter(({ id }) => id === currentDate);
  
        if (result.length === 0) {
          return data;
        }
  
        [result] = result;

        return result[RESULT_KEY.RAW] || [];
    }
  }
  );
