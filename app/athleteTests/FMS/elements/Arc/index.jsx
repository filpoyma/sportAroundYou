import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';
import cornerArc from 'svg-arc-corners';

import { hashMemo } from '@/utils/hashData';
import injectStyles from '@/utils/injectStyles';
import { COLORS } from '@/utils/styleConstants';

const COLOR = [
  COLORS.CHARTS.PIE_CHART.GREY,
  COLORS.CHARTS.PIE_CHART.DARK_GRAY,
  COLORS.CHARTS.PIE_CHART.LIGHT_BLUE,
  COLORS.CHARTS.PIE_CHART.BLUE
];

const Arc = ({ value, sum, className }) => (
  <div className={className}>
    <svg
      width="270"
      height="130"
      viewBox="0 0 270 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        key="arc"
        d={cornerArc([130, 130], 130, -90, value ? -90 + 45 * (value + 1) : 90, 47, 0)}
        fill={COLOR[value || 3]}
      />
    </svg>
    <p>{value || sum}</p>
  </div>
);

Arc.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.oneOf([0, 1, 2, 3]),
  sum: PropTypes.number
};

Arc.defaultProps = {
  value: null,
  sum: null
};

Arc.displayName = 'SpiroergometryTestSummaryChartElement';

const styles = css`
  width: 270px;
  height: 130px;
  position: relative;

  & > p {
    position: absolute;
    top: 130px;
    left: 130px;
    text-align: center;
    transform: translate(-50%, -100%);
    margin: 0;
    font: 700 28px/36px var(--dff);
  }
`;

Arc.whyDidYouRender = true;

export default injectStyles(hashMemo(Arc), styles);
