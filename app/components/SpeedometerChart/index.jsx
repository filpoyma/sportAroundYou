import PropTypes from 'prop-types';
import React from 'react';

import injectStyles from '@/utils/injectStyles';

import { TYPE } from './constants';
import Arcs from './elements/ArcsBackground';
import styles from './styles';

const SpeedometerChart = ({
  className,
  minValue,
  minValueLabel,
  maxValue,
  maxValueLabel,
  value,
  valueLabel,
  type,
  markers
}) => (
  <div className={className}>
    <svg
      width="180"
      height="100"
      viewBox="0 0 180 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Arcs minValue={minValue} maxValue={maxValue} value={value} type={type} markers={markers} />
    </svg>
    <span>{valueLabel || value}</span>
    <div>
      <p>{minValueLabel || minValue.toFixed(1)}</p>
      <p>{maxValueLabel || maxValue.toFixed(1)}</p>
    </div>
  </div>
);

SpeedometerChart.propTypes = {
  className: PropTypes.string.isRequired,
  minValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  minValueLabel: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  maxValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  maxValueLabel: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  valueLabel: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  type: PropTypes.string,
  markers: PropTypes.array
};

// структура markers
//  [number_1, number_2]  или
//  [
//   { value: number_1, label: 'number or string' },
//   { value: number_2, label: 'number or string' }
//  ]

SpeedometerChart.defaultProps = {
  type: TYPE.NORMAL,
  markers: []
};

SpeedometerChart.displayName = 'SpeedopmeterChartComponent';

export default injectStyles(SpeedometerChart, styles);
