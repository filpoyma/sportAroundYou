import { ResponsiveLine } from '@nivo/line';
import PropTypes from 'prop-types';
import React from 'react';

import { hashMemo } from '@/utils/hashData';
import injectStyles from '@/utils/injectStyles';
import { COLORS, NIVO_CHART_THEME } from '@/utils/styleConstants';

import LineChartTooltip from './elements/LineChartTooltip';
import styles from './styles';

const LineChart = ({ className, data, legend, units }) => (
  <div className={className}>
    <ResponsiveLine
      data={data}
      margin={{ top: 20, right: 10, bottom: 50, left: 55 }}
      xFormat="time:%d.%m.%Y"
      xScale={{
        type: 'time',
        format: '%Y-%m-%dT%H:%M:%S',
        precision: 'minute'
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
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 8,
        tickRotation: 0,
        legend: 'Дата',
        legendOffset: 40,
        legendPosition: 'middle',
        format: '%d.%m.%Y',
        tickValues: 3
      }}
      axisLeft={{
        legend: `${legend}, ${units}`,
        legendOffset: -43,
        legendPosition: 'middle',
        orient: 'left',
        tickPadding: 8,
        tickRotation: 0,
        tickSize: 0
      }}
      colors={[COLORS.CHARTS.PRIMARY]}
      pointSize={8}
      pointColor="white"
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh
      enableSlices={false}
      theme={NIVO_CHART_THEME}
      animate={false}
      tooltip={LineChartTooltip}
    />
  </div>
);

LineChart.propTypes = {
  className: PropTypes.string.isRequired,
  // Used by StyledComponent
  height: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  data: PropTypes.array,
  legend: PropTypes.string.isRequired,
  units: PropTypes.string
};

LineChart.defaultProps = {
  data: [],
  height: '300px',
  units: ''
};

LineChart.displayName = 'LineChartComponent';

LineChart.whyDidYouRender = true;

export default injectStyles(hashMemo(LineChart), styles);
