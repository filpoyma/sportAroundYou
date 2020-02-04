import { css } from 'styled-components';

import { COLORS, OTHER, SPACE_SIZE } from '@/utils/styleConstants';

const TextAreaStyles = css`
  display: block;
  width: 100%;
  min-height: 95px;
  padding: ${SPACE_SIZE.XXS} ${SPACE_SIZE.XS};
  color: ${COLORS.INPUT.TEXT};
  font: 14px/16px var(--ff);
  border: 1px solid ${COLORS.INPUT.BORDER};
  ${OTHER.BORDER_RADIUS};
  overflow: auto;
  resize: none;

  &:hover,
  &:focus {
    border-color: ${COLORS.INPUT.TEXT};
  }

  &::placeholder {
    color: ${COLORS.TEXT.PLACE_HOLDER};
  }
`;

export default TextAreaStyles;
