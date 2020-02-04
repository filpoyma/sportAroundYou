import { createSelector } from 'reselect';

import { selectCurrentDate } from '@/containers/DateSelector/selectors';
import { toPrecision } from '@/utils/formatData';
import { withDataHashKey } from '@/utils/hashData';
import { COLORS } from '@/utils/styleConstants';

import { LABELS, RESULT_KEY, STATE_KEY } from './constants';
import { initialState } from './reducer';

export const selectResults = state =>
  state[STATE_KEY.MAIN]?.[STATE_KEY.RESULTS] || initialState[STATE_KEY.RESULTS];
const selectResultsByRange = state =>
  state[STATE_KEY.MAIN]?.[STATE_KEY.RESULTS_BY_RANGE] || initialState[STATE_KEY.RESULTS_BY_RANGE];
const selectStatus = state => state[STATE_KEY.MAIN]?.status || initialState.status;

const OUTPUT_KEYS = [
  RESULT_KEY.BELLY,
  RESULT_KEY.BICEPS,
  RESULT_KEY.FOREARM,
  RESULT_KEY.HIP_MID,
  RESULT_KEY.HIP_UP,
  RESULT_KEY.ILIAC,
  RESULT_KEY.SHIN,
  RESULT_KEY.TRICEPS,
  RESULT_KEY.UNDER_SHOULDER_BLADE,
  RESULT_KEY.WRIST,
  RESULT_KEY.CHEST
];

const GREY_KEYS = [RESULT_KEY.SHIN, RESULT_KEY.UNDER_SHOULDER_BLADE, RESULT_KEY.TRICEPS];

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
      let result = resultsByRange.filter(({ id }) => id === currentDate);

      if (result.length === 0) {
        return withDataHashKey([]);
      }

      [result] = result;

      const data = [];

      Object.keys(result).forEach(key => {
        if (!OUTPUT_KEYS.includes(key)) {
          return;
        }

        data.push({
          id: key,
          label: LABELS[key].toUpperCase(),
          value: toPrecision(result?.[key], 1)
        });
      });

      return withDataHashKey(data);
    }
  );

export const makeSelectBarChartData = () =>
  createSelector(
    selectResultsByRange,
    selectCurrentDate,
    (resultsByRange, currentDate) => {
      let result = resultsByRange.filter(({ id }) => id === currentDate);

      if (result.length === 0) {
        return withDataHashKey([]);
      }

      [result] = result;

      const data = [];

      Object.keys(result).forEach(key => {
        if (!OUTPUT_KEYS.includes(key)) {
          return;
        }

        data.push({
          id: key,
          color: GREY_KEYS.includes(key) ? COLORS.TEXT.PRIMARY : COLORS.BUTTON.PRIMARY.ORDINARY,
          label: LABELS[key].toLowerCase(),
          value: toPrecision(result?.[key], 1)
        });
      });

      return withDataHashKey(data);
    }
  );

export const makeSelectPlatesData = () =>
  createSelector(
    selectResultsByRange,
    selectCurrentDate,
    (resultsByRange, currentDate) => {
      let result = resultsByRange.filter(({ id }) => id === currentDate);

      if (result.length === 0) {
        return [];
      }

      [result] = result;

      return [
        {
          id: 0,
          title: 'Жировая масса, кг, %',
          value: toPrecision(result?.bfm, 1)
        },
        {
          id: 1,
          title: 'Безжировая масса, кг, %',
          value: toPrecision(result?.ffm, 1)
        },
        {
          id: 2,
          title: 'Индекс массы тела, кг/м2',
          value: toPrecision(result?.bmi, 1)
        }
      ];
    }
  );
