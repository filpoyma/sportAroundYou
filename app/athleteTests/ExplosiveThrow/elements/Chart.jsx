import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import BarChart, { TYPE as CHART_TYPE } from '@/components/NewBarChart';
import Illustration from '@/images/explosive-throw.svg';
import { hashMemo } from '@/utils/hashData';
import injectStyles from '@/utils/injectStyles';
import { SPACE_SIZE } from '@/utils/styleConstants';

const Chart = ({ className, data }) => (
  <div className={className}>
    <Illustration />
    <BarChart data={data} outerSize="30px" type={CHART_TYPE.FILL} units="см" />
  </div>
);

Chart.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.object
};

Chart.defaultProps = {
  data: {}
};

Chart.displayName = 'ExplosiveThrowTestChartElement';

const styles = css`
  margin: ${SPACE_SIZE.S} 0 0;

  & > svg {
    margin: 0 0 ${SPACE_SIZE.L};
  }
`;

export default injectStyles(hashMemo(Chart), styles);
