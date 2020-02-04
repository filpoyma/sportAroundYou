import { Axis } from '@nivo/axes';
import { Container, SvgWrapper, withMotion } from '@nivo/core';
import React from 'react';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import pure from 'recompose/pure';
import setDisplayName from 'recompose/setDisplayName';

import { commonEnhancers } from './enhance';
import ParallelCoordinatesLayout from './ParallelCoordinatesLayout';
import ParallelCoordinatesLine from './ParallelCoordinatesLine';
import { commonDefaultProps, commonPropTypes } from './props';

export const ParallelCoordinates = props => {
  const {
    data,
    variables,
    layout,
    margin,
    width,
    height,
    outerWidth,
    outerHeight,
    axesPlan,
    axesTicksPosition,
    lineGenerator,
    strokeWidth,
    lineOpacity,
    getLineColor,
    theme,
    animate,
    motionStiffness,
    motionDamping,
    isInteractive,
    tooltipKeys,
    tooltipLabels
  } = props;
  return (
    <ParallelCoordinatesLayout
      width={width}
      height={height}
      data={data}
      variables={variables}
      layout={layout}
    >
      {({ variablesScale, variablesWithScale, dataWithPoints }) => {
        const axes = variablesWithScale.map(variable => (
          <Axis
            key={variable.key}
            axis={layout === 'horizontal' ? 'y' : 'x'}
            length={layout === 'horizontal' ? height : width}
            x={layout === 'horizontal' ? variablesScale(variable.key) : 0}
            y={layout === 'horizontal' ? 0 : variablesScale(variable.key)}
            scale={variable.scale}
            ticksPosition={variable.ticksPosition || axesTicksPosition}
            tickValues={variable.tickValues}
            tickSize={variable.tickSize}
            tickPadding={variable.tickPadding}
            tickRotation={variable.tickRotation}
            format={variable.tickFormat}
            legend={variable.legend}
            legendPosition={variable.legendPosition}
            legendOffset={variable.legendOffset}
          />
        ));
        return (
          <Container
            isInteractive={isInteractive}
            theme={theme}
            animate={animate}
            motionDamping={motionDamping}
            motionStiffness={motionStiffness}
          >
            {({ showTooltip, hideTooltip }) => (
              <SvgWrapper width={outerWidth} height={outerHeight} margin={margin} theme={theme}>
                {axesPlan === 'background' && axes}
                {dataWithPoints.map(datum => (
                  <ParallelCoordinatesLine
                    key={datum.index}
                    data={datum}
                    variables={variables}
                    lineGenerator={lineGenerator}
                    points={datum.points}
                    strokeWidth={strokeWidth}
                    opacity={lineOpacity}
                    color={getLineColor(datum)}
                    theme={theme}
                    showTooltip={showTooltip}
                    hideTooltip={hideTooltip}
                    animate={animate}
                    motionDamping={motionDamping}
                    motionStiffness={motionStiffness}
                    tooltipKeys={tooltipKeys}
                    tooltipLabels={tooltipLabels}
                  />
                ))}
                {axesPlan === 'foreground' && axes}
              </SvgWrapper>
            )}
          </Container>
        );
      }}
    </ParallelCoordinatesLayout>
  );
};

ParallelCoordinates.propTypes = commonPropTypes;

const enhance = compose(
  defaultProps(commonDefaultProps),
  ...commonEnhancers,
  withMotion(),
  pure
);

export default setDisplayName('ParallelCoordinates')(enhance(ParallelCoordinates));
