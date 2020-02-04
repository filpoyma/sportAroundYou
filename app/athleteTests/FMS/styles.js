import { css } from 'styled-components';

import { COLORS, SPACE_SIZE } from '@/utils/styleConstants';

import Arc from './elements/Arc';

const styles = css`
  color: ${COLORS.TEXT.PRIMARY};

  & > div + div {
    margin-top: ${SPACE_SIZE.L};
  }

  & > div > h3 {
    display: inline-block;
    margin: 0;
    white-space: pre-wrap;
    font: 700 14px/16px var(--dff);
  }

  ${Arc} {
    display: inline-block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .arc {
    position: relative;
    height: 135px;
    margin-top: 50px;
  }

  .block {
    position: relative;
    height: 110px;

    h3 {
      position: absolute;
      left: 50%;
      top: 10px;
      transform: translateX(-50%);
      text-align: center;
    }

    p {
      position: absolute;
      top: 10px;
      transform: translateX(-50%);
      text-align: center;
    }
  }

  & > div:nth-child(3) > p:nth-child(2) {
    left: 57%;
  }

  & > div:nth-child(3) > p:nth-child(3) {
    left: 44%;
  }

  & > div:nth-child(3) {
    position: relative;

    & > p:first-child {
      position: absolute;
    }

    h3 {
      top: -10px;
    }
  }
`;

export default styles;
