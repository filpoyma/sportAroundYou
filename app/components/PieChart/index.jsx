import { ResponsivePie } from '@nivo/pie';
import PropTypes from 'prop-types';
import React from 'react';

import { hashMemo } from '@/utils/hashData';
import injectStyles from '@/utils/injectStyles';
import { COLORS, NIVO_CHART_THEME } from '@/utils/styleConstants';

import styles from './styles';

const PieChart = ({
  className,
  data,
  isInteractive,
  slicesColor,
  totalLabel,
  totalValue,
  theme,
  colors,
  radialLabelsTextColor,
  radialLabelsLinkColor
}) => (
  <div className={className}>
    <ResponsivePie
      data={data}
      margin={{ top: 30, bottom: 30 }}
      innerRadius={0.6}
      padAngle={0.7}
      cornerRadius={0}
      radialLabel={item => `${item.label.toUpperCase()} ${item.value}c`}
      colors={colors}
      radialLabelsTextColor={radialLabelsTextColor}
      radialLabelsLinkColor={radialLabelsLinkColor}
      theme={theme}
      animate={false}
      radialLabelsLinkHorizontalLength={10}
      enableSlicesLabels={false}
      slicesLabelsTextColor={slicesColor}
      isInteractive={isInteractive}
    />
    {totalValue && (
      <div data-total>
        <div>
          <p>{totalValue}</p>
          {totalLabel && <span>{totalLabel}</span>}
        </div>
      </div>
    )}
  </div>
);

PieChart.propTypes = {
  colors: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
  className: PropTypes.string.isRequired,
  theme: PropTypes.object,
  // Used by StyledComponent
  height: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  data: PropTypes.array,
  isInteractive: PropTypes.bool,
  slicesColor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  totalLabel: PropTypes.string,
  totalValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  radialLabelsTextColor: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  radialLabelsLinkColor: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};

PieChart.defaultProps = {
  colors: [COLORS.CHARTS.PRIMARY],
  theme: { NIVO_CHART_THEME },
  data: [],
  height: '300px',
  isInteractive: true,
  slicesColor: '#FFFFFF',
  totalLabel: '',
  totalValue: '',
  radialLabelsTextColor: { NIVO_CHART_THEME },
  radialLabelsLinkColor: { NIVO_CHART_THEME }
};

PieChart.displayName = 'PieChartComponent';

PieChart.whyDidYouRender = true;

export default injectStyles(hashMemo(PieChart), styles);
