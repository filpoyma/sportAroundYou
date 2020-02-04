import { createSelector } from 'reselect';

import { selectCurrentDate } from '@/containers/DateSelector/selectors';
import { toPrecision } from '@/utils/formatData';
import { withDataHashKey } from '@/utils/hashData';

import CONSTANTS, { RESULT_KEY } from './constants';
import { initialState } from './reducer';

export const selectResults = state =>
  state[CONSTANTS.REDUCER_KEY.KEY]?.[CONSTANTS.REDUCER_KEY.RESULTS] ||
  initialState[CONSTANTS.REDUCER_KEY.RESULTS];
// eslint-disable-next-line no-unused-vars
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

const makeSelectCurrentResult = () =>
  createSelector(
    selectResults,
    selectCurrentDate,
    (results, currentDate) => {
      const currentResult = results?.filter(({ id }) => id === currentDate);
      if (currentResult.length === 0) {
        return null;
      }

      return currentResult[0];
    }
  );

export const makeSelectChartData = () =>
  createSelector(
    makeSelectCurrentResult(),
    result => {
      if (!result) return null;

      const firstStepTime = toPrecision(result?.[RESULT_KEY.FIRST_STEP_DURATION] ?? 0, 0);
      const reactionTime = toPrecision(result?.[RESULT_KEY.REACTION_TIME] ?? 0, 0);
      const accelerationTime = toPrecision(result?.[RESULT_KEY.ACCELERATION_TIME] ?? 0, 0);
      const distanceTime = toPrecision(result?.[RESULT_KEY.BRIDGING_TIME] ?? 0, 0);

      const firstStepPercentage = toPrecision((firstStepTime / distanceTime) * 100, 0);
      const reactionPercentage = toPrecision((reactionTime / distanceTime) * 100, 0);
      const accelerationPercentage = toPrecision((accelerationTime / distanceTime) * 100, 0);

      return withDataHashKey({
        name: 'directStance',
        children: [
          {
            name: RESULT_KEY.REACTION_TIME,
            percent: reactionPercentage,
            value: reactionTime,
            loc: reactionTime
          },
          {
            name: RESULT_KEY.ACCELERATION_TIME,
            percent: accelerationPercentage,
            value: accelerationTime - firstStepTime,
            loc: accelerationTime - firstStepTime,
            children: [
              {
                name: RESULT_KEY.FIRST_STEP_DURATION,
                percent: firstStepPercentage,
                value: firstStepTime,
                loc: firstStepTime
              }
            ]
          }
        ],
        time: distanceTime
      });
    }
  );

export const makeSelectSpeedometerData = () =>
  createSelector(
    makeSelectCurrentResult(),
    result => {
      if (!result) return null;

      const value = toPrecision(result[RESULT_KEY.ACCELERATION_SPEED] ?? 0, 1);
      return { value };
    }
  );
