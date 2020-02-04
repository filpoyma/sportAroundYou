import PropTypes from 'prop-types';
import React, { memo } from 'react';

import DotsItemSymbol from './DotsItemSymbol';

const DotsItem = ({
  borderColor,
  borderWidth,
  color,
  datum,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  opacity,
  size,
  symbol,
  x,
  y
}) => (
  <g transform={`translate(${x}, ${y})`} opacity={opacity}>
    {React.createElement(symbol, {
      borderColor,
      borderWidth,
      color,
      datum,
      onMouseEnter,
      onMouseLeave,
      onMouseMove,
      size
    })}
  </g>
);

DotsItem.propTypes = {
  borderColor: PropTypes.string.isRequired,
  borderWidth: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  datum: PropTypes.object,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onMouseMove: PropTypes.func.isRequired,
  opacity: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  symbol: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};

DotsItem.defaultProps = {
  datum: {},
  symbol: DotsItemSymbol
};

export default memo(DotsItem);
