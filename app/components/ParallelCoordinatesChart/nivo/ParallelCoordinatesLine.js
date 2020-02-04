import { motionPropTypes, SmartMotion, themePropType } from '@nivo/core';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import DotsItem from './DotsItem';
import ParallelCoordinatesLineTooltip from './ParallelCoordinatesLineTooltip';

export default class ParallelCoordinatesLine extends PureComponent {
  handleActiveMouse = event => {
    const { showTooltip, data, tooltipKeys, tooltipLabels, theme } = this.props;
    showTooltip(
      <ParallelCoordinatesLineTooltip
        data={data}
        keys={tooltipKeys}
        labels={tooltipLabels}
        theme={theme}
      />,
      event
    );
  };

  handleMouseLeave = () => {
    this.props.hideTooltip();
  };

  render() {
    const {
      lineGenerator,
      points,
      strokeWidth,
      color,
      opacity,
      animate,
      motionStiffness,
      motionDamping,
      theme
    } = this.props;

    const pathDefinition = lineGenerator(points);

    if (animate !== true) {
      return (
        <>
          <path
            d={pathDefinition}
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            opacity={opacity}
            fill="none"
            onMouseEnter={this.handleActiveMouse}
            onMouseMove={this.handleActiveMouse}
            onMouseLeave={this.handleMouseLeave}
          />
          {points.map(({ x, y }) => (
            <DotsItem
              key={`${x}_${y}_${color}`}
              x={x}
              y={y}
              opacity={opacity}
              size={8}
              color="#FFFFFF"
              borderWidth={2}
              borderColor={color}
              theme={theme}
              onMouseEnter={this.handleActiveMouse}
              onMouseMove={this.handleActiveMouse}
              onMouseLeave={this.handleMouseLeave}
            />
          ))}
        </>
      );
    }

    const springConfig = {
      stiffness: motionStiffness,
      damping: motionDamping
    };

    return (
      <SmartMotion
        style={spring => ({
          d: spring(pathDefinition, springConfig),
          opacity: spring(opacity, springConfig)
        })}
      >
        {style => (
          <path
            d={style.d}
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            opacity={style.opacity}
            fill="none"
            onMouseEnter={this.handleActiveMouse}
            onMouseMove={this.handleActiveMouse}
            onMouseLeave={this.handleMouseLeave}
          />
        )}
      </SmartMotion>
    );
  }
}

ParallelCoordinatesLine.propTypes = {
  data: PropTypes.object.isRequired,
  lineGenerator: PropTypes.func.isRequired,
  points: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    })
  ).isRequired,
  strokeWidth: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  opacity: PropTypes.number.isRequired,
  showTooltip: PropTypes.func.isRequired,
  hideTooltip: PropTypes.func.isRequired,
  tooltipKeys: PropTypes.array.isRequired,
  tooltipLabels: PropTypes.object.isRequired,
  theme: themePropType.isRequired,
  ...motionPropTypes
};
