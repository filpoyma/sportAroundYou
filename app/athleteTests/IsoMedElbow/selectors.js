import { createSelector } from 'reselect';

import { CELL_TYPE, HEADER_TYPE } from '@/components/Table/constants';
import { selectCurrentDate } from '@/containers/DateSelector/selectors';
import { toPrecision } from '@/utils/formatData';
import { withDataHashKey } from '@/utils/hashData';

import CONSTANTS, { KEYS } from './constants';
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
      const data = {};
      let result = resultsByRange.filter(({ id }) => id === currentDate);

      if (result.length === 0) {
        return data;
      }

      result = result[0].mainTable;

      data[KEYS.FORCE] = {
        headerHeight: 70,
        cellsHeight: 80,
        columns: [
          {
            id: 1,
            special: {
              width: 160,
              justify: 'left'
            },
            header: {
              type: HEADER_TYPE.TWO_TITLES,
              data: {
                title: '',
                titleSecondLine: ''
              }
            },
            body: {
              type: CELL_TYPE.TEXT_BOLD,
              special: {
                padding: '0 0 0 20px'
              },
              data: [
                {
                  id: 2,
                  text: 'Правая сторона'
                },
                {
                  id: 3,
                  text: 'Левая сторона'
                },
                {
                  id: 4,
                  text: 'Среднее значение'
                }
              ]
            }
          },
          {
            id: 4,
            special: {
              width: 140
            },
            header: {
              type: HEADER_TYPE.TWO_TITLES,
              data: {
                title: 'Сгибание,',
                titleSecondLine: 'Нм и Нм/кг'
              }
            },
            body: {
              type: CELL_TYPE.TEXT_BOLD,
              data: [
                {
                  id: 6,
                  text: `${toPrecision(
                    result?.[KEYS.FORCE]?.[KEYS.RIGHT_SIDE]?.flexAbs ?? '-',
                    1
                  )} / ${toPrecision(result?.[KEYS.FORCE]?.[KEYS.RIGHT_SIDE]?.flexRel ?? '-', 2)}`
                },
                {
                  id: 7,
                  text: `${toPrecision(
                    result?.[KEYS.FORCE]?.[KEYS.LEFT_SIDE]?.flexAbs ?? '-',
                    1
                  )} / ${toPrecision(result?.[KEYS.FORCE]?.[KEYS.LEFT_SIDE]?.flexRel ?? '-', 2)}`
                },
                {
                  id: 8,
                  text: `${toPrecision(
                    result?.[KEYS.FORCE]?.[KEYS.MEAN_VALUE]?.flexAbs ?? '-',
                    1
                  )} (${toPrecision(
                    result?.[KEYS.FORCE]?.[KEYS.MEAN_VALUE]?.flexRatio ?? '-',
                    2
                  )}) / ${toPrecision(result?.[KEYS.FORCE]?.[KEYS.MEAN_VALUE]?.flexRel ?? '-', 2)}`
                }
              ]
            }
          },
          {
            id: 9,
            special: {
              width: 140
            },
            header: {
              type: HEADER_TYPE.TWO_TITLES,
              data: {
                title: 'Разгибание,',
                titleSecondLine: 'Нм и Нм/кг'
              }
            },
            body: {
              type: CELL_TYPE.TEXT_BOLD,
              data: [
                {
                  id: 10,
                  text: `${toPrecision(
                    result?.[KEYS.FORCE]?.[KEYS.RIGHT_SIDE]?.exAbs ?? '-',
                    1
                  )} / ${toPrecision(result?.[KEYS.FORCE]?.[KEYS.RIGHT_SIDE]?.exRel ?? '-', 2)}`
                },
                {
                  id: 11,
                  text: `${toPrecision(
                    result?.[KEYS.FORCE]?.[KEYS.LEFT_SIDE]?.exAbs ?? '-',
                    1
                  )} / ${toPrecision(result?.[KEYS.FORCE]?.[KEYS.LEFT_SIDE]?.exRel ?? '-', 2)}`
                },
                {
                  id: 12,
                  text: `${toPrecision(
                    result?.[KEYS.FORCE]?.[KEYS.MEAN_VALUE]?.exAbs ?? '-',
                    1
                  )} (${toPrecision(
                    result?.[KEYS.FORCE]?.[KEYS.MEAN_VALUE]?.exRatio ?? '-',
                    2
                  )}) / ${toPrecision(result?.[KEYS.FORCE]?.[KEYS.MEAN_VALUE]?.exRel ?? '-', 2)}`
                }
              ]
            }
          },
          {
            id: 13,
            special: {
              width: 150
            },
            header: {
              type: HEADER_TYPE.TEXT,
              data: {
                title: 'Сгибание/разгибание'
              }
            },
            body: {
              type: CELL_TYPE.TEXT_BOLD,
              data: [
                {
                  id: 14,
                  text: `${toPrecision(
                    result?.[KEYS.FORCE]?.[KEYS.RIGHT_SIDE]?.flexExRatio ?? '-',
                    2
                  )}`
                },
                {
                  id: 15,
                  text: `${toPrecision(
                    result?.[KEYS.FORCE]?.[KEYS.LEFT_SIDE]?.flexExRatio ?? '-',
                    2
                  )}`
                },
                {
                  id: 16,
                  text: `${toPrecision(
                    result?.[KEYS.FORCE]?.[KEYS.MEAN_VALUE]?.flexExRatio ?? '-',
                    2
                  )}`
                }
              ]
            }
          }
        ]
      };

      data[KEYS.POWER] = {
        headerHeight: 70,
        cellsHeight: 80,
        columns: [
          {
            id: 1,
            special: {
              width: 160,
              justify: 'left'
            },
            header: {
              type: HEADER_TYPE.TWO_TITLES,
              data: {
                title: '',
                titleSecondLine: ''
              }
            },
            body: {
              type: CELL_TYPE.TEXT_BOLD,
              special: {
                padding: '0 0 0 20px'
              },
              data: [
                {
                  id: 2,
                  text: 'Правая сторона'
                },
                {
                  id: 3,
                  text: 'Левая сторона'
                },
                {
                  id: 4,
                  text: 'Среднее значение'
                }
              ]
            }
          },
          {
            id: 4,
            special: {
              width: 140
            },
            header: {
              type: HEADER_TYPE.TWO_TITLES,
              data: {
                title: 'Сгибание,',
                titleSecondLine: 'Вт и Вт/кг'
              }
            },
            body: {
              type: CELL_TYPE.TEXT_BOLD,
              data: [
                {
                  id: 6,
                  text: `${toPrecision(
                    result?.[KEYS.POWER]?.[KEYS.RIGHT_SIDE]?.flexAbs ?? '-',
                    1
                  )} / ${toPrecision(result?.[KEYS.POWER]?.[KEYS.RIGHT_SIDE]?.flexRel ?? '-', 2)}`
                },
                {
                  id: 7,
                  text: `${toPrecision(
                    result?.[KEYS.POWER]?.[KEYS.LEFT_SIDE]?.flexAbs ?? '-',
                    1
                  )} / ${toPrecision(result?.[KEYS.POWER]?.[KEYS.LEFT_SIDE]?.flexRel ?? '-', 2)}`
                },
                {
                  id: 8,
                  text: `${toPrecision(
                    result?.[KEYS.POWER]?.[KEYS.MEAN_VALUE]?.flexAbs ?? '-',
                    1
                  )} (${toPrecision(
                    result?.[KEYS.POWER]?.[KEYS.MEAN_VALUE]?.flexRatio ?? '-',
                    2
                  )}) / ${toPrecision(result?.[KEYS.POWER]?.[KEYS.MEAN_VALUE]?.flexRel ?? '-', 2)}`
                }
              ]
            }
          },
          {
            id: 9,
            special: {
              width: 140
            },
            header: {
              type: HEADER_TYPE.TWO_TITLES,
              data: {
                title: 'Разгибание,',
                titleSecondLine: 'Вт и Вт/кг'
              }
            },
            body: {
              type: CELL_TYPE.TEXT_BOLD,
              data: [
                {
                  id: 10,
                  text: `${toPrecision(
                    result?.[KEYS.POWER]?.[KEYS.RIGHT_SIDE]?.exAbs ?? '-',
                    1
                  )} / ${toPrecision(result?.[KEYS.POWER]?.[KEYS.RIGHT_SIDE]?.exRel ?? '-', 2)}`
                },
                {
                  id: 11,
                  text: `${toPrecision(
                    result?.[KEYS.POWER]?.[KEYS.LEFT_SIDE]?.exAbs ?? '-',
                    1
                  )} / ${toPrecision(result?.[KEYS.POWER]?.[KEYS.LEFT_SIDE]?.exRel ?? '-', 2)}`
                },
                {
                  id: 12,
                  text: `${toPrecision(
                    result?.[KEYS.POWER]?.[KEYS.MEAN_VALUE]?.exAbs ?? '-',
                    1
                  )} (${toPrecision(
                    result?.[KEYS.POWER]?.[KEYS.MEAN_VALUE]?.exRatio ?? '-',
                    2
                  )}) / ${toPrecision(result?.[KEYS.POWER]?.[KEYS.MEAN_VALUE]?.exRel ?? '-', 2)}`
                }
              ]
            }
          },
          {
            id: 13,
            special: {
              width: 150
            },
            header: {
              type: HEADER_TYPE.TEXT,
              data: {
                title: 'Сгибание/разгибание'
              }
            },
            body: {
              type: CELL_TYPE.TEXT_BOLD,
              data: [
                {
                  id: 14,
                  text: `${toPrecision(
                    result?.[KEYS.POWER]?.[KEYS.RIGHT_SIDE]?.flexExRatio ?? '-',
                    2
                  )}`
                },
                {
                  id: 15,
                  text: `${toPrecision(
                    result?.[KEYS.POWER]?.[KEYS.LEFT_SIDE]?.flexExRatio ?? '-',
                    2
                  )}`
                },
                {
                  id: 16,
                  text: `${toPrecision(
                    result?.[KEYS.POWER]?.[KEYS.MEAN_VALUE]?.flexExRatio ?? '-',
                    2
                  )}`
                }
              ]
            }
          }
        ]
      };

      return data;
    }
  );

export const makeSelectChartData = key =>
  createSelector(
    selectResultsByRange,
    selectCurrentDate,
    (resultsByRange, currentDate) => {
      const data = [
        {
          id: KEYS.RIGHT,
          data: []
        },
        {
          id: KEYS.LEFT,
          data: []
        }
      ];
      let result = resultsByRange.filter(({ id }) => id === currentDate);

      if (result.length === 0) {
        return withDataHashKey(data);
      }

      result = result[0][key];

      result.forEach(({ deg, left, right }) => {
        if (right !== 'NaN') {
          data[0].data.push({
            x: toPrecision(deg, 1),
            y: toPrecision(right, 1)
          });
        }

        if (left !== 'NaN') {
          data[1].data.push({
            x: toPrecision(deg, 1),
            y: toPrecision(left, 1)
          });
        }
      });

      return withDataHashKey(data);
    }
  );
