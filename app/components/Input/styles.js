import { css } from 'styled-components';

import { COLORS, OTHER, SPACE_SIZE } from '@/utils/styleConstants';

const InputStyles = css`
  & label {
    display: inline-block;
    width: ${props => props.labelWidth};
    margin-right: ${SPACE_SIZE.M};
    color: ${COLORS.INPUT.TEXT};
    font: 16px/26px var(--dff);
  }

  & input {
    width: 220px;
    padding: ${SPACE_SIZE.XXS} ${SPACE_SIZE.XS};
    color: ${COLORS.INPUT.TEXT};
    font: 14px/16px var(--ff);
    border: 1px solid ${COLORS.INPUT.BORDER};
    ${OTHER.BORDER_RADIUS};

    ${props =>
      props.error &&
      css`
        border-color: ${COLORS.ERROR};
      `}

    ${props =>
      !props.error &&
      css`
        &:hover,
        &:focus {
          border-color: ${COLORS.INPUT.TEXT};
        }
      `}


    &::placeholder {
      color: ${COLORS.TEXT.PLACE_HOLDER};
    }
  }
`;

export default InputStyles;
