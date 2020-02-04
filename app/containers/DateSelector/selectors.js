import dayjs from 'dayjs';
import { createSelector } from 'reselect';

import { REQUEST_STATUS } from '@/utils/constants';
import { toLocaleDate, toLocaleDateGraphQl } from '@/utils/formatData';

import { STATE_KEY } from './constants';
import { initialState } from './reducer';

export const selectCurrentDate = state =>
  state[STATE_KEY.MAIN]?.[STATE_KEY.CURRENT_DATE] || initialState[STATE_KEY.CURRENT_DATE];
const selectDates = state =>
  state[STATE_KEY.MAIN]?.[STATE_KEY.DATES] || initialState[STATE_KEY.DATES];
const selectDateRangeLastIndex = state =>
  state[STATE_KEY.MAIN]?.[STATE_KEY.DATE_RANGE_LAST_INDEX] ||
  initialState[STATE_KEY.DATE_RANGE_LAST_INDEX];
const selectStatus = state =>
  state[STATE_KEY.MAIN]?.[STATE_KEY.STATUS] || initialState[STATE_KEY.STATUS];

export const makeSelectDatesData = () =>
  createSelector(
    selectDates,
    selectDateRangeLastIndex,
    (dates, dateRangeLastIndex) => {
      let prevArrow;
      let nextArrow;
      let outputDates;

      if (dates.length <= 3) {
        prevArrow = false;
        nextArrow = false;
        outputDates = [...dates];
      } else {
        prevArrow = dateRangeLastIndex < dates.length;
        nextArrow = dateRangeLastIndex - 3 > 0;
        outputDates = dates.slice(dateRangeLastIndex - 3, dateRangeLastIndex);
      }

      return {
        prevArrow,
        nextArrow,
        dates: outputDates.map((val, index) => ({
          id: outputDates[outputDates.length - 1 - index].id,
          value: outputDates[outputDates.length - 1 - index].datetimes ? 
                 toLocaleDate(outputDates[outputDates.length - 1 - index].datetimes)
                 :
                 toLocaleDateGraphQl(outputDates[outputDates.length - 1 - index].date)
        }))
      };
    }
  );

export const makeSelectCurrentDate = () =>
  createSelector(
    selectCurrentDate,
    currentDate => currentDate
  );

export const makeSelectCurrentDateRange = () =>
  createSelector(
    selectDates,
    selectCurrentDate,
    (dates, currentDate) => {
      const startDate = dates.filter(({ id }) => id === currentDate)?.[0]?.datetimes;
      const endDate = dayjs(startDate).add(1, 'day');

      return {
        startDate: toLocaleDate(startDate),
        endDate: toLocaleDate(endDate)
      };
    }
  );

export const makeSelectIsEmptyDates = () =>
  createSelector(
    selectDates,
    selectStatus,
    (dates, status) => status === REQUEST_STATUS.LOADED && dates.length === 0
  );

export const makeSelectStatus = () =>
  createSelector(
    selectStatus,
    status => status
  );
