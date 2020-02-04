import { ResponsiveWrapper } from '@nivo/core';
import React from 'react';

import ParallelCoordinates from './ParallelCoordinates';

const ResponsiveParallelCoordinates = props => (
  <ResponsiveWrapper>
    {({ width, height }) => <ParallelCoordinates width={width} height={height} {...props} />}
  </ResponsiveWrapper>
);

export default ResponsiveParallelCoordinates;
