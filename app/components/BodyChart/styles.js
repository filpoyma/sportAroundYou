import { css } from 'styled-components';

import BodyChartMan from '@/images/body-chart-man.svg?file';
import BodyChartWoman from '@/images/body-chart-woman.svg?file';
import { COLORS, SPACE_SIZE } from '@/utils/styleConstants';

const BodyChartStyles = css`
  position: relative;
  width: 295px;
  height: 320px;
  background: url(${props => (props.gender === 'M' ? BodyChartMan : BodyChartWoman)}) 50% 100%
    no-repeat;
  background-size: 65%;

  & > h3 {
    margin: 0 0 ${SPACE_SIZE.S};
    color: ${COLORS.TEXT.PRIMARY};
    font: 700 15px/20px var(--ff);
  }
`;

export default BodyChartStyles;
