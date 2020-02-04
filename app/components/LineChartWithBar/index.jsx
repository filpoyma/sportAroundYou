import { Axes } from '@nivo/axes';
import { ResponsiveLine } from '@nivo/line';
import { computeXYScalesForSeries } from '@nivo/scales';
import PropTypes from 'prop-types';
import React from 'react';

import { hashMemo } from '@/utils/hashData';
import injectStyles from '@/utils/injectStyles';
import { COLORS, NIVO_CHART_THEME } from '@/utils/styleConstants';

import LineChartWithBarTooltip from './elements/LineChartWithBarTooltip';
import styles from './styles';

/* eslint-disable react/prop-types */

const LactateAxis = ({ data, innerWidth, innerHeight }) => {
  const { xScale, yScale } = computeXYScalesForSeries(
    [data[0]],
    { type: 'point' },
    {
      type: 'linear',
      min: 0,
      max: data[0].y2Max
    },
    innerWidth,
    innerHeight
  );

  return (
    <Axes
      key="custom_axis_lactate"
      xScale={xScale}
      yScale={yScale}
      width={innerWidth}
      height={innerHeight}
      right={{
        legend: data[0].legend2,
        legendOffset: 43,
        legendPosition: 'middle',
        orient: 'left',
        tickSize: 5
      }}
    />
  );
};

/* eslint-disable react/prop-types */

const BarLayer = ({ data, xScale }) => (
  <svg style={{ font: '13px sans-serif', color: 'white' }} xmlns="http://www.w3.org/2000/svg">
    {data[0].barData.map(value => {
      const yBottom = 205; // отступ до нижней оси
      const YHeightMax = 100; // максимальная высота столбика
      const valueMax = data[0].y2Max / 2; // значение максимального столбца

      const height = (YHeightMax * value.value) / valueMax;
      const realY = yBottom - height;

      const Answer = [];
      Answer.push(
        <rect
          key={`${value.x}bar`}
          x={xScale(value.x) - 50}
          y={realY}
          width={100}
          height={height}
          fill={COLORS.CHARTS.HISTOGRAM.BLUE}
        />
      );
      Answer.push(
        <text 
          key={`${value.x}bar text`} 
          x={xScale(value.x) - (value.value > 99 ? 15 : 9)} 
          y={realY + height / 2}
          >
          {' '}
          {value.value}{' '}
        </text>
      );

      return Answer;
    })}
  </svg>
);

const LineChartWithBar = ({ className, data, legend, units, chartColor }) => (
  <div className={className}>
    { data.length && <ResponsiveLine
      data={data}
      margin={{ top: 20, right: 50, bottom: 50, left: 50 }}
      // xFormat="time:%d.%m.%Y"
      xScale={{
        type: 'point',
        min: 'auto',
        max: 'auto'
        // format: '%Y-%m-%dT%H:%M:%S',
        // precision: 'minute'
      }}
      yFormat={value => (units ? `${value} ${units}` : value)}
      yScale={{
        type: 'linear',
        stacked: true,
        min: data[0].yMin,
        max: data[0].yMax
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5, // размер палка
        tickPadding: 12, // отступ
        tickValues: 4,
        legend: 'Нагрузка, кг',
        legendOffset: 40,
        legendPosition: 'middle'
      }}
      axisLeft={{
        legend: `${legend}, ${units}`,
        legendOffset: -43,
        legendPosition: 'middle',
        orient: 'left',
        tickPadding: 8,
        tickRotation: 0,
        tickSize: 0,

        tickValues: 8
      }}
      layers={[
        BarLayer,
        'markers',
        'axes',
        LactateAxis,
        'areas',
        'crosshair',
        'lines',
        'points',
        'slices',
        'mesh',
        'legends'
      ]}
      colors={[chartColor]}
      pointSize={8}
      pointColor="white"
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh
      enableSlices={false}
      theme={NIVO_CHART_THEME}
      animate={false}
      tooltip={LineChartWithBarTooltip}
    />}
  </div>
);

LineChartWithBar.propTypes = {
  className: PropTypes.string.isRequired,
  // Used by StyledComponent
  height: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  data: PropTypes.array,
  legend: PropTypes.string.isRequired,
  units: PropTypes.string,
  chartColor: PropTypes.string
};

LineChartWithBar.defaultProps = {
  data: [],
  height: '300px',
  units: '',
  chartColor: COLORS.CHARTS.PRIMARY
};

LineChartWithBar.displayName = 'LineChartWithBarComponent';

LineChartWithBar.whyDidYouRender = true;

export default injectStyles(hashMemo(LineChartWithBar), styles);
