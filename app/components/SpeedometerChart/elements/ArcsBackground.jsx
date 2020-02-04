import PropTypes from 'prop-types';
import React from 'react';

import { COLOR_TYPE, THEME, TYPE } from '../constants';
import Arc from './Arc';
import Mark from './Mark';

const ArcsBackground = ({ minValue, maxValue, value, type, markers }) => {
  let theme = [...THEME[type]];
  if (markers.length === 0) theme = THEME.WITHOUT_MARKERS;

  const pointsFormed = [
    { value },
    ...markers.map(marker => {
      if (typeof marker === 'object' && marker.value) return marker;
      return { value: marker };
    })
  ];

  const pointsSorted = pointsFormed.sort((a, b) => b.value - a.value);
  const color = {
    type: value === maxValue ? COLOR_TYPE.SATURATED : COLOR_TYPE.DIM,
    number: 0
  };

  const calculateRate = X => {
    const ratio = (X - minValue) / (maxValue - minValue);
    return ratio;
  };

  return (
    <>
      <Arc key="arc_max" ratio={1} color={theme[color.number][color.type]} id={0} value />
      {pointsSorted.map((point, idx) => {
        const { value: val, label } = point;

        if (val !== value && !idx) color.number += 1;
        if (idx && val !== value) color.number += 1;
        if (val === value) color.type = COLOR_TYPE.SATURATED;

        return (
          <>
            <Arc
              key={`arc_${val}`}
              ratio={calculateRate(val)}
              color={theme[color.number]?.[color.type]}
              id={idx + 1}
              value
            />
            <Mark
              key={`mark_${val}`}
              ratio={calculateRate(val)}
              type={val === value ? TYPE.MAIN : TYPE.RANGE}
              label={label || val}
            />
          </>
        );
      })}
    </>
  );
};

ArcsBackground.propTypes = {
  minValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  maxValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  type: PropTypes.string,
  markers: PropTypes.array
};

// структура markers
//  [number_1, number_2]  или
//  [
//   { value: number_1, label: 'number or string' },
//   { value: number_2, label: 'number or string' }
//  ]

ArcsBackground.defaultProps = {
  type: TYPE.NORMAL,
  markers: []
};

ArcsBackground.displayName = 'SpeedopmeterChartComponentArcsBackgroundElement';

export default ArcsBackground;
