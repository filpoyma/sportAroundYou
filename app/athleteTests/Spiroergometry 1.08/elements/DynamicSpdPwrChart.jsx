import { ResponsiveLine } from '@nivo/line';
import PropTypes from 'prop-types';
import React from 'react';

import LineChartTooltip from '@/components/LineChart/elements/LineChartTooltip';
import styles from '@/components/LineChart/styles';
import { hashMemo } from '@/utils/hashData';
import injectStyles from '@/utils/injectStyles';
import { COLORS, NIVO_CHART_THEME } from '@/utils/styleConstants';

/* eslint-disable react/prop-types */
const Tooltip = ({ point: { data } }) => (
  <LineChartTooltip>
    {data.yFormatted}
    <br />
    {data.xFormatted}
    <br />
    {data?.date}
  </LineChartTooltip>
);
/* eslint-enable react/prop-types */

const DynamicSpdPwrChart = ({ className, data, legend, units }) => (
  <div className={className}>
    <ResponsiveLine
      curve="monotoneX"
      data={data}
      margin={{ top: 20, right: 10, bottom: 50, left: 55 }}
      xScale={{
        type: 'linear',
        stacked: false,
        min: 'auto',
        max: 'auto'
      }}
      xFormat={value => `${value} Вт`}
      yFormat={value => `${value} ${units}`}
      yScale={{
        type: 'linear',
        stacked: false
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 8,
        tickRotation: 0,
        legend: 'Мощность, Вт',
        legendOffset: 40,
        legendPosition: 'middle'
      }}
      axisLeft={{
        legend: `${legend}, ${units}`,
        legendOffset: -43,
        legendPosition: 'middle',
        orient: 'left',
        tickSize: 5
      }}
      colors={[COLORS.CHARTS.PRIMARY]}
      pointSize={8}
      pointColor="white"
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      useMesh
      enableSlices={false}
      theme={NIVO_CHART_THEME}
      animate={false}
      tooltip={Tooltip}
      crosshairType="bottom"
    />
  </div>
);

DynamicSpdPwrChart.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.array,
  legend: PropTypes.string.isRequired,
  units: PropTypes.string.isRequired
};

DynamicSpdPwrChart.defaultProps = {
  data: []
};

DynamicSpdPwrChart.displayName = 'SpiroergometryTestDynamicSpdPwrChartElement';

DynamicSpdPwrChart.whyDidYouRender = true;

export default injectStyles(hashMemo(DynamicSpdPwrChart), styles);
