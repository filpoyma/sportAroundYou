import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import { hashMemo } from '@/utils/hashData';
import injectStyles from '@/utils/injectStyles';
import { COLORS } from '@/utils/styleConstants';

const COLOR = [
  COLORS.CHARTS.PIE_CHART.GREY,
  COLORS.CHARTS.PIE_CHART.DARK_GRAY,
  COLORS.CHARTS.PIE_CHART.LIGHT_BLUE,
  COLORS.CHARTS.PIE_CHART.BLUE
];

const Block = ({ valueR, valueL, className }) => (
  <div className={className}>
    <div></div>
    <div></div>
    <p>{valueR}</p>
    <p>{valueL}</p>
  </div>
);

Block.propTypes = {
  className: PropTypes.string.isRequired,
  valueR: PropTypes.oneOf([0, 1, 2, 3]).isRequired,
  valueL: PropTypes.oneOf([0, 1, 2, 3]).isRequired
};

Block.defaultProps = {};

Block.displayName = 'SpiroergometryTestSummaryChartElement';

const styles = css`
  position: relative;
  height: 110px;
  width: 100%;

  & > div {
    position: absolute;
    height: 50px;
    top: 60px;
  }

  & > div:first-child {
    width: ${props => (props.valueR + 1) * 68}px;
    left: ${props => (3 - props.valueR) * 68}px;
    background-color: ${props => COLOR[props.valueR]};
  }

  & > div:nth-child(2) {
    width: ${props => (props.valueL + 1) * 68}px;
    left: 312px;
    background-color: ${props => COLOR[props.valueL]};
  }

  & > p {
    position: absolute;
    margin: 0;
    font: 700 28px/36px var(--ff);
  }

  & > p:nth-child(3) {
    left: 7px;
  }

  & > p:nth-child(4) {
    right: -7px;
  }
`;

Block.whyDidYouRender = true;

export default injectStyles(hashMemo(Block), styles);
