import { css } from 'styled-components';

import ChartMan from '@/images/caliperometry-man.svg?file';
import ChartWoman from '@/images/caliperometry-woman.svg?file';
import { SPACE_SIZE } from '@/utils/styleConstants';

const CaliperometryChartStyles = css`
  position: relative;
  width: 540px;
  height: 500px;
  margin: ${SPACE_SIZE.L} auto ${SPACE_SIZE.L};
  background: ${props => (props.gender === 'M' ? '-10px 50%' : '-5px 50%')} no-repeat;
  background-image: url(${props => (props.gender === 'M' ? ChartMan : ChartWoman)});
`;

export default CaliperometryChartStyles;
