import { createSelector } from 'reselect';

import { selectPerson } from '@/pages/TestPage/selectors';
import { toPrecision } from '@/utils/formatData';
import { withDataHashKey } from '@/utils/hashData';

import { STATE_KEY } from './constants';
import { initialState } from './reducer';

export const selectInBody = state =>
  state[STATE_KEY.MAIN]?.[STATE_KEY.IN_BODY] || initialState[STATE_KEY.IN_BODY];
const selectInBodyByRange = state =>
  state[STATE_KEY.MAIN]?.[STATE_KEY.IN_BODY_BY_RANGE] || initialState[STATE_KEY.IN_BODY_BY_RANGE];
const selectStatus = state => state[STATE_KEY.MAIN]?.status || initialState.status;

export const makeSelectStatus = key =>
  createSelector(
    selectStatus,
    status => status[key]
  );

export const makeSelectIndicatorForCurrentDate = (parentKey, indicatorKey) =>
  createSelector(
    selectInBodyByRange,
    selectPerson,
    (inBodyByRange, person) => {
      const current = inBodyByRange?.[parentKey]?.[0];

      // BMR range depends on person's gender
      const suffix = indicatorKey === 'bmr' ? person.gender : '';

      const value = current?.[indicatorKey] === 'NaN' ? 0 : current?.[indicatorKey];
      const min =
        current?.[`${indicatorKey}${suffix}Min`] === 'NaN'
          ? 0
          : current?.[`${indicatorKey}${suffix}Min`];
      const max =
        current?.[`${indicatorKey}${suffix}Max`] === 'NaN'
          ? 0
          : current?.[`${indicatorKey}${suffix}Max`];

      return {
        value: indicatorKey === 'bmr' ? toPrecision(value, 0) : toPrecision(value, 2),
        min: indicatorKey === 'bmr' ? toPrecision(min, 0) : toPrecision(min, 2),
        max: indicatorKey === 'bmr' ? toPrecision(max, 0) : toPrecision(max, 2)
      };
    }
  );

export const makeSelectDynamic = (parentKey, childKey) =>
  createSelector(
    selectInBody,
    inBody => {
      const data = [];
      const datesByKey = [];
      const resultsByKey = [];
      inBody?.[parentKey]?.forEach(result => {
        if (
          result[childKey] &&
          result[childKey] !== 'NaN' &&
          result.date !== datesByKey?.[datesByKey.length - 1]
        ) {
          datesByKey.push(result.date);
          resultsByKey.push(result[childKey]);
        }
      });

      if (resultsByKey?.length > 0) {
        for (let i = 0; i < resultsByKey.length; i += 1) {
          data.push({
            x: datesByKey[i],
            y: Number.parseFloat(resultsByKey[i]).toFixed(2)
          });
        }

        return withDataHashKey([
          {
            id: childKey,
            data,
            yMin: Math.min(...resultsByKey) - 0.1,
            yMax: Math.max(...resultsByKey) + 0.1
          }
        ]);
      }

      return withDataHashKey([
        {
          id: childKey,
          data,
          yMin: 0,
          yMax: 0
        }
      ]);
    }
  );

export const makeSelectFatMuscleRatio = () =>
  createSelector(
    selectInBodyByRange,
    inBodyByRange => {
      let weight = inBodyByRange?.bca?.[0]?.wt ?? 0;
      /*
       * TODO: Remove it after
       */
      if (weight === 'NaN') {
        weight = inBodyByRange?.bca?.[1]?.wt ?? 0;
      }
      const fatMass = inBodyByRange?.bca?.[0]?.bfm ?? 0;
      const freeFatMass = inBodyByRange?.bca?.[0]?.ffm ?? 0;
      const muscleMass = inBodyByRange?.mfa?.[0]?.smm ?? 0;

      /*
       * TODO: Remove calculations
       */
      const freeFatPercent = (freeFatMass / weight) * 100;
      const fatPercent = (fatMass / weight) * 100;
      const musclePercent = (muscleMass / weight) * 100;

      return withDataHashKey({
        name: 'ftmp',
        children: [
          {
            name: 'Жировая',
            percent: fatPercent.toFixed(1),
            value: fatMass.toFixed(1),
            loc: fatMass.toFixed(1)
          },
          {
            name: 'Безжировая',
            percent: freeFatPercent.toFixed(1),
            value: freeFatMass.toFixed(1),
            loc: freeFatMass - muscleMass,
            children: [
              {
                name: 'Мышечная',
                percent: musclePercent.toFixed(1),
                value: muscleMass.toFixed(1),
                loc: muscleMass
              }
            ]
          }
        ],
        weight
      });
    }
  );

export const makeSelectMuscleBalance = () =>
  createSelector(
    selectInBodyByRange,
    inBodyByRange =>
      withDataHashKey({
        trunk: inBodyByRange?.lb?.[0]?.lt.toFixed(1) ?? 0,
        rightArm: inBodyByRange?.lb?.[0]?.lra.toFixed(1) ?? 0,
        leftArm: inBodyByRange?.lb?.[0]?.lla.toFixed(1) ?? 0,
        rightLeg: inBodyByRange?.lb?.[0]?.lrl.toFixed(1) ?? 0,
        leftLeg: inBodyByRange?.lb?.[0]?.lll.toFixed(1) ?? 0
      })
  );
