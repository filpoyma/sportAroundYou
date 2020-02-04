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
      const currentResult = results.filter(({ id }) => id === currentDate);
      if (currentResult.length === 0) {
        return null;
      }

      return currentResult[0];
    }
  );

export const makeSelectLeftChartData = () =>
  createSelector(
    makeSelectCurrentResult(),
    result => {
      if (!result) return null;

      const firstStepTimeL = toPrecision(result?.[RESULT_KEY.FIRST_STEP_DURATION_LEFT] ?? 0, 0);
      const reactionTimeL = toPrecision(result?.[RESULT_KEY.REACTION_TIME_LEFT] ?? 0, 0);
      const accelerationTimeL = toPrecision(result?.[RESULT_KEY.ACCELERATION_TIME_LEFT] ?? 0, 0);
      const distanceTimeL = toPrecision(result?.[RESULT_KEY.BRIDGING_TIME_LEFT] ?? 0, 0);

      const firstStepPercentage = toPrecision((firstStepTimeL / distanceTimeL) * 100, 0);
      const reactionPercentage = toPrecision((reactionTimeL / distanceTimeL) * 100, 0);
      const accelerationPercentage = toPrecision((accelerationTimeL / distanceTimeL) * 100, 0);

      return withDataHashKey({
        name: 'directStanceL',
        children: [
          {
            name: RESULT_KEY.REACTION_TIME_LEFT,
            percent: reactionPercentage,
            value: reactionTimeL,
            loc: reactionTimeL
          },
          {
            name: RESULT_KEY.ACCELERATION_SPEED_LEFT,
            percent: accelerationPercentage,
            value: accelerationTimeL - firstStepTimeL,
            loc: accelerationTimeL - firstStepTimeL,
            children: [
              {
                name: RESULT_KEY.FIRST_STEP_DURATION_LEFT,
                percent: firstStepPercentage,
                value: firstStepTimeL,
                loc: firstStepTimeL
              }
            ]
          }
        ],
        time: distanceTimeL
      });
    }
  );

export const makeSelectRightChartData = () =>
  createSelector(
    makeSelectCurrentResult(),
    result => {
      if (!result) return null;

      const firstStepTimeR = toPrecision(result?.[RESULT_KEY.FIRST_STEP_DURATION_RIGHT] ?? 0, 0);
      const reactionTimeR = toPrecision(result?.[RESULT_KEY.REACTION_TIME_RIGHT] ?? 0, 0);
      const accelerationTimeR = toPrecision(result?.[RESULT_KEY.ACCELERATION_TIME_RIGHT] ?? 0, 0);
      const distanceTimeR = toPrecision(result?.[RESULT_KEY.BRIDGING_TIME_RIGHT] ?? 0, 0);

      const firstStepPercentage = toPrecision((firstStepTimeR / distanceTimeR) * 100, 0);
      const reactionPercentage = toPrecision((reactionTimeR / distanceTimeR) * 100, 0);
      const accelerationPercentage = toPrecision((accelerationTimeR / distanceTimeR) * 100, 0);

      return withDataHashKey({
        name: 'directStanceR',
        children: [
          {
            name: RESULT_KEY.REACTION_TIME_RIGHT,
            percent: reactionPercentage,
            value: reactionTimeR,
            loc: reactionTimeR
          },
          {
            name: RESULT_KEY.ACCELERATION_SPEED_RIGHT,
            percent: accelerationPercentage,
            value: accelerationTimeR - firstStepTimeR,
            loc: accelerationTimeR - firstStepTimeR,
            children: [
              {
                name: RESULT_KEY.FIRST_STEP_DURATION_RIGHT,
                percent: firstStepPercentage,
                value: firstStepTimeR,
                loc: firstStepTimeR
              }
            ]
          }
        ],
        time: distanceTimeR
      });
    }
  );

export const makeSelectSpeedometerData = () =>
  createSelector(
    makeSelectCurrentResult(),
    result => {
      if (!result) return null;

      const valueR = toPrecision(result?.[RESULT_KEY.ACCELERATION_SPEED_RIGHT] ?? 0, 1);
      const valueL = toPrecision(result?.[RESULT_KEY.ACCELERATION_SPEED_LEFT] ?? 0, 1);
      return { valueR, valueL };
    }
  );
