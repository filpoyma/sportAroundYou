import { createSelector } from 'reselect';

import { selectCurrentDate } from '@/containers/DateSelector/selectors';
import { withDataHashKey } from '@/utils/hashData';

import { FACTOR_KEY, STATE_KEY } from './constants';
import { initialState } from './reducer';

const selectStatus = state => state[STATE_KEY.MAIN]?.status || initialState.status;
// const selectResults = state =>
//   state[STATE_KEY.MAIN]?.[STATE_KEY.RESULTS] || initialState[STATE_KEY.RESULTS];
const selectResultsByRange = state =>
  state[STATE_KEY.MAIN]?.[STATE_KEY.RESULTS_BY_RANGE] || initialState[STATE_KEY.RESULTS_BY_RANGE];

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
      const data = [];
      let result = resultsByRange.filter(({ id }) => id === currentDate);

      if (result.length === 0) {
        return withDataHashKey(data);
      }

      [result] = result;

      data.push(
        {
          id: 'Орг. вопросы',
          value: result[FACTOR_KEY.ORG_QUESTIONS]
        },
        {
          id: 'Готовность',
          value: result[FACTOR_KEY.READINESS]
        },
        {
          id: 'Личные',
          value: result[FACTOR_KEY.PERSONAL]
        }
      );

      return withDataHashKey(data);
    }
  );

export const makeSelectResultByRange = () =>
  createSelector(
    selectResultsByRange,
    selectCurrentDate,
    (resultsByRange, currentDate) => {
      const data = {
        resultDetails: {},
        rawData: []
      };

      let result = resultsByRange.filter(({ id }) => id === currentDate);

      if (result.length === 0) {
        return data;
      }

      [result] = result;

      const resultDetails = {
        [FACTOR_KEY.ORG_QUESTIONS]: result[FACTOR_KEY.ORG_QUESTIONS],
        [FACTOR_KEY.READINESS]: result[FACTOR_KEY.READINESS],
        [FACTOR_KEY.PERSONAL]: result[FACTOR_KEY.PERSONAL],
        rawData: result.rawData
      };

      data.resultDetails = resultDetails;
      data.rawData = result.rawData;

      return data;
    }
  );
