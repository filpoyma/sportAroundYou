import { createSelector } from 'reselect';

import { selectCurrentDate } from '@/containers/DateSelector/selectors';
import { toPrecision } from '@/utils/formatData';
import { withDataHashKey } from '@/utils/hashData';

import CONSTANTS, {RESULT_KEY} from './constants';
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

export const makeSelectLineChartWithBarResultByRange = () =>
  createSelector(
    selectResultsByRange,
    selectCurrentDate,
    (resultsByRange, currentDate) => {

      let data = [];
      let result = resultsByRange.filter(({ id }) => id === currentDate);

      if (result.length === 0) {
        return {};
      }

      [result] = result;
      
      const barData = [];

      const yMax = result[RESULT_KEY.TOUCH_AFTER_150];
      const yMin = 2 * result[RESULT_KEY.TOUCH_BEFORE] - yMax;

      const y2Max = result[RESULT_KEY.DURATION_AFTER_150] * 2;

      data.push({
        x: '',
        y: null
      });

      data.push({
        x: `1 проба`,
        y: toPrecision(result[RESULT_KEY.TOUCH_BEFORE], 1)
      });

      data.push({
        x: `2 проба`,
        y: toPrecision(result[RESULT_KEY.TOUCH_AFTER_30], 1)
      });

      data.push({
        x: `3 проба`,
        y: toPrecision(result[RESULT_KEY.TOUCH_AFTER_150], 1)
      });

      barData.push({
        x: `1 проба`,
        value: toPrecision(result[RESULT_KEY.DURATION_BEFORE], 0)
      });

      barData.push({
        x: `2 проба`,
        value: toPrecision(result[RESULT_KEY.DURATION_AFTER_30], 0)
      });

      barData.push({
        x: `3 проба`,
        value: toPrecision(result[RESULT_KEY.DURATION_AFTER_150], 0)
      });

      data.push({
        x: '_',
        y: null
      });

      return withDataHashKey([
        {
          id: 1,
          yMin,
          yMax,
          y2Max,
          barData,
          data,
          legend2: 'Время, с'
        }
      ]);
    }
  );

export const makeSelectPlatesResultByRange = () =>
  createSelector(
    selectResultsByRange,
    selectCurrentDate,
    (resultsByRange, currentDate) =>
     {
      const data = [];
      let result = resultsByRange.filter(({ id }) => id === currentDate);

      if (result.length === 0) {
        return data;
      }

      [result] = result;

      return [
        {
          id: 0,
          title: 'Среднее время касания, мс',
          value: toPrecision(result[RESULT_KEY.DURATION_AVERAGE], 1)
        },
        {
          id: 1,
          title: 'ЧСС через 30 с, уд./мин',
          value: toPrecision(result[RESULT_KEY.HEART_AFTER_30_END], 1)
        },
        {
          id: 2,
          title: 'ЧСС через 2:30, уд./мин',
          value: toPrecision(result[RESULT_KEY.HEART_AFTER_150_END], 1)
        }
      ]
    }
  );
