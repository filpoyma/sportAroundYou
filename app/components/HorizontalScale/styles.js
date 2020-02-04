import { css } from 'styled-components';

// import { COLORS, SPACE_SIZE } from '@/utils/styleConstants';
import { COLORS } from '@/utils/styleConstants';

const HorizontalScaleStyles = css`
  position: relative;
  width: 100%;
  height: 280px;

  div.cuttoffs {
    position: absolute;
    top: 0;
    height: 100%;
    width: 1px;
    background-color: #ffffff;
  }

  p.cuttoffs {
    position: absolute;
    top: 180px;
    transform: translateX(-50%);
    color: #a6a7a7;
    text-align: center;
    white-space: nowrap;
  }

  div.interval {
    position: absolute;
    top: -20%;
    height: 120%;
    width: 2px;
    background-color: #4d4f4f;
  }

  p.interval {
    position: absolute;
    top: 110px;
    transform-origin: 0 0 0;
    transform: translateX(10%) rotate(-45deg);
    font: 700 10px/14px var(--ff);
    color: #a6a7a7;
  }

  & > div:first-child {
    position: absolute;
    top: 150px;
    width: 100%;
    height: 40px;
    background-color: #c4c4c4;

    & > div:first-child {
      height: 100%;
      background-color: ${COLORS.CHARTS.BAR.BLUE};
    }
  }

  & > div:nth-child(4) {
    position: absolute;
    top: 210px;
    color: #2789e8;
    transform: translateX(-100%);
    text-align: right;

    & > p:first-child {
      margin: 0;
      font: 700 28px/14px var(--dff);
    }

    & > p:last-child {
      margin-top: 10px;
      font: 700 10px/14px var(--ff);
    }
  }

  & > div:nth-child(5) {
    position: absolute;
    top: 210px;
    left: 96%;
    width: 400px;
    color: #4d4f4f;
    transform: translateX(-100%);
    text-align: right;

    & > p:first-child {
      margin: 0;
      font: 700 28px/14px var(--dff);
    }

    & > p:last-child {
      margin-top: 10px;
      font: 700 10px/14px var(--ff);
      white-space: pre-wrap;
    }
  }
`;

export default HorizontalScaleStyles;
