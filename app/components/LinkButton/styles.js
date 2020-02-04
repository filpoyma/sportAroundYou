import { css } from 'styled-components';

import { COLORS, OTHER } from '@/utils/styleConstants';

const LinkButtonStyles = css`
  display: inline-block;
  padding: 0;
  background: none;
  color: ${COLORS.TEXT.HOVER};
  font: 14px/16px var(--ff);
  border: none;
  cursor: pointer;
  ${OTHER.HOVER_DARKEN};
`;

export default LinkButtonStyles;
