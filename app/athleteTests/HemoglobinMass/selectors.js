import { createSelector } from 'reselect';

 import { selectCurrentDate } from '@/containers/DateSelector/selectors';
 import { toPrecision } from '@/utils/formatData';
// import { withDataHashKey } from '@/utils/hashData';
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

  export const makeSelectScalesResultByRange = () =>
  createSelector(
    selectResultsByRange,
    selectCurrentDate,
    (resultsByRange, currentDate) =>
      {
      const data = [
        {
          id: 0,
          value: 0
        },
        {
          id: 1,
          value: 0
        }    
      ];
      let result = resultsByRange.filter(({ id }) => id === currentDate);

      if (result.length === 0) {
        return data;
      }

      [result] = result;

      return [
        {
          id: 0,
          value: toPrecision(result[RESULT_KEY.RELATIVE_TOTAL_MASS] ?? 0, 1)
        },
        {
          id: 1,
          value: toPrecision(result[RESULT_KEY.RELATIVE_CIRCULATING_BLOOD_VOLUME] ?? 0, 1)
        }
      ]
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
          title: 'Общая масса\nгемоглобина, г',
          value: toPrecision(result[RESULT_KEY.HEMOGLOBIN_TOTAL_MASS] ?? 0, 1)
        },
        {
          id: 1,
          title: 'Общий объем циркулирующей крови, мл',
          value: toPrecision(result[RESULT_KEY.TOTAL_CIRCULATING_BLOOD_VOLUME] ?? 0, 1)
        },
        {
          id: 2,
          title: '\nГемоглобин, г/л',
          value: toPrecision(result[RESULT_KEY.HEMOGLOBIN] ?? 0, 1)
        }
      ]
    }
  );