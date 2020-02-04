import { css } from 'styled-components';

import Tooltip from '@/components/Tooltip';
import { COLORS, SPACE_SIZE } from '@/utils/styleConstants';

const PageTitleStyles = css`
  & h1 {
    margin: 0;
    color: ${COLORS.TITLE};
    font: 700 24px/33px var(--ff);
  }

  & ${Tooltip} {
    top: -2px;
    margin-left: ${SPACE_SIZE.XS};
  }
`;

export default PageTitleStyles;
