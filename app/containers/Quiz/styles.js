import { css } from 'styled-components';

import { COLORS, SPACE_SIZE } from '@/utils/styleConstants';

const QuizStyles = css`
  position: relative;
  width: 100%;

  & > div:first-child {
    position: relative;
    padding: 0 0 ${SPACE_SIZE.XXS} 65px;
    color: ${COLORS.TEXT.PRIMARY};
    font: 13px/15px var(--ff);

    &:before {
      content: 'i';
      position: absolute;
      top: 0;
      left: 0;
      width: 45px;
      height: 45px;
      background: ${COLORS.PRIMARY};
      color: #fff;
      font: 700 17px/45px var(--dff);
      border-radius: 100%;
      text-align: center;
    }
  }

  & > span {
    padding-left: ${SPACE_SIZE.L};
    color: ${COLORS.ERROR};
    font: 15px/18px var(--dff);
  }

  & > hr {
    height: 1px;
    background: ${COLORS.BORDER};
    margin: ${SPACE_SIZE.XS} 0 ${SPACE_SIZE.M};
    border: none;
  }
`;

export default QuizStyles;
