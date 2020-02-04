import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import BarChart, { TYPE as CHART_TYPE } from '@/components/NewBarChart';
import Illustration from '@/images/explosive-jump-length.svg';
import { hashMemo } from '@/utils/hashData';
import injectStyles from '@/utils/injectStyles';
import { SPACE_SIZE } from '@/utils/styleConstants';

const ChartLength = ({ className, data }) => (
  <div className={className}>
    <Illustration />
    <BarChart data={data} outerSize="30px" type={CHART_TYPE.FILL} units="см" />
  </div>
);

ChartLength.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.object
};

ChartLength.defaultProps = {
  data: {}
};

ChartLength.displayName = 'ExplosiveJumpTestChartLengthElement';

const styles = css`
  margin: ${SPACE_SIZE.S} 0 0;

  & > svg {
    margin: 0 0 ${SPACE_SIZE.L};
  }
`;

export default injectStyles(hashMemo(ChartLength), styles);
