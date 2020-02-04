import { css } from 'styled-components';

import { SPACE_SIZE } from '@/utils/styleConstants';

// import { SUNBURST_CHART_SIZE } from './constants';

const StreamChartStyles = css`
  position: relative;
  width: 584px;
  height: 600px;
  padding-bottom: ${SPACE_SIZE.M};
`;

export default StreamChartStyles;
