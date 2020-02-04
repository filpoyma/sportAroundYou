import { isEmpty } from 'lodash';
import { createSelector } from 'reselect';

import { CELL_TYPE, HEADER_TYPE } from '@/components/Table/constants';
import { toLocaleDate, toPrecision } from '@/utils/formatData';
import { withDataHashKey } from '@/utils/hashData';
import { ICONS_SVG } from '@/utils/iconsSvg';

import {
  SPIROERGOMETRY_CHART_COLORS,
  SPIROERGOMETRY_CHART_ID,
  STATE_KEY,
  TEST_TYPE
} from './constants';
import { initialState } from './reducer';

export const selectSpiroergometry = state =>
  state[STATE_KEY.MAIN]?.[STATE_KEY.SPIROERGOMETRY] || initialState[STATE_KEY.SPIROERGOMETRY];

const selectSpiroergometryByRange = state =>
  state[STATE_KEY.MAIN]?.[STATE_KEY.SPIROERGOMETRY_BY_RANGE] ||
  initialState[STATE_KEY.SPIROERGOMETRY_BY_RANGE];

const selectStatus = state => state[STATE_KEY.MAIN]?.status || initialState.status;

export const makeSelectStatus = key =>
  createSelector(
    selectStatus,
    status => status[key]
  );

export const makeSelectSummaryChart = () =>
  createSelector(
    selectSpiroergometryByRange,
    spiroergometryByRange => {
      const data = {
        [SPIROERGOMETRY_CHART_ID.HR]: [],
        [SPIROERGOMETRY_CHART_ID.CO2STPD]: [],
        [SPIROERGOMETRY_CHART_ID.VO2STPD]: [],
        [SPIROERGOMETRY_CHART_ID.LACTATE]: []
      };
      let hrMax = 0;
      let gasMax = 0;
      let lactateMax = 0;

      spiroergometryByRange?.[0]?.generalPlot?.forEach(({ time, hr, co2STPD, vo2STPD, la }) => {
        data[SPIROERGOMETRY_CHART_ID.HR].push({
          x: time,
          y: hr,
          title: 'ЧСС',
          unit: 'уд/мин'
        });

        data[SPIROERGOMETRY_CHART_ID.CO2STPD].push({
          x: time,
          y: co2STPD,
          initialValue: co2STPD.toFixed(2),
          title: `V'CO2`,
          unit: 'л/мин'
        });

        data[SPIROERGOMETRY_CHART_ID.VO2STPD].push({
          x: time,
          y: vo2STPD,
          initialValue: vo2STPD.toFixed(2),
          title: `V'O2`,
          unit: 'л/мин'
        });

        if (hrMax < hr) {
          hrMax = hr;
        }

        if (gasMax < vo2STPD) {
          gasMax = vo2STPD;
        }

        if (gasMax < co2STPD) {
          gasMax = co2STPD;
        }

        if (la !== 'NaN') {
          data[SPIROERGOMETRY_CHART_ID.LACTATE].push({
            x: time,
            y: la,
            initialValue: la.toFixed(2),
            title: 'Лактат',
            unit: 'ммоль/мин'
          });

          if (lactateMax < la) {
            lactateMax = la;
          }
        }
      });

      // Normalize data
      const gasToHrRatio = hrMax / gasMax;
      const lactateToHrRatio = hrMax / lactateMax;
      let i;

      for (i = 0; i < data[SPIROERGOMETRY_CHART_ID.VO2STPD].length; i += 1) {
        data[SPIROERGOMETRY_CHART_ID.VO2STPD][i].y *= gasToHrRatio;
        data[SPIROERGOMETRY_CHART_ID.CO2STPD][i].y *= gasToHrRatio;

        if (data[SPIROERGOMETRY_CHART_ID.LACTATE][i]) {
          data[SPIROERGOMETRY_CHART_ID.LACTATE][i].y *= lactateToHrRatio;
        }
      }

      const maxValueOffset = 1.025;

      return withDataHashKey([
        {
          id: SPIROERGOMETRY_CHART_ID.HR,
          color: SPIROERGOMETRY_CHART_COLORS.HR,
          data: data[SPIROERGOMETRY_CHART_ID.HR],
          yMax: hrMax * maxValueOffset
        },
        {
          id: SPIROERGOMETRY_CHART_ID.VO2STPD,
          color: SPIROERGOMETRY_CHART_COLORS.VO2STPD,
          data: data[SPIROERGOMETRY_CHART_ID.VO2STPD],
          yMax: gasMax * maxValueOffset
        },
        {
          id: SPIROERGOMETRY_CHART_ID.CO2STPD,
          color: SPIROERGOMETRY_CHART_COLORS.CO2STPD,
          data: data[SPIROERGOMETRY_CHART_ID.CO2STPD]
        },
        {
          id: SPIROERGOMETRY_CHART_ID.LACTATE,
          color: SPIROERGOMETRY_CHART_COLORS.LACTATE,
          data: data[SPIROERGOMETRY_CHART_ID.LACTATE],
          yMax: lactateMax * maxValueOffset
        }
      ]);
    }
  );

