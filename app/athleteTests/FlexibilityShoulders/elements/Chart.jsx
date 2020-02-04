import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import ShoulderLeft from '@/images/flexibility-shoulder-left.svg';
import ShoulderRight from '@/images/flexibility-shoulder-right.svg';
import Wring from '@/images/flexibility-wring.svg';
import injectStyles from '@/utils/injectStyles';
import { COLORS, SPACE_SIZE } from '@/utils/styleConstants';

import { RESULT_KEY } from '../constants';

const Chart = ({ className, data }) => (
  <div className={className}>
    <div>
      <h3>выкрут</h3>
      <Wring />
      <span>
        <b>{data[RESULT_KEY.WRING]}</b>см
      </span>
    </div>
    <div>
      <h3>сведение лево</h3>
      <ShoulderLeft />
      <span>
        <b>{data[RESULT_KEY.LEFT_SHOULDER]}</b>см
      </span>
    </div>
    <div>
      <h3>сведение право</h3>
      <ShoulderRight />
      <span>
        <b>{data[RESULT_KEY.RIGHT_SHOULDER]}</b>см
      </span>
    </div>
  </div>
);

Chart.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.shape({
    [RESULT_KEY.LEFT_SHOULDER]: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    [RESULT_KEY.RIGHT_SHOULDER]: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    [RESULT_KEY.WRING]: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  })
};

Chart.defaultProps = {
  data: {}
};

Chart.displayName = 'FlexibilityShouldersTestChartElement';

const styles = css`
  display: flex;
  justify-content: space-around;

  h3 {
    width: 100px;
    padding: 0 0 ${SPACE_SIZE.L};
    color: ${COLORS.TEXT.PRIMARY};
    font: 700 15px/15px var(--ff);
    text-align: center;
  }

  svg {
    display: block;
    margin: 33px auto 0;
  }

  span {
    display: block;
    width: 70px;
    margin: ${SPACE_SIZE.L} auto 0;
    color: ${COLORS.TEXT.PRIMARY};
    font: 700 28px/28px var(--dff);
    text-align: center;

    b {
      display: block;
      font-size: 36px;
    }
  }

  & > div:first-child svg {
    margin-top: 0;
  }

  & > div:hover {
    h3,
    span {
      color: ${COLORS.BUTTON.PRIMARY.ORDINARY};
    }

    svg path {
      fill: ${COLORS.BUTTON.PRIMARY.ORDINARY};
    }
  }
`;

export default injectStyles(Chart, styles);
