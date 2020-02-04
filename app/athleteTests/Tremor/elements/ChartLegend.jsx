import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import injectStyles from '@/utils/injectStyles';
import { COLORS, SPACE_SIZE } from '@/utils/styleConstants';

const ChartLegend = ({ className, data }) => (
  <div className={className}>
    {data.map(({ id, label }) => (
      <span key={`chart_legend_${id}`}>{label}</span>
    ))}
  </div>
);

ChartLegend.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      label: PropTypes.string
    })
  )
};

ChartLegend.defaultProps = {
  data: []
};

ChartLegend.displayName = 'CadenceTestChartLegendElement';

const styles = css`
  text-align: center;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid #dddddd;

  span {
    position: relative;
    display: inline-block;
    padding-left: 45px;
    color: ${COLORS.TEXT.PRIMARY};
    font: 700 10px/14px var(--ff);

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 36px;
      height: 10px;
      margin: auto;
    }

    & + span {
      margin-left: ${SPACE_SIZE.L};
    }
  }

  ${props =>
    props.data
      .map(
        ({ color }, index) => `
          span:nth-child(${index + 1}):before {
            background: ${color};
          }
        `
      )
      .join(' ')}
`;

ChartLegend.whyDidYouRender = true;

export default injectStyles(ChartLegend, styles);