export const makeSelectPlates = () =>
  createSelector(
    selectSpiroergometryByRange,
    spiroergometryByRange => {
      const spiroergometry = spiroergometryByRange?.[0];
      if (!spiroergometry) return [];

      const maxVentilation = toPrecision(spiroergometry?.maxVentilation, 1) ?? 'НД'; // МАКС ВЕНТИЛЯЦИЯ
      const maxHr = spiroergometry?.maxHr ?? 'НД'; // МАКС ЧСС
      const refusalTime = spiroergometry?.refusalTime ?? 'НД'; // ВРЕМЯ ОТКАЗА

      return [
        {
          id: 0,
          title: 'Макс. вентиляция, л/мин',
          value: maxVentilation
        },
        {
          id: 1,
          title: 'Макс. ЧСС, уд/мин',
          value: maxHr
        },
        {
          id: 2,
          title: 'Время отказа',
          value: refusalTime
        }
      ];
    }
  );

export const makeSelectSummaryTable = () =>
  createSelector(
    selectSpiroergometryByRange,
    spiroergometryByRange => {
      const spiroergometry = spiroergometryByRange?.[0];

      if (!spiroergometry) return {};

      const vo2MpkRel = toPrecision(spiroergometry?.vo2MpkRel, 1) ?? 'НД'; // ОТНОСИТЕЛЬНО МПК
      const vo2MpkAbs = toPrecision(spiroergometry?.vo2MpkAbs, 1) ?? 'НД'; // АСБОЛЮТНО МПК

      const vo2PanoRel = toPrecision(spiroergometry?.vo2PanoRel, 1) ?? 'НД'; // ОТНОСИТЕЛЬНО ПАНО
      const vo2PanoAbs = toPrecision(spiroergometry?.vo2PanoAbs, 1) ?? 'НД'; // АБСОЛЮТНО ПАНО
      const vo2PanoPercentMpk = toPrecision(spiroergometry?.vo2PanoPercentMpk, 1) ?? 'НД'; // ОТ МПК

      const hrMpk = spiroergometry?.hrMpk ?? 'НД'; // ЧСС МПК
      const hrPano = spiroergometry?.hrPano ?? 'НД'; // ЧСС ПАНО

      const hrPanoPercentMpk = toPrecision(spiroergometry?.hrPanoPercentMpk, 1) ?? 'НД'; // ОТ МПК
      const hrPanoPercentMax = toPrecision(spiroergometry?.hrPanoPercentMax, 1) ?? 'НД'; // ОТ МАКС

      const speedMpk = spiroergometry?.speedMpk ?? 'НД'; // СКОРОСТЬ МПК
      const paceMpk = spiroergometry?.paceMpk ?? 'НД'; // ТЕМП МПК

      const speedPano = spiroergometry?.speedPano ?? 'НД'; // СКОРОСТЬ ПАНО
      const pacePano = spiroergometry?.pacePano ?? 'НД'; // ТЕМП ПАНО

      const ventilationMpk = spiroergometry?.ventilationMpk ?? 'НД'; // ВЕНТИЛЯЦИЯ МПК
      const ventilationPano = spiroergometry?.ventilationPano ?? 'НД'; // ВЕНТИЛЯЦИЯ ПАНО

      const testType = spiroergometry?.testType || null;

      const powerMpkAbs = spiroergometry?.powerMpkAbs ?? 'НД';
      const powerMpkRel = toPrecision(spiroergometry?.powerMpkRel, 1) ?? 'НД';
      const powerPanoAbs = spiroergometry?.powerPanoAbs ?? 'НД';
      const powerPanoRel = toPrecision(spiroergometry?.powerPanoRel, 1) ?? 'НД';

      const columns = [
        {
          id: 1,
          special: {
            width: 60
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
            data: [
              {
                id: 2,
                text: 'МПК'
              },
              {
                id: 3,
                text: 'ПАНО'
              }
            ]
          }
        },
        {
          id: 4,
          special: {
            width: 110
          },
          header: {
            type: HEADER_TYPE.ICON_DESCRIPTION,
            data: {
              title: 'V’O2/кг',
              titleSecondLine: 'мл/мин/кг',
              icon: ICONS_SVG.OXYGEN
            }
          },
          body: {
            type: CELL_TYPE.TEXT_DOUBLE,
            data: [
              {
                id: 6,
                text: `${vo2MpkRel} / ${vo2MpkAbs}`,
                textSecondLine: ''
              },
              {
                id: 7,
                text: `${vo2PanoRel} / ${vo2PanoAbs}`,
                textSecondLine: `${vo2PanoPercentMpk}% от МПК`
              }
            ]
          }
        },
        {
          id: 8,
          special: {
            width: 95
          },
          header: {
            type: HEADER_TYPE.ICON_DESCRIPTION,
            data: {
              title: 'ЧСС,',
              titleSecondLine: 'уд / мин',
              icon: ICONS_SVG.HEART
            }
          },
          body: {
            type: CELL_TYPE.TEXT_TRIPLE,
            data: [
              {
                id: 9,
                text: hrMpk,
                textSecondLine: '',
                textTripleLine: ''
              },
              {
                id: 10,
                text: hrPano,
                textSecondLine: `${hrPanoPercentMpk}% от МПК`,
                textTripleLine: `${hrPanoPercentMax}% от max`
              }
            ]
          }
        }
      ];

      if (testType === TEST_TYPE.CYCLE) {
        columns.push({
          id: 11,
          special: {},
          header: {
            type: HEADER_TYPE.ICON_DESCRIPTION,
            data: {
              title: 'МОЩНОСТЬ,',
              titleSecondLine: 'вт и вт/кг',
              icon: ICONS_SVG.POWER
            }
          },
          body: {
            type: CELL_TYPE.TEXT_BOLD,
            data: [
              {
                id: 12,
                text: `${powerMpkAbs} / ${powerMpkRel}`
              },
              {
                id: 13,
                text: `${powerPanoAbs} / ${powerPanoRel}`
              }
            ]
          }
        });
      } else {
        columns.push({
          special: {
            id: 14,
            special: {},
            header: {
              type: HEADER_TYPE.ICON_DESCRIPTION,
              data: {
                title: 'СКОРОСТЬ/ТЕМП,',
                titleSecondLine: 'км/ч и мин/км',
                icon: ICONS_SVG.SPEED
              }
            },
            body: {
              type: CELL_TYPE.TEXT_BOLD,
              data: [
                {
                  id: 15,
                  text: `${speedMpk} / ${paceMpk}`
                },
                {
                  id: 16,
                  text: `${speedPano} / ${pacePano}`
                }
              ]
            }
          }
        });
      }

      columns.push({
        id: 17,
        special: {},
        header: {
          type: HEADER_TYPE.ICON_DESCRIPTION,
          data: {
            title: 'ВЕНТИЛЯЦИЯ,',
            titleSecondLine: 'л/мин',
            icon: ICONS_SVG.LUNGS
          }
        },
        body: {
          type: CELL_TYPE.TEXT_BOLD,
          data: [
            {
              id: 18,
              text: ventilationMpk
            },
            {
              id: 19,
              text: ventilationPano
            }
          ]
        }
      });

      return {
        headerHeight: 70,
        cellsHeight: 80,
        columns
      };
    }
  );

