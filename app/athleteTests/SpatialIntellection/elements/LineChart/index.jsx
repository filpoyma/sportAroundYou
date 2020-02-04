import { ResponsiveLine } from '@nivo/line';
import PropTypes from 'prop-types';
import React from 'react';

import { hashMemo } from '@/utils/hashData';
import injectStyles from '@/utils/injectStyles';
import { NIVO_CHART_THEME } from '@/utils/styleConstants';

import LineChartTooltip from './elements/LineChartTooltip';
import styles from './styles';

const LineChart = ({ className, data, units }) => (
  <div className={className}>
    <ResponsiveLine
      data={data}
      margin={{ top: 20, right: 15, bottom: 50, left: 30 }}
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
        legend: 'Время, мм:сс',
        legendOffset: 40,
        legendPosition: 'middle',
        tickValues: 3
      }}
      axisLeft={{
        legend: '',
        legendOffset: -43,
        legendPosition: 'middle',
        orient: 'left',
        tickPadding: 8,
        tickRotation: 0,
        tickSize: 0
      }}
      colors={item => item.color}
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
    <div>
      <span>Производительность</span>
      <span>Точность</span>
    </div>
  </div>
);

LineChart.propTypes = {
  className: PropTypes.string.isRequired,
  // Used by StyledComponent
  height: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  data: PropTypes.array,
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
