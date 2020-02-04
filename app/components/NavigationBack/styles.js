import { css } from 'styled-components';

import iconBack from '@/images/icon-back.svg?file';
import { COLORS, OTHER } from '@/utils/styleConstants';

const NavigationBackStyles = css`
  min-width: 9px;
  min-height: 15px;
  background: url(${iconBack}) no-repeat 0 70%;
  ${OTHER.HOVER_DARKEN}

  & span {
    padding-left: 17px;
    color: ${COLORS.TEXT.PRIMARY};
    font: 14px/16px var(--ff);
    cursor: pointer;
  }
`;

export default NavigationBackStyles;
