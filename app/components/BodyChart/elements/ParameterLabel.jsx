import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import injectStyles from '@/utils/injectStyles';

const ParameterLabel = ({ className, label, value }) => (
  <div className={className}>
    <p>{label}</p>
    <p>{value} кг</p>
  </div>
);

ParameterLabel.propTypes = {
  className: PropTypes.string.isRequired,
  // Used by StyledComponent
  color: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
  // Used by StyledComponent
  gender: PropTypes.oneOf(['F', 'M']).isRequired, // eslint-disable-line react/no-unused-prop-types
  // Used by StyledComponent
  id: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

ParameterLabel.defaultProps = {};

ParameterLabel.displayName = 'BodyChartParameterLabelElement';

const styles = css`
  position: absolute;

  & > p {
    margin: 0;
    color: ${props => props.color};
    font: 700 14px/16px var(--dff);

    &:nth-child(2) {
      margin-top: 8px;
      font-size: 20px;
      line-height: 23px;
      text-align: center;
    }
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 20px;
    background: #c6d5e1;
  }

  &:before {
    height: 1px;
  }

  &:after {
    width: 3px;
    height: 3px;
    border-radius: 3px;
  }

  ${props =>
    props.id === 'trunk' &&
    css`
      left: 203px;
      top: 82px;

      &:before,
      &:after {
        left: -53px;
      }

      &:before {
        right: 0;
      }

      &:after {
        transform: translate(-2px, -1px);
      }
    `}

  ${props =>
    props.id === 'rightArm' &&
    css`
      left: ${props.gender === 'M' ? 10 : 13}px;
      top: 152px;

      &:before,
      &:after {
        right: -19px;
      }

      &:before {
        left: 0;
      }

      &:after {
        transform: translate(2px, -1px);
      }
    `}

  ${props =>
    props.id === 'leftArm' &&
    css`
      left: ${props.gender === 'M' ? 203 : 200}px;
      top: 152px;

      &:before,
      &:after {
        left: -19px;
      }

      &:before {
        right: 0;
      }

      &:after {
        transform: translate(-2px, -1px);
      }
    `}

  ${props =>
    props.id === 'rightLeg' &&
    css`
      left: ${props.gender === 'M' ? 10 : 13}px;
      top: 230px;

      &:before,
      &:after {
        right: -43px;
      }

      &:before {
        left: 0;
      }

      &:after {
        transform: translate(2px, -1px);
      }
    `}

  ${props =>
    props.id === 'leftLeg' &&
    css`
      left: ${props.gender === 'M' ? 203 : 200}px;
      top: 230px;

      &:before,
      &:after {
        left: -42px;
      }

      &:before {
        right: 0;
      }

      &:after {
        transform: translate(-2px, -1px);
      }
    `}
`;

export default injectStyles(ParameterLabel, styles);
