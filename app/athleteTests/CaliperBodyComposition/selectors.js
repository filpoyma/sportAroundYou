import { createSelector } from 'reselect';

import { selectCurrentDate } from '@/containers/DateSelector/selectors';
import { toPrecision } from '@/utils/formatData';
import { withDataHashKey } from '@/utils/hashData';
import { COLORS } from '@/utils/styleConstants';

import CONSTANTS, { LABELS, RESULT_KEY } from './constants';
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

const OUTPUT_KEYS_FAT = [
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

const OUTPUT_KEYS_GIRTH = [
  RESULT_KEY.SHOULDER_RELAXED_L,
  RESULT_KEY.SHOULDER_RELAXED_R,
  RESULT_KEY.SHOULDER_TENSIONED_L,
  RESULT_KEY.SHOULDER_TENSIONED_R,
  RESULT_KEY.FOREARM_R,
  RESULT_KEY.FOREARM_L,
  RESULT_KEY.WAIST,
  RESULT_KEY.HIPS,

  RESULT_KEY.HIP_UP_RIGHT,
  RESULT_KEY.HIP_UP_LEFT,
  RESULT_KEY.HIP_MID_RIGHT,
  RESULT_KEY.HIP_MID_LEFT,
  RESULT_KEY.SHIN_LEFT,
  RESULT_KEY.SHIN_RIGHT,

  RESULT_KEY.HEIGHT
];

const GREY_KEYS = [RESULT_KEY.SHIN, RESULT_KEY.UNDER_SHOULDER_BLADE, RESULT_KEY.TRICEPS];

export const makeSelectStatus = key =>
  createSelector(
    selectStatus,
    status => status[key]
  );

export const makeSelectResultsFatByRange = () =>
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
        if (!OUTPUT_KEYS_FAT.includes(key)) {
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

export const makeSelectBarChartFatData = () =>
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
        if (!OUTPUT_KEYS_FAT.includes(key)) {
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

export const makeSelectResultsGirthByRange = () =>
  createSelector(
    selectResultsByRange,
    selectCurrentDate,
    (resultsByRange, currentDate) => {
      let result = resultsByRange.filter(({ id }) => id === currentDate);

      if (result.length === 0) {
        return withDataHashKey({});
      }

      [result] = result;

      const data = {};

      Object.keys(result).forEach(key => {
        if (!OUTPUT_KEYS_GIRTH.includes(key)) {
          return;
        }
        data[key] = toPrecision(result?.[key], 1);
      });

      return withDataHashKey(data);
    }
  );

export const makeSelectFatMuscleRatio = () =>
  createSelector(
    selectResultsByRange,
    selectCurrentDate,
    (resultsByRange, currentDate) => {
      let result = resultsByRange.filter(({ id }) => id === currentDate);

      if (result.length === 0) {
        return withDataHashKey({});
      }

      [result] = result;

      const weight = result?.weight ?? 1;

      const fatMass = result?.bfm ?? 0;
      const freeFatMass = result?.ffm ?? 0;
      const muscleMass = result?.smm ?? 0;

      const freeFatPercent = (freeFatMass / weight) * 100;
      const fatPercent = (fatMass / weight) * 100;
      const musclePercent = (muscleMass / weight) * 100;

      return withDataHashKey({
        name: 'ftmp',
        children: [
          {
            name: 'Жировая',
            percent: toPrecision(fatPercent, 1),
            value: toPrecision(fatMass, 1),
            loc: toPrecision(fatMass, 1)
          },
          {
            name: 'Безжировая',
            percent: toPrecision(freeFatPercent, 1),
            value: toPrecision(freeFatMass, 1),
            loc: freeFatMass - muscleMass,
            children: [
              {
                name: 'Мышечная',
                percent: toPrecision(musclePercent, 1),
                value: toPrecision(muscleMass, 1),
                loc: muscleMass
              }
            ]
          }
        ],
        weight
      });
    }
  );
