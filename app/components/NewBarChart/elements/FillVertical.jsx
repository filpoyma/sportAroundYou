import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import injectStyles from '@/utils/injectStyles';
import { COLORS, SPACE_SIZE } from '@/utils/styleConstants';

const FillVertical = ({ className, data, units }) => (
  <div className={className}>
    <div>
      <div>
        <span>
          {data.value}
          <br />
          {units}
        </span>
      </div>
    </div>
    <div>
      <div>
        <span>
          <b>
            {data.max} {units}
          </b>
          <br />
          максимум
        </span>
      </div>
    </div>
    {data.avg && (
      <div>
        <span>
          <b>
            {data.avg} {units}
          </b>
          <br />
          среднее
        </span>
      </div>
    )}
  </div>
);

FillVertical.propTypes = {
  className: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  data: PropTypes.shape({
    avg: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
  }),
  // Used by StyledComponents
  height: PropTypes.string.isRequired, // eslint-disable-line
  units: PropTypes.string
};

FillVertical.defaultProps = {
  units: ''
};

const styles = css`
  flex-direction: column-reverse;
  align-items: center;

  & > div {
    width: ${props => props.lineSize};

    & > div {
      width: 100%;
      height: 100%;
    }

    &:nth-child(1) {
      height: ${props => (props.data.value / props.data.max) * 100}%;

      & > div {
        background: ${COLORS.CHARTS.BAR.BLUE};
        color: #fff;
        padding: ${SPACE_SIZE.XXXS} 0 0;
        font: 700 18px/20px var(--dff);
        text-align: center;

        span {
          position: relative;
          z-index: 2;
        }
      }
    }

    &:nth-child(2) {
      height: ${props => (1 - props.data.value / props.data.max) * 100}%;

      & > div {
        position: relative;
        background: ${COLORS.CHARTS.BAR.GRAY};
        color: ${COLORS.CHARTS.BAR.GRAY};

        span {
          position: absolute;
          display: block;
          top: 0;
          left: 100%;
          width: max-content;
          margin: 0 0 0 ${SPACE_SIZE.XXS};
          font: 700 10px/14px var(--ff);

          b {
            font: 700 14px/14px var(--dff);
          }
        }
      }
    }

    &:nth-child(3) {
      position: absolute;
      bottom: ${props => (props.data.avg / props.data.max) * 100}%;
      width: ${props => props.lineSize};
      height: 2px;
      background: ${COLORS.CHARTS.BAR.DARK_GRAY};
      color: ${COLORS.CHARTS.BAR.DARK_GRAY};

      span {
        position: absolute;
        display: block;
        top: 0;
        right: 100%;
        width: max-content;
        margin: 0 ${SPACE_SIZE.XXS} 0 0;
        font: 700 10px/14px var(--ff);
        text-align: right;

        b {
          font: 700 14px/14px var(--dff);
        }
      }
    }
  }
`;

FillVertical.displayName = 'BarChartComponentFillVerticalElement';

FillVertical.whyDidYouRender = true;

export default injectStyles(FillVertical, styles);
