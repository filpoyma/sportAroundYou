import { css } from 'styled-components';

import { COLORS, SPACE_SIZE } from '@/utils/styleConstants';

import { SUNBURST_CHART_SIZE } from './constants';

const SunburstChartStyles = css`
  position: relative;
  width: 250px;

  & > h3 {
    margin: 0 0 ${SPACE_SIZE.S};
    color: ${COLORS.TEXT.PRIMARY};
    font: 700 15px/20px var(--ff);
  }

  & > div:first-child {
    width: ${SUNBURST_CHART_SIZE}px;
    height: ${SUNBURST_CHART_SIZE}px;
    margin: auto;
    overflow: hidden;
  }

  & > div:last-child {
    display: flex;
    margin-top: ${SPACE_SIZE.XXS};
    justify-content: space-between;
  }

  ${props =>
    props.data?.children?.[0]?.percent &&
    css`
      & svg {
        transform: rotate(${180 * (1 - props.data?.children?.[0]?.value / props.data?.time)}deg);
      }
    `}
`;

export default SunburstChartStyles;
