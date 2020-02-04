import { createSelector } from 'reselect';

import { selectCurrentDate } from '@/containers/DateSelector/selectors';
import { toPrecision } from '@/utils/formatData';
import { withDataHashKey } from '@/utils/hashData';

import { STATE_KEY } from './constants';
import { initialState } from './reducer';

const selectStatus = state => state[STATE_KEY.MAIN]?.status || initialState.status;
const selectResults = state =>
  state[STATE_KEY.MAIN]?.[STATE_KEY.RESULTS] || initialState[STATE_KEY.RESULTS];
const selectResultsByRange = state =>
  state[STATE_KEY.MAIN]?.[STATE_KEY.RESULTS_BY_RANGE] || initialState[STATE_KEY.RESULTS_BY_RANGE];

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
      const result = resultsByRange.filter(({ id }) => id === currentDate);

      if (result.length === 0) {
        return {
          answers: [],
          scale1: 0,
          scale2: 0
        };
      }

      return {
        answers: result[0].rawData,
        scale1: toPrecision(result[0].scale1, 1),
        scale2: toPrecision(result[0].scale2, 1)
      };
    }
  );

export const makeSelectDynamic = key =>
  createSelector(
    selectResults,
    results => {
      const data = [];
      const datesByKey = [];
      const resultsByKey = [];
      results.forEach(result => {
        if (result.date !== null && result.date !== datesByKey?.[datesByKey.length - 1]) {
          datesByKey.push(result.date);
          resultsByKey.push(result[key]);
        }
      });

      if (resultsByKey.length > 0) {
        resultsByKey.forEach((result, index) => {
          data.push({
            x: datesByKey[index],
            y: toPrecision(resultsByKey[index])
          });
        });

        return withDataHashKey([
          {
            id: key,
            data,
            yMin: Math.min(...resultsByKey) - 0.5,
            yMax: Math.max(...resultsByKey) + 0.5
          }
        ]);
      }

      return withDataHashKey([
        {
          id: key,
          data,
          yMin: 0,
          yMax: 0
        }
      ]);
    }
  );
