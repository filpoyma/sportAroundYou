import PropTypes from 'prop-types';
import React from 'react';
import cornerArc from 'svg-arc-corners';

import { SIZE } from '../constants';

const Arc = ({ ratio, color, id }) => {
  const val = 180 * ratio - 90;

  return (
    <>
      <path
        key={`arc_fon_${id}`}
        d={cornerArc(
          [90, 80],
          SIZE.RADIUS + 1,
          -90,
          val + 2,
          SIZE.THICKNESS + 2,
          (SIZE.THICKNESS + 2) / 2
        )}
        fill="#FFFFFF"
      />
      <path
        key={`arc_main_${id}`}
        d={cornerArc([90, 80], SIZE.RADIUS, -90, val, SIZE.THICKNESS, SIZE.THICKNESS / 2)}
        fill={color}
      />
    </>
  );
};

Arc.propTypes = {
  ratio: PropTypes.number.isRequired,
  color: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

Arc.defaultProps = {
  color: 'red'
};

Arc.displayName = 'SpeedopmeterChartComponentArcElement';

export default Arc;
