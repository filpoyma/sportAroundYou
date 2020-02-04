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
          id: 'ЭУ',
          value: result[MOTIVATION_KEY.EU]
        },
        {
          id: 'СС',
          value: result[MOTIVATION_KEY.SS]
        },
        {
          id: 'ФС',
          value: result[MOTIVATION_KEY.FS]
        },
        {
          id: 'СЭ',
          value: result[MOTIVATION_KEY.SE]
        },
        {
          id: 'СМ',
          value: result[MOTIVATION_KEY.SM]
        },
        {
          id: 'ДУ',
          value: result[MOTIVATION_KEY.DU]
        },
        {
          id: 'СП',
          value: result[MOTIVATION_KEY.SP]
        },
        {
          id: 'РВ',
          value: result[MOTIVATION_KEY.RV]
        },
        {
          id: 'ПД',
          value: result[MOTIVATION_KEY.PD]
        },
        {
          id: 'ГП',
          value: result[MOTIVATION_KEY.GP]
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

      const resultDetails = {};

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
