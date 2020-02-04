import { css } from 'styled-components';

import ChartMan from '@/images/anthropometry-man.svg?file';
import ChartWoman from '@/images/anthropometry-woman.svg?file';
import { SPACE_SIZE } from '@/utils/styleConstants';

const AnthropometryChartStyles = css`
  position: relative;
  margin: ${SPACE_SIZE.L} auto ${SPACE_SIZE.XXS};
  background: 50% 50% no-repeat;

  ${props =>
    css`
      width: 525px;
      height: 500px;
      background-image: url(${props.gender === 'M' ? ChartMan : ChartWoman});
    `}
`;

export default AnthropometryChartStyles;
