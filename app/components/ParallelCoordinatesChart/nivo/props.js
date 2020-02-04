import { ordinalColorsPropType } from '@nivo/colors';
import { lineCurvePropType, themePropType } from '@nivo/core';
import PropTypes from 'prop-types';

const commonVariablePropTypes = {
  key: PropTypes.string.isRequired,
  ticksPosition: PropTypes.oneOf(['before', 'after']),
  tickSize: PropTypes.number,
  tickPadding: PropTypes.number,
  tickRotation: PropTypes.number,
  format: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  legend: PropTypes.node,
  legendPosition: PropTypes.oneOf(['start', 'middle', 'end']),
  legendOffset: PropTypes.number
};

export const commonPropTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  variables: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        ...commonVariablePropTypes,
        key: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['point']).isRequired,
        padding: PropTypes.number,
        values: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
        tickValues: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
      }),
      PropTypes.shape({
        ...commonVariablePropTypes,
        type: PropTypes.oneOf(['linear']).isRequired,
        min: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]),
        max: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]),
        tickValues: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])
      })
    ])
  ).isRequired,
  layout: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
  curve: lineCurvePropType.isRequired,
  lineGenerator: PropTypes.func.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  lineOpacity: PropTypes.number.isRequired,
  axesPlan: PropTypes.oneOf(['foreground', 'background']).isRequired,
  axesTicksPosition: PropTypes.oneOf(['before', 'after']).isRequired,
  colors: ordinalColorsPropType.isRequired,
  theme: themePropType.isRequired,
  tooltipKeys: PropTypes.array.isRequired,
  tooltipLabels: PropTypes.object.isRequired
};

export const commonDefaultProps = {
  layout: 'horizontal',
  curve: 'linear',
  colors: { scheme: 'yellow_orange_red' },
  strokeWidth: 2,
  lineOpacity: 0.35,
  axesPlan: 'foreground',
  axesTicksPosition: 'after'
};
