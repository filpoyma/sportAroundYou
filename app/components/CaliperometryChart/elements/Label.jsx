import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import { RESULT_KEY } from '@/athleteTests/Caliperometry/constants';
import injectStyles from '@/utils/injectStyles';
import { COLORS } from '@/utils/styleConstants';

const Label = ({ className, label, value }) => (
  <div className={className}>
    <p>{label}</p>
    <p>{value} мм</p>
  </div>
);

Label.propTypes = {
  className: PropTypes.string.isRequired,
  // Used by StyledComponents
  id: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
  // Used by StyledComponents
  gender: PropTypes.oneOf(['F', 'M']).isRequired, // eslint-disable-line react/no-unused-prop-types
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

Label.defaultProps = {};

Label.displayName = 'CaliperometryChartComponentLabelElement';

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
  props.id === RESULT_KEY.CHEST &&
  css`
    top: 4px;
    left: 4px;
    width: 120px;

    ${props.gender === 'F' &&
      css`
        display: none;
      `}
  `}

${props =>
  props.id === RESULT_KEY.BICEPS &&
  css`
    top: 82px;
    left: 28px;
    width: 58px;
  `}

${props =>
  props.id === RESULT_KEY.FOREARM &&
  css`
    top: 174px;
    left: 16.5px;
    width: 80px;
  `}

${props =>
  props.id === RESULT_KEY.WRIST &&
  css`
    top: 237px;
    left: 27.5px;
    width: 58px;
  `}

${props =>
  props.id === RESULT_KEY.ILIAC &&
  css`
    top: 299px;
    left: 7px;
    width: 100px;
  `}

${props =>
  props.id === RESULT_KEY.SHIN &&
  css`
    top: 427px;
    left: 22.5px;
    width: 68px;

    & > p {
      color: ${COLORS.TEXT.PRIMARY};
    }
  `}

${props =>
  props.id === RESULT_KEY.UNDER_SHOULDER_BLADE &&
  css`
    top: ${props.gender === 'M' ? 73.5 : 55}px;
    left: 401px;
    width: 99px;

    & > p {
      color: ${COLORS.TEXT.PRIMARY};
    }
  `}

${props =>
  props.id === RESULT_KEY.TRICEPS &&
  css`
    top: 136px;
    left: 415px;
    width: 71px;

    & > p {
      color: ${COLORS.TEXT.PRIMARY};
    }
  `}

${props =>
  props.id === RESULT_KEY.BELLY &&
  css`
    top: 194px;
    left: 415px;
    width: 72px;
  `}

${props =>
  props.id === RESULT_KEY.HIP_UP &&
  css`
    top: 261px;
    left: 413px;
    width: 74px;
  `}

${props =>
  props.id === RESULT_KEY.HIP_MID &&
  css`
    top: 365px;
    left: 397px;
    width: 108px;
  `}
`;

export default injectStyles(Label, styles);
