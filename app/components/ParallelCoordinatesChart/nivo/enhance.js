import { getOrdinalColorScale } from '@nivo/colors';
import { curveFromProp, withDimensions, withTheme } from '@nivo/core';
import { line } from 'd3-shape';
import withPropsOnChange from 'recompose/withPropsOnChange';

export const commonEnhancers = [
  withDimensions(),
  withTheme(),
  withPropsOnChange(['colors'], ({ colors }) => ({
    getLineColor: getOrdinalColorScale(colors, 'index')
  })),
  withPropsOnChange(['curve'], ({ curve }) => ({
    lineGenerator: line()
      .x(d => d.x)
      .y(d => d.y)
      .curve(curveFromProp(curve))
  }))
];
