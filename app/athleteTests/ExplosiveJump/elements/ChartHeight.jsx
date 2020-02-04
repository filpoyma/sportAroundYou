import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import BarChart, { TYPE as CHART_TYPE } from '@/components/NewBarChart';
import Illustration from '@/images/explosive-jump-height.svg';
import { hashMemo } from '@/utils/hashData';
import injectStyles from '@/utils/injectStyles';
import { SPACE_SIZE } from '@/utils/styleConstants';

const ChartHeight = ({ className, data }) => (
  <div className={className}>
    <Illustration />
    <BarChart
      barSize="108px"
      data={data}
      lineSize="40px"
      outerSize="150px"
      type={CHART_TYPE.FILL_VERTICAL}
      units="см"
    />
  </div>
);

ChartHeight.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.object
};

ChartHeight.defaultProps = {
  data: {}
};

ChartHeight.displayName = 'ExplosiveJumpTestChartHeightElement';

const styles = css`
  margin: ${SPACE_SIZE.S} 0 0;

  & > ${BarChart} {
    position: absolute;
    top: 296px;
    left: 442px;
  }
`;

export default injectStyles(hashMemo(ChartHeight), styles);
