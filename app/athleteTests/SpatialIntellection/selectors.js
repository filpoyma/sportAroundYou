import { createSelector } from 'reselect';

import { selectCurrentDate } from '@/containers/DateSelector/selectors';
import { toPrecision } from '@/utils/formatData';
import { withDataHashKey } from '@/utils/hashData';
import { COLORS } from '@/utils/styleConstants';

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
    (resultsByRange, currentDate) => {
      let result = resultsByRange.filter(({ id }) => id === currentDate);

      if (result.length === 0) {
        return withDataHashKey({
          data: [],
          total: 0
        });
      }

      [result] = result;
      const sum = result?.sum || [];
      const data = [];
      let total = 0;

      sum.forEach((value, index) => {
        total += value;
        data.push({
          id: `Цикл ${index + 1},`,
          label: `Цикл ${index + 1},`,
          value: toPrecision(value, 1),
          color: colorChart(index, sum.length)
        });
      });

      return withDataHashKey({
        data,
        total: toPrecision(total, 1)
      });
    }
  );

const colorChart = (index, arrayLength) => {
  const color = [
    COLORS.CHARTS.PIE_CHART.BLUE,
    COLORS.CHARTS.PIE_CHART.DARK_GRAY,
    COLORS.CHARTS.PIE_CHART.LIGHT_BLUE,
    COLORS.CHARTS.PIE_CHART.GREY
  ];

  if (index < 3) return color[index];
  if (index === arrayLength - 1) return color[3];
  return color[0];
};
