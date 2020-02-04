import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import { LABELS, RESULT_KEY } from '@/athleteTests/Anthropometry/constants';
import injectStyles from '@/utils/injectStyles';
import { COLORS } from '@/utils/styleConstants';

const Label = ({ className, id, value }) => (
  <div className={className}>
    <p>{LABELS[id].toUpperCase()}</p>
    <p>{value} см</p>
  </div>
);

Label.propTypes = {
  className: PropTypes.string.isRequired,
  // Used by StyledComponents
  id: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
  // Used by StyledComponents
  gender: PropTypes.oneOf(['F', 'M']).isRequired, // eslint-disable-line react/no-unused-prop-types
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

Label.defaultProps = {};

Label.displayName = 'AnthropometryChartComponentLabelElement';

const styles = css`
  position: absolute;

  & > p {
    margin: 0;
    color: ${COLORS.BUTTON.PRIMARY.ORDINARY};
    font: 700 14px/16px var(--dff);
    text-align: center;

    &:nth-child(2) {
      margin-top: 8px;
      font-size: 20px;
      line-height: 23px;
    }
  }

  ${props =>
    props.id === RESULT_KEY.SHOULDER_DIAMETER &&
    css`
      top: ${props.gender === 'M' ? 83 : 85}px;
      left: 40px;
      width: 120px;
    `}

  ${props =>
    props.id === RESULT_KEY.FOREARM_DIAMETER &&
    css`
      top: ${props.gender === 'M' ? 167 : 169}px;
      left: 25px;
      width: 150px;
    `}

  ${props =>
    props.id === RESULT_KEY.HIP_DIAMETER &&
    css`
      top: ${props.gender === 'M' ? 365 : 367}px;
      left: 40px;
      width: 120px;
    `}

  ${props =>
    props.id === RESULT_KEY.SHIN_DIAMETER &&
    css`
      top: ${props.gender === 'M' ? 437 : 449}px;
      left: 40px;
      width: 120px;
    `}

  ${props =>
    props.id === RESULT_KEY.LEG_LENGTH &&
    css`
      top: ${props.gender === 'M' ? 345 : 345}px;
      left: 442px;
      width: 120px;
      transform: rotate(-90deg);
    `}

  ${props =>
    props.id === RESULT_KEY.HIP_LENGTH &&
    css`
      top: ${props.gender === 'M' ? 278 : 278}px;
      left: 384px;
      width: 120px;
      transform: rotate(-90deg);
    `}
`;

export default injectStyles(Label, styles);
