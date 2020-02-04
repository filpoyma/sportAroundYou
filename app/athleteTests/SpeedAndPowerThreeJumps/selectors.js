import { createSelector } from 'reselect';

import { withDataHashKey } from '@/utils/hashData';
import { COLORS } from '@/utils/styleConstants';

import { STATE_KEY } from './constants';
import { initialState } from './reducer';

export const selectSpeedAndPowerThreeJumps = state =>
  state[STATE_KEY.MAIN]?.[STATE_KEY.SPEED_AND_POWER_THREE_JUMPS] ||
  initialState[STATE_KEY.SPEED_AND_POWER_THREE_JUMPS];
const selectSpeedAndPowerThreeJumpsByRange = state =>
  state[STATE_KEY.MAIN]?.[STATE_KEY.SPEED_AND_POWER_THREE_JUMPS_BY_RANGE] ||
  initialState[STATE_KEY.SPEED_AND_POWER_THREE_JUMPS_BY_RANGE];
const selectStatus = state => state[STATE_KEY.MAIN]?.status || initialState.status;

export const makeSelectStatus = key =>
  createSelector(
    selectStatus,
    status => status[key]
  );

export const makeSelectJumpHeight = () =>
  createSelector(
    selectSpeedAndPowerThreeJumpsByRange,
    speedAndPowerThreeJumpsByRange => {
      const data = [];

      const current = speedAndPowerThreeJumpsByRange[0] || null;
      if (!current) return withDataHashKey(data);

      data.push(
        {
          id: 'Из приседа',
          color: COLORS.CHARTS.HISTOGRAM.DARK_GRAY,
          value: current?.jumps[0] || null
        },
        {
          id: 'С подседом',
          color: COLORS.CHARTS.HISTOGRAM.LIGHT_BLUE,

          value: current?.jumps[1] || null
        },
        {
          id: 'Максимальный',
          color: COLORS.CHARTS.HISTOGRAM.BLUE,
          value: current?.jumps[2] || null
        }
      );

      return withDataHashKey(data);
    }
  );

export const makeSelectPlates = () =>
  createSelector(
    selectSpeedAndPowerThreeJumpsByRange,
    speedAndPowerThreeJumpsByRange => {
      const current = speedAndPowerThreeJumpsByRange[0] || null;
      if (!current) return [];

      const absolutePower = current?.absolutePower || 'НД';
      const elasticityIndex = current?.elasticityIndex || 'НД';
      const coordination = current?.coordination || 'НД';

      return [
        {
          id: 0,
          title: 'Абсолютная сила, см',
          value: absolutePower
        },
        {
          id: 1,
          title: 'Индекс упругости, %',
          value: elasticityIndex
        },
        {
          id: 2,
          title: 'Индекс согласования, %',
          value: coordination
        }
      ];
    }
  );