export const makeSelectGeneralTable = () =>
  createSelector(
    selectSpiroergometryByRange,
    spiroergometryByRange => {
      const spiroergometry = spiroergometryByRange?.[0];

      if (!spiroergometry) return {};

      const timeData = [];
      const speedData = [];
      const hrData = [];
      const laData = [];
      const powerData = [];

      const { testType } = spiroergometry;

      if (spiroergometry.zoneTable) {
        for (let i = 0; i < spiroergometry.zoneTable.length; i += 1) {
          timeData.push({
            id: `genT_time${i}`,
            text: spiroergometry.zoneTable[i].pace
          });
          speedData.push({
            id: `genT_speed${i}`,
            text: spiroergometry.zoneTable[i].speed
          });
          hrData.push({
            id: `genT_hr${i}`,
            text: spiroergometry.zoneTable[i].hr
          });
          laData.push({
            id: `genT_la${i}`,
            text: spiroergometry.zoneTable[i].percent
          });
          powerData.push({
            id: `genT_power${i}`,
            text: spiroergometry.zoneTable[i].power
          });
        }
      }

      const columns = [
        {
          id: 20,
          special: {},
          header: {
            type: HEADER_TYPE.ICON_DESCRIPTION,
            data: {
              title: 'ВРЕМЯ,',
              titleSecondLine: 'мин',
              icon: ICONS_SVG.TIME
            }
          },
          body: {
            type: CELL_TYPE.TEXT,
            data: timeData
          }
        },
        {
          id: 21,
          special: {},
          header: {
            type: HEADER_TYPE.ICON_DESCRIPTION,
            data: {
              title: 'ЛАКТАТ,',
              titleSecondLine: 'ммоль / л',
              icon: ICONS_SVG.LAKTOSE
            }
          },
          body: {
            type: CELL_TYPE.TEXT,
            data: laData
          }
        },
        {
          id: 22,
          special: {},
          header: {
            type: HEADER_TYPE.ICON_DESCRIPTION,
            data: {
              title: 'ЧСС,',
              titleSecondLine: 'уд / мин',
              icon: ICONS_SVG.HEART
            }
          },
          body: {
            type: CELL_TYPE.TEXT,
            data: hrData
          }
        }
      ];

      if (testType === TEST_TYPE.CYCLE) {
        columns.push({
          id: 24,
          special: {},
          header: {
            type: HEADER_TYPE.ICON_DESCRIPTION,
            data: {
              title: 'МОЩНОСТЬ,',
              titleSecondLine: 'вт',
              icon: ICONS_SVG.POWER
            }
          },
          body: {
            type: CELL_TYPE.TEXT,
            data: powerData
          }
        });
      } else {
        columns.push({
          id: 25,
          special: {},
          header: {
            type: HEADER_TYPE.ICON_DESCRIPTION,
            data: {
              title: 'СКОРОСТЬ,',
              titleSecondLine: 'км / ч',
              icon: ICONS_SVG.SPEED
            }
          },
          body: {
            type: CELL_TYPE.TEXT,
            data: speedData
          }
        });
      }

      return {
        headerHeight: 70,
        cellsHeight: 30,
        columns
      };
    }
  );

