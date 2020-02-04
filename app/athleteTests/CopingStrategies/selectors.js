import { createSelector } from 'reselect';

import { selectCurrentDate } from '@/containers/DateSelector/selectors';
import { withDataHashKey } from '@/utils/hashData';

import { STATE_KEY, STRATEGY_KEY } from './constants';
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
          id: 'СН',
          value: result[STRATEGY_KEY.SN]
        },
        {
          id: 'ОБ',
          value: result[STRATEGY_KEY.OB]
        },
        {
          id: 'КО',
          value: result[STRATEGY_KEY.KO]
        },
        {
          id: 'УС',
          value: result[STRATEGY_KEY.US]
        },
        {
          id: 'ПЦ',
          value: result[STRATEGY_KEY.PC]
        },
        {
          id: 'ДС',
          value: result[STRATEGY_KEY.DS]
        },
        {
          id: 'НП',
          value: result[STRATEGY_KEY.NP]
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
        [STRATEGY_KEY.DS]: result[STRATEGY_KEY.DS],
        [STRATEGY_KEY.KO]: result[STRATEGY_KEY.KO],
        [STRATEGY_KEY.NP]: result[STRATEGY_KEY.NP],
        [STRATEGY_KEY.OB]: result[STRATEGY_KEY.OB],
        [STRATEGY_KEY.PC]: result[STRATEGY_KEY.PC],
        [STRATEGY_KEY.SN]: result[STRATEGY_KEY.SN],
        [STRATEGY_KEY.US]: result[STRATEGY_KEY.US]
      };

      data.resultDetails = resultDetails;
      data.rawData = result.rawData;

      return data;
    }
  );
