import PropTypes from 'prop-types';
import React, { memo } from 'react';

const DotsItemSymbol = ({
  borderColor,
  borderWidth,
  color,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  size
}) => (
  <circle
    r={size / 2}
    fill={color}
    stroke={borderColor}
    strokeWidth={borderWidth}
    onMouseEnter={onMouseEnter}
    onMouseMove={onMouseMove}
    onMouseLeave={onMouseLeave}
  />
);

DotsItemSymbol.propTypes = {
  borderColor: PropTypes.string.isRequired,
  borderWidth: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onMouseMove: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired
};

export default memo(DotsItemSymbol);