export const makeSelectZoneTable = () =>
  createSelector(
    selectSpiroergometryByRange,
    spiroergometryByRange => {
      const spiroergometry = spiroergometryByRange?.[0];

      if (!spiroergometry) return {};

      const hrData = [];
      const paceData = [];
      const percentData = [];
      const speedData = [];
      const powerData = [];

      const { testType } = spiroergometry;
      const zoneWidth = testType === TEST_TYPE.CYCLE ? 100 : 80;
      const percentWidth = testType === TEST_TYPE.CYCLE ? 150 : 90;

      if (spiroergometry.zoneTable) {
        for (let i = 0; i < spiroergometry.zoneTable.length; i += 1) {
          hrData.push({
            id: `zonT_hr${i}`,
            text: spiroergometry.zoneTable[i].hr
          });
          paceData.push({
            id: `zonT_pace${i}`,
            text: spiroergometry.zoneTable[i].pace
          });
          percentData.push({
            id: `zonT_perc${i}`,
            text: spiroergometry.zoneTable[i].percent
          });
          speedData.push({
            id: `zonT_speed${i}`,
            text: spiroergometry.zoneTable[i].speed
          });
          powerData.push({
            id: `zonT_power${i}`,
            text: spiroergometry.zoneTable[i].power
          });
        }
      }

      const columns = [
        {
          id: 30,
          special: {
            width: zoneWidth
          },
          header: {
            type: HEADER_TYPE.TWO_TITLES,
            data: {
              title: 'ЗОНЫ',
              titleSecondLine: ' '
            }
          },
          body: {
            type: CELL_TYPE.ZONE,

            data: [
              {
                id: 41,
                number: 1
              },
              {
                id: 42,
                number: 2
              },
              {
                id: 43,
                number: 3
              },
              {
                id: 44,
                number: 4
              },
              {
                id: 45,
                number: 5
              }
            ]
          }
        },

        {
          id: 31,
          special: {
            width: percentWidth
          },
          header: {
            type: HEADER_TYPE.TWO_TITLES,
            data: {
              title: '% от ПАНО',
              titleSecondLine: ' '
            }
          },
          body: {
            type: CELL_TYPE.TEXT,
            data: percentData
          }
        },
        {
          id: 32,
          special: {},
          header: {
            type: HEADER_TYPE.TWO_TITLES,
            data: {
              title: 'ЦЕЛЕВАЯ ЧСС,',
              titleSecondLine: 'уд / мин'
            }
          },
          body: {
            type: CELL_TYPE.TEXT,
            data: hrData
          }
        }
      ];

      if (testType === TEST_TYPE.CYCLE) {
        columns.push({
          id: 33,
          special: {},
          header: {
            type: HEADER_TYPE.TWO_TITLES,
            data: {
              title: 'ЦЕЛЕВАЯ МОЩНОСТЬ,',
              titleSecondLine: 'вт'
            }
          },
          body: {
            type: CELL_TYPE.TEXT,
            data: powerData
          }
        });
      } else {
        columns.push({
          id: 34,
          special: {},
          header: {
            type: HEADER_TYPE.TWO_TITLES,
            data: {
              title: 'ЦЕЛЕВАЯ СКОРОСТЬ,',
              titleSecondLine: 'км / ч'
            }
          },
          body: {
            type: CELL_TYPE.TEXT,
            data: speedData
          }
        });
        columns.push({
          id: 35,
          special: {},
          header: {
            type: HEADER_TYPE.TWO_TITLES,
            data: {
              title: 'ЦЕЛЕВОЙ ТЕМП,',
              titleSecondLine: 'мин / км'
            }
          },
          body: {
            type: CELL_TYPE.TEXT,
            data: paceData
          }
        });
      }

      return {
        headerHeight: 70,
        cellsHeight: 30,
        columns
      };
    }
  );

