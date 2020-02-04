import { css } from 'styled-components';

import { COLORS, OTHER, SPACE_SIZE } from '@/utils/styleConstants';

const LineChartStyles = css`
  width: 584px;
  height: ${props => props.height || '300px'};
  padding-bottom: ${SPACE_SIZE.M};

  & + & {
    padding-top: ${SPACE_SIZE.S};
    ${OTHER.BORDER.FULLWIDTH.TOP}

    &:before {
      margin-top: -${SPACE_SIZE.S};
    }
  }

  & > div:last-child {
    margin-top: ${SPACE_SIZE.XXS};
    text-align: center;

    span {
      position: relative;
      display: inline-block;
      padding-left: 24px;
      color: ${COLORS.TEXT.PRIMARY};
      font: 14px/16px var(--ff);

      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 14px;
        height: 4px;
        margin: auto;
      }

      &:nth-child(1):before {
        background: ${COLORS.CHARTS.PIE_CHART.GREY};
      }

      &:nth-child(2):before {
        background: ${COLORS.CHARTS.PIE_CHART.BLUE};
      }
    }

    span + span {
      margin-left: 50px;
    }
  }
`;

export default LineChartStyles;
