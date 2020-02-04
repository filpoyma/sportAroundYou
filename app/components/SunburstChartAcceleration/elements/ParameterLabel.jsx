import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import injectStyles from '@/utils/injectStyles';

const ParameterLabel = ({ color, label, value, ...rest }) => (
  <div {...rest}>
    <p>{label}</p>
    <p>{value} мс</p>
  </div>
);

ParameterLabel.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

ParameterLabel.defaultProps = {};

ParameterLabel.displayName = 'SunburstChartParameterLabelElement';

const styles = css`
  position: relative;

  & > p {
    margin: 0;
    color: ${props => props.color};
    font: 700 ${props => props.fontSize || 15}px / 16px var(--dff);
    text-align: center;
    white-space: pre-line;
    width: 80px;

    &:nth-child(2) {
      margin-top: 3px;
      font-size: 20px;
      line-height: 23px;
    }
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: -120px;
    left: 23px;
    background: #c6d5e1;
  }

  &:before {
    width: 1px;
    height: 105px;
  }

  &:after {
    width: 3px;
    height: 3px;
    transform: translate(-1px);
    border-radius: 3px;
  }

  &:nth-child(2) {
    &:before,
    &:after {
      top: -43px;
      left: 38px;
    }

    &:before {
      height: 28px;
    }
  }

  &:nth-child(3) {
    &:before,
    &:after {
      left: 31px;
    }
  }
`;

export default injectStyles(ParameterLabel, styles);
