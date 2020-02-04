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
          title: 'Максимальная пиковая мощность, Вт',
          value: toPrecision(result[RESULT_KEY.MAXPOWER] ?? 0, 1)
        },
        {
          id: 1,
          title: 'Относительная максимальная мощность, Вт/кг',
          value: toPrecision(result[RESULT_KEY.MAXPOWERREL] ?? 0, 1)
        },
        {
          id: 2,
          title: 'Максимальная частота, об./мин',
          value: toPrecision(result[RESULT_KEY.MAXCAP] ?? 0, 1)
        }
      ]
    }
  );
