import PropTypes from 'prop-types';
import React from 'react';

import { hashMemo } from '@/utils/hashData';
import injectStyles from '@/utils/injectStyles';
import { COLORS, NIVO_CHART_THEME } from '@/utils/styleConstants';

import ResponsiveParallelCoordinates from './nivo/ResponsiveParallelCoordinates';
import styles from './styles';

const ParallelCoordinatesChart = ({
  className,
  colors,
  data,
  tooltipKeys,
  tooltipLabels,
  variables
}) => (
  <div className={className}>
    <ResponsiveParallelCoordinates
      data={data}
      variables={variables}
      margin={{ top: 10, right: 20, bottom: 10, left: 40 }}
      lineOpacity={0.9}
      colors={colors}
      theme={NIVO_CHART_THEME}
      tooltipKeys={tooltipKeys}
      tooltipLabels={tooltipLabels}
      axesTicksPosition="before"
      axesPlan="background"
      animate={false}
    />
  </div>
);

ParallelCoordinatesChart.propTypes = {
  colors: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
  className: PropTypes.string.isRequired,
  // Used by StyledComponent
  height: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  data: PropTypes.array,
  tooltipKeys: PropTypes.array,
  tooltipLabels: PropTypes.object,
  variables: PropTypes.array
};

ParallelCoordinatesChart.defaultProps = {
  colors: [COLORS.CHARTS.PRIMARY],
  data: [],
  height: '300px',
  tooltipKeys: [],
  tooltipLabels: {},
  variables: []
};

ParallelCoordinatesChart.displayName = 'ParallelCoordinatesChartComponent';

ParallelCoordinatesChart.whyDidYouRender = true;

export default injectStyles(hashMemo(ParallelCoordinatesChart), styles);
