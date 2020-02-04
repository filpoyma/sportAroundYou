import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import injectStyles from '@/utils/injectStyles';
import { SPACE_SIZE } from '@/utils/styleConstants';

const Stacked = ({ className, data }) => (
  <div className={className}>
    {data.map(({ id, label }) => (
      <div key={`data_chart_${id}`}>
        <div />
        {label && <span>{label}</span>}
      </div>
    ))}
  </div>
);

Stacked.propTypes = {
  className: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      color: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
    })
  ),
  // Used by StyledComponents
  lineSize: PropTypes.string.isRequired, // eslint-disable-line
};

Stacked.defaultProps = {};

const styles = css`
  position: relative;
  display: flex;

  & > div {
    position: relative;
    font: 700 10px/14px var(--ff);

    & > div {
      border: 0.5px solid #fff;
    }

    & > span {
      position: absolute;
      display: block;
      top: ${props => props.lineSize};
      margin-top: ${SPACE_SIZE.XXS};
      right: 0;
      text-align: right;
      white-space: nowrap;
      transform: rotate(-45deg);
      transform-origin: 100% 100%;
    }

    ${props =>
      props.data.map(
        ({ color, value }, id) => css`
        &:nth-child(${id + 1}) {
          ${value === 0 && 'display: none;'}

          width: ${value * 100}vw;
          color: ${color};

          & > div {
            height: ${props.lineSize};
            background: ${color};
          }
        }
      `
      )}
  }
`;

Stacked.displayName = 'BarChartComponentStackedElement';

Stacked.whyDidYouRender = true;

export default injectStyles(Stacked, styles);
