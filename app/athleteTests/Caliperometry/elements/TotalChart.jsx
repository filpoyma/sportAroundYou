import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import { hashMemo } from '@/utils/hashData';
import injectStyles from '@/utils/injectStyles';
import { COLORS, OTHER, SPACE_SIZE } from '@/utils/styleConstants';

const TotalChart = ({ className, data }) => {
  const total = data.reduce((sum, { value }) => sum + value, 0);

  return (
    <div className={className}>
      <BraceSvg />
      <span>
        <b>{total}</b>
        <br />
        мм
      </span>
    </div>
  );
};

TotalChart.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.array
};

TotalChart.defaultProps = {
  data: []
};

TotalChart.displayName = 'CaliperometryTestTotalChartElement';

const styles = css`
  margin: ${SPACE_SIZE.S} 0;
  padding: 0 0 ${SPACE_SIZE.S};
  ${OTHER.BORDER.BOTTOM};

  & > span {
    display: block;
    margin: ${SPACE_SIZE.L} 0 0;
    color: ${COLORS.TEXT.PRIMARY};
    font: 700 28px/28px var(--dff);
    text-align: center;

    & > b {
      font: 700 36px/28px var(--dff);
    }
  }
`;

const BraceSvg = () => (
  <svg width="584" height="18" viewBox="0 0 584 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.520844 0.359985C8.46376 5.84998 19.1411 8.90998 30.2091 8.90998H262.247C273.445 8.90998 284.122 11.97 291.935 17.46C299.878 11.97 310.555 8.90998 321.623 8.90998H553.661C564.859 8.90998 575.536 5.84998 583.349 0.359985"
      stroke="#2789E8"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinejoin="round"
    />
  </svg>
);

export default injectStyles(hashMemo(TotalChart), styles);
