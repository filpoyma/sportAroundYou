import { ResponsiveBar } from '@nivo/bar';
import PropTypes from 'prop-types';
import React from 'react';

import { hashMemo } from '@/utils/hashData';
import injectStyles from '@/utils/injectStyles';
import { COLORS, NIVO_CHART_THEME } from '@/utils/styleConstants';

import styles from './styles';

const HistogramChart = ({
  className,
  colors,
  data,
  groupMode,
  hideLeftAxis,
  keys,
  label,
  legendKey,
  legendValue,
  margin,
  markers,
  units,
  colorBy
}) => {
  let leftAxis = null;

  if (!hideLeftAxis) {
    leftAxis = {
      legend: `${legendValue}, ${units}`,
      legendOffset: -43,
      legendPosition: 'middle',
      orient: 'left',
      tickPadding: 8,
      tickRotation: 0,
      tickSize: 0
    };
  }

  return (
    <div className={className}>
      <ResponsiveBar
        data={data}
        keys={keys}
        margin={margin}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 8,
          tickRotation: 0,
          legend: legendKey,
          legendOffset: 40,
          legendPosition: 'middle'
        }}
        axisLeft={leftAxis}
        colors={colors}
        colorBy={colorBy}
        pointSize={8}
        pointColor="white"
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh
        markers={markers}
        enableSlices={false}
        theme={NIVO_CHART_THEME}
        animate={false}
        isInteractive={false}
        labelTextColor="#FFFFFF"
        label={label}
        groupMode={groupMode}
      />
    </div>
  );
};

HistogramChart.propTypes = {
  className: PropTypes.string.isRequired,
  colors: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),
  data: PropTypes.array,
  groupMode: PropTypes.string,
  // Used by StyledComponent
  height: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  hideLeftAxis: PropTypes.bool,
  keys: PropTypes.array,
  label: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),
  legendKey: PropTypes.string,
  legendValue: PropTypes.string.isRequired,
  margin: PropTypes.object,
  markers: PropTypes.array,
  units: PropTypes.string,
  colorBy: PropTypes.string
};

HistogramChart.defaultProps = {
  colors: [COLORS.CHARTS.HISTOGRAM.BLUE],
  data: [],
  groupMode: 'stacked',
  colorBy: 'index',
  height: '300px',
  hideLeftAxis: false,
  keys: undefined,
  label: 'value',
  legendKey: '',
  margin: { top: 20, right: 10, bottom: 50, left: 55 },
  markers: [],
  units: ''
};

HistogramChart.displayName = 'HistogramChartComponent';

HistogramChart.whyDidYouRender = true;

export default injectStyles(hashMemo(HistogramChart), styles);
