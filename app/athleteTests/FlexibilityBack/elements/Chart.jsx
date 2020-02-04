import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import Back from '@/images/flexibility-back.svg';
import injectStyles from '@/utils/injectStyles';
import { COLORS, SPACE_SIZE } from '@/utils/styleConstants';

import { RESULT_KEY } from '../constants';

const Chart = ({ className, data }) => (
  <div className={className}>
    <Back />
    <span>
      <b>{data[RESULT_KEY.BACK]}</b> см
    </span>
  </div>
);

Chart.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.shape({
    [RESULT_KEY.BACK]: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  })
};

Chart.defaultProps = {
  data: {}
};

Chart.displayName = 'FlexibilityBackTestChartElement';

const styles = css`
  position: relative;

  svg {
    display: block;
    margin: 0 0 0 auto;
  }

  span {
    position: absolute;
    display: block;
    bottom: 0;
    margin: ${SPACE_SIZE.L} auto 0;
    color: ${COLORS.TEXT.PRIMARY};
    font: 700 28px/28px var(--dff);

    b {
      font-size: 36px;
    }
  }

  &:hover {
    span {
      color: ${COLORS.BUTTON.PRIMARY.ORDINARY};
    }

    svg path {
      fill: ${COLORS.BUTTON.PRIMARY.ORDINARY};
    }
  }
`;

export default injectStyles(Chart, styles);
