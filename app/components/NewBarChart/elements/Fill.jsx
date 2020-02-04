import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import injectStyles from '@/utils/injectStyles';
import { COLORS, SPACE_SIZE } from '@/utils/styleConstants';

const Fill = ({ className, data, units }) => (
  <div className={className}>
    <div>
      <div>
        <span>
          {data.value} {units}
        </span>
      </div>
    </div>
    <div>
      <div>
        <span>
          максимум
          <b>
            {data.max} {units}
          </b>
        </span>
      </div>
    </div>
    {data.avg && (
      <div>
        <span>
          среднее
          <b>
            {data.avg} {units}
          </b>
        </span>
      </div>
    )}
  </div>
);

Fill.propTypes = {
  className: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  data: PropTypes.shape({
    avg: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
  }),
  // Used by StyledComponents
  lineSize: PropTypes.string.isRequired, // eslint-disable-line
  units: PropTypes.string
};

Fill.defaultProps = {
  units: ''
};

const styles = css`
  margin: ${SPACE_SIZE.L} 0;

  & > div {
    & > div {
      height: ${props => props.lineSize};
    }

    &:nth-child(1) {
      width: ${props => props.data.value * 100}vw;

      & > div {
        padding: 0 ${SPACE_SIZE.XXS} 0 0;
        background: ${COLORS.CHARTS.BAR.BLUE};
        color: #fff;
        font: 700 18px / ${props => props.lineSize} var(--dff);
        text-align: right;

        span {
          position: relative;
          z-index: 2;
        }
      }
    }

    &:nth-child(2) {
      width: ${props => (props.data.max - props.data.value) * 100}vw;

      & > div {
        position: relative;
        background: ${COLORS.CHARTS.BAR.GRAY};
        color: ${COLORS.CHARTS.BAR.GRAY};

        span {
          position: absolute;
          display: block;
          bottom: -${SPACE_SIZE.M};
          right: 0;
          width: max-content;
          font: 700 10px/14px var(--ff);

          b {
            margin: 0 0 0 ${SPACE_SIZE.XXXS};
            font: 700 14px/14px var(--dff);
          }
        }
      }
    }

    &:nth-child(3) {
      position: absolute;
      left: ${props => (props.data.avg / props.data.max) * 100}%;
      width: 2px;
      height: 100%;
      background: ${COLORS.CHARTS.BAR.DARK_GRAY};
      color: ${COLORS.CHARTS.BAR.DARK_GRAY};

      span {
        position: absolute;
        display: block;
        top: -${SPACE_SIZE.M};
        right: 0;
        width: max-content;
        font: 700 10px/14px var(--ff);

        b {
          margin: 0 0 0 ${SPACE_SIZE.XXXS};
          font: 700 14px/14px var(--dff);
        }
      }
    }
  }
`;

Fill.displayName = 'BarChartComponentFillElement';

Fill.whyDidYouRender = true;

export default injectStyles(Fill, styles);
