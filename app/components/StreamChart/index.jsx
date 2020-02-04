import { ResponsiveStream } from '@nivo/stream';
import PropTypes from 'prop-types';
import React from 'react';

import { hashMemo } from '@/utils/hashData';
import injectStyles from '@/utils/injectStyles';

// import { COLORS, NIVO_CHART_THEME } from '@/utils/styleConstants';
import styles from './styles';

const data = [
  {
    Raoul: 198,
    Josiane: 142,
    Marcel: 56,
    René: 110,
    Paul: 133,
    Jacques: 38
  },
  {
    Raoul: 86,
    Josiane: 197,
    Marcel: 78,
    René: 187,
    Paul: 134,
    Jacques: 65
  },
  {
    Raoul: 71,
    Josiane: 195,
    Marcel: 134,
    René: 159,
    Paul: 110,
    Jacques: 75
  },
  {
    Raoul: 28,
    Josiane: 65,
    Marcel: 127,
    René: 142,
    Paul: 196,
    Jacques: 80
  },
  {
    Raoul: 58,
    Josiane: 63,
    Marcel: 153,
    René: 108,
    Paul: 76,
    Jacques: 37
  },
  {
    Raoul: 43,
    Josiane: 175,
    Marcel: 18,
    René: 70,
    Paul: 77,
    Jacques: 172
  },
  {
    Raoul: 159,
    Josiane: 50,
    Marcel: 84,
    René: 88,
    Paul: 171,
    Jacques: 123
  },
  {
    Raoul: 188,
    Josiane: 37,
    Marcel: 155,
    René: 67,
    Paul: 170,
    Jacques: 155
  },
  {
    Raoul: 62,
    Josiane: 85,
    Marcel: 89,
    René: 199,
    Paul: 43,
    Jacques: 150
  }
];

const Stream = ({ className }) => (
  <div className={className}>
    <ResponsiveStream
      data={data}
      keys={['Raoul', 'Josiane', 'Marcel', 'René', 'Paul', 'Jacques']}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendOffset: 36
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendOffset: -40
      }}
      offsetType="silhouette"
      colors={{ scheme: 'nivo' }}
      fillOpacity={0.85}
      borderColor={{ theme: 'background' }}
    />
  </div>
);

Stream.propTypes = {
  // colors: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
  className: PropTypes.string.isRequired,
  // theme: PropTypes.object,
  // Used by StyledComponent
  height: PropTypes.string // eslint-disable-line react/no-unused-prop-types
  // data: PropTypes.array,
  // isInteractive: PropTypes.bool,
  // slicesColor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  // totalLabel: PropTypes.string,
  // totalValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // radialLabelsTextColor: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  // radialLabelsLinkColor: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};

Stream.defaultProps = {
  // colors: [COLORS.CHARTS.PRIMARY],
  // theme: { NIVO_CHART_THEME },
  // data: [],
  height: '300px'
  // isInteractive: true,
  // slicesColor: '#FFFFFF',
  // totalLabel: '',
  // totalValue: '',
  // radialLabelsTextColor: { NIVO_CHART_THEME },
  // radialLabelsLinkColor: { NIVO_CHART_THEME }
};

Stream.displayName = 'StreamChartComponent';

// StreamChart.whyDidYouRender = true;

export default injectStyles(hashMemo(Stream), styles);
