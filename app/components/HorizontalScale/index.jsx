/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import React from 'react';

import injectStyles from '@/utils/injectStyles';

import { INTERVALS, TYPE } from './constants';
import styles from './styles';

const HorizontalScale = ({ className, minValue, maxValue, value, maximum, markers, type }) => {
  const delta = maxValue - minValue;
  const scaleValue = ((value - minValue) / delta) * 100;
  // eslint-disable-next-line no-param-reassign
  if (value >= maxValue) maxValue = value;
  // eslint-disable-next-line no-param-reassign
  if (value <= minValue) minValue = value;

  const cuttoffs = () => {
    const { spacing, caption } = markers;
    const firstPoint =
      minValue % spacing === 0 ? minValue : minValue + spacing - (minValue % spacing);
    const cuttsArray = [];
    const stepInPercent = (spacing / delta) * 100;
    const firstPointInPercent = (firstPoint - minValue) / delta;

    for (let i = firstPoint, n = 0; i <= maxValue; i += spacing, n += 1) {
      const point = { xPos: firstPointInPercent + n * stepInPercent };
      if (caption && n % caption === 0) point.label = i;
      cuttsArray.push(point);
    }

    return cuttsArray;
  };

  const intervals = () => {
    const intervalsByType = INTERVALS[type[0]][type[1]];
    const preparedIntervals = [];
    const LevelKeys = Object.keys(intervalsByType);

    for (let i = 0; i < LevelKeys.length; i += 1) {
      const startInterval = intervalsByType[LevelKeys[i]][0];
      const stopInterval = intervalsByType[LevelKeys[i]][1];

      const newInterval = { label: LevelKeys[i] };
      newInterval.startPos = ((startInterval - minValue) / delta) * 100;
      newInterval.width = ((stopInterval - startInterval) / delta) * 100;
      preparedIntervals.push(newInterval);
    }

    return preparedIntervals;
  };

  return (
    <div className={className}>
      <div>
        <div style={{ width: `${scaleValue}%` }}></div>
        {cuttoffs().map(marker => (
          <div className="cuttoffs" style={{ left: `${marker.xPos}%` }}></div>
        ))}
        {intervals().map(interval => (
          <div
            className="interval"
            // style={{ left: `${interval.startPos}%`, width: `${interval.width}%` }}
            style={{ left: `${interval.startPos}%` }}
          />
        ))}
      </div>

      <div>
        {cuttoffs().map(marker => (
          <p className="cuttoffs" style={{ left: `${marker.xPos}%` }}>
            {marker.label !== undefined ? marker.label : ''}
          </p>
        ))}
      </div>

      <div>
        {intervals().map(interval => (
          <p className="interval" style={{ left: `${interval.startPos}%` }}>
            {interval.label}
          </p>
        ))}
      </div>

      <div style={{ left: `${scaleValue}%` }}>
        <p>{value}</p>
        <p>результат</p>
      </div>
      <div>
        <p>{maximum}</p>
        <p>{'наибольшее\nзарегистрированное\nзначение'}</p>
      </div>
    </div>
  );
};

HorizontalScale.propTypes = {
  className: PropTypes.string.isRequired,
  markers: PropTypes.shape({
    spacing: PropTypes.number,
    caption: PropTypes.number
  }),
  type: PropTypes.array,
  // data: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     title: PropTypes.string.isRequired,
  //     value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  //     id: PropTypes.number.isRequired
  //   })
  // ).isRequired,
  // // Used by StyledComponents
  height: PropTypes.number // eslint-disable-line react/no-unused-prop-types
};

HorizontalScale.defaultProps = {
  height: 92,
  markers: { spacing: 1, caption: 2 },
  type: [TYPE.OMG, TYPE.MAN]
};

HorizontalScale.displayName = 'HorizontalScaleComponent';

export default injectStyles(HorizontalScale, styles);
