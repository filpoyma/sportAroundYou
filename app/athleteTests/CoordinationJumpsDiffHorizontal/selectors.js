import { createSelector } from 'reselect';

import { selectCurrentDate } from '@/containers/DateSelector/selectors';
import { toPrecision } from '@/utils/formatData';
import { withDataHashKey } from '@/utils/hashData';

import { STATE_KEY } from './constants';
import { initialState } from './reducer';

export const selectCoordinationJumpsDiffHorizontal = state =>
  state[STATE_KEY.MAIN]?.[STATE_KEY.COORDINATION_JUMPS_DIFF_HORIZONTAL] ||
  initialState[STATE_KEY.COORDINATION_JUMPS_DIFF_HORIZONTAL];
const selectCoordinationJumpsDiffHorizontalByRange = state =>
  state[STATE_KEY.MAIN]?.[STATE_KEY.COORDINATION_JUMPS_DIFF_HORIZONTAL_BY_RANGE] ||
  initialState[STATE_KEY.COORDINATION_JUMPS_DIFF_HORIZONTAL_BY_RANGE];
const selectStatus = state => state[STATE_KEY.MAIN]?.status || initialState.status;

export const makeSelectStatus = key =>
  createSelector(
    selectStatus,
    status => status[key]
  );

export const makeSelectHistogramDataForCurrentDate = () =>
  createSelector(
    selectCoordinationJumpsDiffHorizontalByRange,
    selectCurrentDate,
    (coordinationJumpsDiffHorizontal, currentDate) => {
      const data = [];
      let current = coordinationJumpsDiffHorizontal.filter(({ id }) => id === currentDate);

      if (current.length === 0) {
        return withDataHashKey(data);
      }

      [current] = current;

      const rawData = current?.rawData || [];

      for (let i = 0; i < rawData.length; i += 1) {
        data.push({
          id: i + 1,
          value: rawData[i]
        });
      }

      return withDataHashKey(data);
    }
  );

export const makeSelectPlates = () =>
  createSelector(
    selectCoordinationJumpsDiffHorizontalByRange,
    selectCurrentDate,
    (coordinationJumpsDiffHorizontal, currentDate) => {
      let current = coordinationJumpsDiffHorizontal.filter(({ id }) => id === currentDate);

      if (current.length === 0) {
        return [];
      }

      [current] = current;

      const k = toPrecision(current?.k, 1) ?? 'НД';
      const sigma = toPrecision(current?.sigma, 1) ?? 'НД';
      const sum = toPrecision(current?.sum, 1) ?? 'НД';

      return [
        {
          id: 0,
          title: 'Сумма приращений, см',
          value: sum
        },
        {
          id: 1,
          title: 'Приращение, см',
          value: sigma
        },
        {
          id: 2,
          title: 'Коэффициент дифференциации',
          value: k
        }
      ];
    }
  );

export const makeSelectDynamic = key =>
  createSelector(
    selectCoordinationJumpsDiffHorizontal,
    coordinationJumpsDiffHorizontal => {
      const data = [];
      const datesByKey = [];
      const resultsByKey = [];
      let currentDate = '';
      coordinationJumpsDiffHorizontal.forEach(result => {
        if (currentDate !== result.createdDate.slice(0, 10) && typeof result?.[key] === 'number') {
          datesByKey.push(result.createdDate);
          resultsByKey.push(result[key]);
          currentDate = result.createdDate.slice(0, 10);
        }
      });

      if (resultsByKey?.length > 0) {
        resultsByKey.forEach((result, index) => {
          data.push({
            x: datesByKey[index].slice(0, 19),
            y: toPrecision(result, 1)
          });
        });

        return withDataHashKey([
          {
            id: key,
            data,
            yMin: Math.min(...resultsByKey) - 1,
            yMax: Math.max(...resultsByKey) + 1
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
