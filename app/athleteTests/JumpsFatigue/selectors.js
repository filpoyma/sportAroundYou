import { createSelector } from 'reselect';

import { selectCurrentDate } from '@/containers/DateSelector/selectors';
import { toPrecision } from '@/utils/formatData';
import { withDataHashKey } from '@/utils/hashData';
import { COLORS } from '@/utils/styleConstants';

import { STATE_KEY } from './constants';
import { initialState } from './reducer';

const selectJumpsFatigueResults = state =>
  state[STATE_KEY.MAIN]?.[STATE_KEY.RESULTS] || initialState[STATE_KEY.RESULTS];

export const makeSelectStatus = state => state?.[STATE_KEY.MAIN]?.status || initialState.status;

const makeSelectCurrentResult = () =>
  createSelector(
    selectJumpsFatigueResults,
    selectCurrentDate,
    (jumpsFatigueResults, currentDate) => {
      const currentResult = jumpsFatigueResults.filter(({ id }) => id === currentDate);
      if (currentResult.length === 0) {
        return null;
      }

      return currentResult[0];
    }
  );

export const makeSelectHeightHistogramResult = () =>
  createSelector(
    makeSelectCurrentResult(),
    currentResult => {
      if (!currentResult) return withDataHashKey([]);

      const { height, heightMax, heightMin } = currentResult;

      const heightHistogramData = height.map((value, idx) => {
        let color = COLORS.CHARTS.HISTOGRAM.BLUE;
        if (value === heightMax) color = COLORS.CHARTS.HISTOGRAM.DARK_GRAY;
        else if (value === heightMin) color = COLORS.CHARTS.HISTOGRAM.GRAY;

        const bar = {
          id: (idx + 1).toString(),
          value: toPrecision(value, 1),
          color
        };

        return bar;
      });

      return withDataHashKey(heightHistogramData);
    }
  );

export const makeSelectContactTimeHistogramResult = () =>
  createSelector(
    makeSelectCurrentResult(),
    currentResult => {
      if (!currentResult) return withDataHashKey([]);

      const { contactTime } = currentResult;
      const contactTimeHistogramData = contactTime.map((value, idx) => ({
        id: (idx + 1).toString(),
        value: toPrecision(value, 0),
        color: COLORS.CHARTS.HISTOGRAM.BLUE
      }));

      return withDataHashKey(contactTimeHistogramData);
    }
  );

export const makeSelectPlates = () =>
  createSelector(
    makeSelectCurrentResult(),
    currentResult => {
      if (!currentResult) return [];

      const { heightFatigue, speedFatigue } = currentResult;

      return [
        {
          id: 0,
          title: 'Утомляемость по силе, %',
          value: toPrecision(heightFatigue, 1)
        },
        {
          id: 1,
          title: 'Утомляемость по скорости, %',
          value: toPrecision(speedFatigue, 1)
        }
      ];
    }
  );

export const makeSelectHeightAverage = () =>
  createSelector(
    makeSelectCurrentResult(),
    currentResult => {
      if (!currentResult) return 0;

      const { heightMean } = currentResult;

      return heightMean;
    }
  );
