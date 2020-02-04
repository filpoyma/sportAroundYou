import { createSelector } from 'reselect';

import { selectCurrentDate } from '@/containers/DateSelector/selectors';
import { toPrecision } from '@/utils/formatData';
import { withDataHashKey } from '@/utils/hashData';

import CONSTANTS, { RESULT_KEY } from './constants';
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

export const makeSelectLineChartWithBarResultByRange = () =>
  createSelector(
    selectResultsByRange,
    selectCurrentDate,
    (resultsByRange, currentDate) => {
      const data = [];
      const barData = [];
      let result = resultsByRange.filter(({ id }) => id === currentDate);

      if (result.length === 0) {
        return withDataHashKey(data);
      }

      [result] = result;

      const maxRPM = Math.max(...result[RESULT_KEY.RPM]);
      const minRPM = Math.min(...result[RESULT_KEY.RPM]);
      const maxTime = Math.max(...result[RESULT_KEY.TIME]);

      const yMax = toPrecision(maxRPM, 0);
      const yMin = toPrecision(2 * minRPM - maxRPM, 0);

      const y2Max = maxTime * 2;

      data.push({
        x: '',
        y: null
      });

      result?.[RESULT_KEY.LOAD].forEach((load, index) => {
        data.push({
          x: `${load} кг`,
          y: toPrecision(result?.[RESULT_KEY.RPM]?.[index] ?? 0, 1)
        });

        barData.push({
          x: `${load} кг`,
          value: toPrecision(result?.[RESULT_KEY.TIME]?.[index] ?? 0, 0)
        });
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
          legend2: `Время разгона, мс`
        }
      ]);
    }
  );

export const makeSelectPlatesResultByRange = () =>
  createSelector(
    selectResultsByRange,
    selectCurrentDate,
    (resultsByRange, currentDate) => {
      const data = [];
      let result = resultsByRange.filter(({ id }) => id === currentDate);

      if (result.length === 0) {
        return data;
      }

      [result] = result;

      const maxRPM = Math.max(...result[RESULT_KEY.RPM]);

      return [
        {
          id: 0,
          title: 'Максимальная частота движения, об/мин',
          value: toPrecision(maxRPM, 1)
        }
      ];
    }
  );
