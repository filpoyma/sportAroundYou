import { css } from 'styled-components';

import { CHART_TYPE } from './constants';

const BarChartStyles = css`
  position: relative;
  display: flex;

  ${props => css`
    width: ${props.type === CHART_TYPE.FILL_VERTICAL ? props.outerSize : props.barSize};
    height: ${props.type === CHART_TYPE.FILL_VERTICAL ? props.barSize : props.outerSize};
  `}
`;

export default BarChartStyles;
