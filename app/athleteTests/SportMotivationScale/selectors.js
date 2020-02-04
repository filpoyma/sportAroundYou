import { createSelector } from 'reselect';

import { selectCurrentDate } from '@/containers/DateSelector/selectors';
import { withDataHashKey } from '@/utils/hashData';

import { MOTIVATION_KEY, STATE_KEY } from './constants';
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
          id: 'УН',
          value: result[MOTIVATION_KEY.UN]
        },
        {
          id: 'С',
          value: result[MOTIVATION_KEY.S]
        },
        {
          id: 'ПЭ',
          value: result[MOTIVATION_KEY.PE]
        },
        {
          id: 'СЦ',
          value: result[MOTIVATION_KEY.SC]
        },
        {
          id: 'Д',
          value: result[MOTIVATION_KEY.D]
        },
        {
          id: 'СО',
          value: result[MOTIVATION_KEY.SO]
        },
        {
          id: 'ОМ',
          value: result[MOTIVATION_KEY.OM]
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
      let minMotivation = Number.POSITIVE_INFINITY;
      let maxMotivation = Number.NEGATIVE_INFINITY;
      let result = resultsByRange.filter(({ id }) => id === currentDate);

      if (result.length === 0) {
        return data;
      }

      [result] = result;

      const resultDetails = {
        externalMotivation: result.externalMotivation,
        internalMotivation: result.internalMotivation,
        [MOTIVATION_KEY.OM]: result[MOTIVATION_KEY.OM],
        prcDiff: result.prcDiff
      };

      const allowedKeys = Object.values(MOTIVATION_KEY);

      Object.keys(result)
        .filter(key => allowedKeys.indexOf(key) !== -1)
        .forEach(key => {
          if (result[key] > maxMotivation) {
            maxMotivation = result[key];
            resultDetails.maxMotivationKeys = [key];
          } else if (result[key] === maxMotivation) {
            resultDetails.maxMotivationKeys.push(key);
          }

          if (result[key] < minMotivation) {
            minMotivation = result[key];
            resultDetails.minMotivationKeys = [key];
          } else if (result[key] === minMotivation) {
            resultDetails.minMotivationKeys.push(key);
          }
        });

      data.resultDetails = resultDetails;
      data.rawData = result.rawData;

      return data;
    }
  );
