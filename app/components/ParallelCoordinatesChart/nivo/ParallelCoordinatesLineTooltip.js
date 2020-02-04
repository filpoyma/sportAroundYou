import { themePropType } from '@nivo/core';
import { TableTooltip } from '@nivo/tooltip';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

export default class ParallelCoordinatesLineTooltip extends PureComponent {
  render() {
    const { data, keys, labels, theme } = this.props;

    return (
      <TableTooltip
        theme={theme}
        rows={keys.map(key => [
          labels[key],
          <strong>{data[key]}</strong> // eslint-disable-line react/jsx-key
        ])}
      />
    );
  }
}

ParallelCoordinatesLineTooltip.propTypes = {
  data: PropTypes.object.isRequired,
  keys: PropTypes.array.isRequired,
  labels: PropTypes.object.isRequired,
  theme: themePropType.isRequired
};
