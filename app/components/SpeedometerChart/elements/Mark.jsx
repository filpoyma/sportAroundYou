import PropTypes from 'prop-types';
import React from 'react';

import { COLOR_TYPE, SIZE, SVG_COLORS, TYPE } from '../constants';

const Mark = ({ ratio, type, label }) => {
  const angle = Math.PI * ratio - Math.PI / 2;

  return (
    <>
      {type !== TYPE.MAIN ? (
        <>
          <ellipse
            cx={90 + Math.sin(angle) * (SIZE.RADIUS - SIZE.THICKNESS / 2)}
            cy={80 - Math.cos(angle) * (SIZE.RADIUS - SIZE.THICKNESS / 2)}
            rx={SIZE.THICKNESS / 3}
            ry={SIZE.THICKNESS / 3}
            fill="white"
          />
          <ellipse
            cx={90 + Math.sin(angle) * (SIZE.RADIUS - SIZE.THICKNESS / 2)}
            cy={80 - Math.cos(angle) * (SIZE.RADIUS - SIZE.THICKNESS / 2)}
            rx={SIZE.THICKNESS / 5}
            ry={SIZE.THICKNESS / 5}
            fill={`${SVG_COLORS.GREY[COLOR_TYPE.SATURATED]}`}
          />
          <text
            x={90 + Math.sin(angle) * (SIZE.RADIUS + 5) + (Math.sin(angle) - 1) * 11.5}
            y={80 - Math.cos(angle) * (SIZE.RADIUS + 5)}
            fill={`${SVG_COLORS.GREY[COLOR_TYPE.SATURATED]}`}
          >
            {label}
          </text>
        </>
      ) : (
        <g transform="translate(43 80)">
          <path
            d="M0.0187285 5.57157L15.7524 0.754769L15.7849 10.281L0.0187285 5.57157Z"
            fill={`${SVG_COLORS.GREY[COLOR_TYPE.SATURATED]}`}
            transform={`rotate(${ratio * 180} 47 0) translate(0 -5.75)`}
          />
        </g>
      )}
    </>
  );
};

Mark.propTypes = {
  ratio: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

Mark.defaultProps = {};

Mark.displayName = 'SpeedopmeterChartComponentMarkElement';

export default Mark;
