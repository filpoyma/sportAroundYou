import { css } from 'styled-components';

const SpeedometerChartStyles = css`
  position: relative;
  width: 180px;
  height: 100px;

  & > svg {
    position: absolute;

    text {
      font: 15px/18px var(--dff);
    }
  }

  & > span {
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
    top: 57px;
    margin: auto;
    font: 700 22px/26px var(--dff);
    text-align: center;
  }

  & > div:last-child {
    display: inline;
    width: 100%;
    position: relative;
    top: 68px;
    font: 15px/18px var(--dff);

    p {
      display: inline;
      position: absolute;
      width: 80px;
      text-align: center;
    }

    & > p:first-child {
      left: -3px;
    }

    & > p:last-child {
      left: 104px;
    }
  }
`;

export default SpeedometerChartStyles;
