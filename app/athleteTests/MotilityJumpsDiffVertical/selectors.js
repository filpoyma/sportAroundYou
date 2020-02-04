import { createSelector } from 'reselect';

import { selectCurrentDate } from '@/containers/DateSelector/selectors';
import { toPrecision } from '@/utils/formatData';
import { withDataHashKey } from '@/utils/hashData';

import { STATE_KEY } from './constants';
import { initialState } from './reducer';

export const selectMotilityJumpsDiffVertical = state =>
  state[STATE_KEY.MAIN]?.[STATE_KEY.MOTILITY_JUMPS_DIFF_VERTICAL] ||
  initialState[STATE_KEY.MOTILITY_JUMPS_DIFF_VERTICAL];
const selectMotilityJumpsDiffVerticalByRange = state =>
  state[STATE_KEY.MAIN]?.[STATE_KEY.MOTILITY_JUMPS_DIFF_VERTICAL_BY_RANGE] ||
  initialState[STATE_KEY.MOTILITY_JUMPS_DIFF_VERTICAL_BY_RANGE];
const selectStatus = state => state[STATE_KEY.MAIN]?.status || initialState.status;

export const makeSelectStatus = key =>
  createSelector(
    selectStatus,
    status => status[key]
  );

export const makeSelectHistogramDataForCurrentDate = () =>
  createSelector(
    selectMotilityJumpsDiffVerticalByRange,
    selectCurrentDate,
    (motilityJumpsDiffVertical, currentDate) => {
      const data = [];
      let current = motilityJumpsDiffVertical.filter(({ id }) => id === currentDate);

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
    selectMotilityJumpsDiffVerticalByRange,
    selectCurrentDate,
    (motilityJumpsDiffVertical, currentDate) => {
      let current = motilityJumpsDiffVertical.filter(({ id }) => id === currentDate);

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
