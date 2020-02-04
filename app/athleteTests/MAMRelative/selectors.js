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

const CHART_COLORS = [
  COLORS.CHARTS.PARALLEL_COORDINATES.LIGHT_BLUE,
  COLORS.CHARTS.PARALLEL_COORDINATES.GREY
];

const LOAD_TO_PERCENT = ['7.5%', '9%'];

export const makeSelectStatus = key =>
  createSelector(
    selectStatus,
    status => status[key]
  );

const makeSelectCurrentResults = () =>
  createSelector(
    selectResultsByRange,
    selectCurrentDate,
    (resultsByRange, currentDate) => {
      const result = resultsByRange.filter(({ id }) => id === currentDate);

      if (result.length === 0) {
        return null;
      }

      return result[0];
    }
  );

export const makeSelectResultsByRange = () =>
  createSelector(
    makeSelectCurrentResults(),
    result => {
      if (!result) {
        return withDataHashKey({});
      }

      const data = {
        data: [],
        variables: [
          {
            key: RESULT_KEY.PEAK_POWER,
            type: 'linear',
            legend: LABELS[RESULT_KEY.PEAK_POWER],
            legendPosition: 'start',
            legendOffset: 10
          },
          {
            key: RESULT_KEY.TIME,
            type: 'linear',
            legend: LABELS[RESULT_KEY.TIME],
            legendPosition: 'start',
            legendOffset: 10
          },
          {
            key: RESULT_KEY.AP,
            type: 'linear',
            legend: LABELS[RESULT_KEY.AP],
            legendPosition: 'start',
            legendOffset: 10
          },
          {
            key: RESULT_KEY.RPM,
            type: 'linear',
            legend: LABELS[RESULT_KEY.RPM],
            legendPosition: 'start',
            legendOffset: 10
          }
        ]
      };

      result?.[RESULT_KEY.LOAD].forEach((value, index) => {
        data.data.push({
          [RESULT_KEY.AP]: toPrecision(result?.[RESULT_KEY.AP]?.[index] ?? 0, 0),
          [RESULT_KEY.APR]: toPrecision(result?.[RESULT_KEY.APR]?.[index] ?? 0, 0),
          [RESULT_KEY.TIME]: toPrecision(result?.[RESULT_KEY.TIME]?.[index] ?? 0, 0),
          [RESULT_KEY.PEAK_POWER]: toPrecision(result?.[RESULT_KEY.PEAK_POWER]?.[index] ?? 0, 0),
          [RESULT_KEY.RELATIVE_POWER]: toPrecision(
            result?.[RESULT_KEY.RELATIVE_POWER]?.[index] ?? 0,
            0
          ),
          [RESULT_KEY.RPM]: toPrecision(result?.[RESULT_KEY.RPM]?.[index] ?? 0, 0),
          [RESULT_KEY.LOAD]: toPrecision(value, 0),
          color: CHART_COLORS[index] || COLORS.CHARTS.PARALLEL_COORDINATES.BLUE
        });
      });

      return withDataHashKey(data);
    }
  );

export const makeSelectLegend = () =>
  createSelector(
    makeSelectCurrentResults(),
    result => {
      if (!result) {
        return [];
      }

      const data = [];

      result?.[RESULT_KEY.LOAD].forEach((value, index) => {
        data.push({
          id: value,
          color: CHART_COLORS[index] || COLORS.CHARTS.PARALLEL_COORDINATES.BLUE,
          label: `нагрузка ${LOAD_TO_PERCENT[index]} от веса тела`
        });
      });

      return data;
    }
  );
