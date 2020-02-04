import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import StepOverImage from '@/images/coordination-tennis-step-over.svg';
import injectStyles from '@/utils/injectStyles';
import { COLORS } from '@/utils/styleConstants';

const StepOverChart = ({ className, data }) => (
  <div className={className}>
    <StepOverImage />
    <div>
      <b>{data}</b>
    </div>
  </div>
);

StepOverChart.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

StepOverChart.defaultProps = {
  data: ''
};

StepOverChart.displayName = 'CoordinationTennisTestStepOverChartElement';

const styles = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  svg {
    display: block;
    margin: 33px auto 0;
  }

  div {
    display: block;
    width: 100%;
    height: 60px;
    padding-top: 20px;
    color: ${COLORS.TEXT.HOVER};
    font: 700 28px/28px var(--dff);
    text-align: center;

    b {
      display: block;
      font-size: 36px;
    }
  }
`;

export default injectStyles(StepOverChart, styles);
