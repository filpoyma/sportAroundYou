import { css } from 'styled-components';

import { COLORS, OTHER, SPACE_SIZE } from '@/utils/styleConstants';

const BoxStyles = css`
  position: relative;
  padding: ${SPACE_SIZE.S};
  background: #fff;
  font: 14px/16px var(--ff);
  ${OTHER.BORDER_RADIUS}
  ${OTHER.BOX_SHADOW}

  ${props =>
    props.flex &&
    css`
      display: flex;
      justify-content: space-between;
    `}

  & + & {
    margin-top: ${SPACE_SIZE.S};
  }

  & > h3 {
    margin: 0 0 ${SPACE_SIZE.S};
    color: ${COLORS.TEXT.PRIMARY};
    font: 700 15px/20px var(--ff);
  }
`;

export default BoxStyles;