export const makeSelectDynamic = key =>
  createSelector(
    selectSpiroergometry,
    spiroergometry => {
      const data = [];
      const datesByKey = [];
      const resultsByKey = [];
      spiroergometry.forEach(result => {
        if (typeof result?.[key] === 'number') {
          // datesByKey.push(result.id?.date);
          datesByKey.push(result.testDate);
          resultsByKey.push(result[key]);
        }
      });

      if (resultsByKey?.length > 0) {
        resultsByKey.forEach((result, index) => {
          data.push({
            x: datesByKey[index].slice(0, 19),
            y: Number.parseFloat(result).toFixed(2)
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

export const makeSelectDynamicBySpdPwr = key =>
  createSelector(
    selectSpiroergometry,
    spiroergometry => {
      const data = [];
      spiroergometry.forEach(({ id, generalTable, testType }) => {
        if (!isEmpty(generalTable) && generalTable.length > 1) {
          const chartData = {
            id: id.counter,
            data: []
          };
          const date = toLocaleDate(id.date);

          generalTable.forEach(result => {
            chartData.data.push({
              x: testType === TEST_TYPE.CYCLE ? result.power : result.speed,
              y: result[key],
              date
            });
          });

          data.push(chartData);
        }
      });

      if (isEmpty(data)) {
        return withDataHashKey([
          {
            id: key,
            data,
            yMin: 0,
            yMax: 0
          }
        ]);
      }

      return withDataHashKey(data);
    }
  );
