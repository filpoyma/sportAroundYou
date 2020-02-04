import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import PaddingImage from '@/images/coordination-tennis-padding.svg';
import injectStyles from '@/utils/injectStyles';
import { COLORS } from '@/utils/styleConstants';

const PaddingChart = ({ className, data }) => (
  <div className={className}>
    <PaddingImage />
    <div>
      <b>{data}</b>
    </div>
  </div>
);

PaddingChart.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

PaddingChart.defaultProps = {
  data: ''
};

PaddingChart.displayName = 'CoordinationTennisTestPaddingChartElement';

const styles = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  svg {
    display: block;
    margin: 33px auto 0;
  }

  div {
    display: block;
    width: 70px;
    margin-top: 70px;
    color: ${COLORS.TEXT.HOVER};
    font: 700 28px/28px var(--dff);
    text-align: center;

    b {
      display: block;
      font-size: 36px;
    }
  }
`;

export default injectStyles(PaddingChart, styles);
