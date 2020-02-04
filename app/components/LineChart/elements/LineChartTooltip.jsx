import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import injectStyles from '@/utils/injectStyles';
import { SPACE_SIZE } from '@/utils/styleConstants';

const LineChartTooltip = ({ children, className, point }) => {
  if (children) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={className}>
      {point.data.yFormatted}
      <br />
      {point.data.xFormatted}
    </div>
  );
};

LineChartTooltip.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string.isRequired,
  point: PropTypes.shape({
    data: PropTypes.shape({
      xFormatted: PropTypes.string.isRequired,
      yFormatted: PropTypes.string.isRequired
    }).isRequired
  })
};

LineChartTooltip.defaultProps = {
  children: undefined,
  point: undefined
};

LineChartTooltip.displayName = 'LineChartTooltipElement';

const styles = css`
  padding: 3px ${SPACE_SIZE.XXS};
  background: #f0efef;
  color: #5b6b7f;
  font: 700 13px/15px var(--dff);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  text-align: center;
`;

export default injectStyles(LineChartTooltip, styles);
