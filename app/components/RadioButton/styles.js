import { css } from 'styled-components';

import { COLORS, SPACE_SIZE } from '@/utils/styleConstants';

const RadioButtonStyles = css`
  display: inline-block;
  height: 50px;
  margin: 0 ${SPACE_SIZE.XXXS};
  text-align: center;

  & > span {
    display: inline-block;
    text-align: center;
    margin: 0 0 ${SPACE_SIZE.XXXS} 0;
    font: 15px/18px var(--dff);

    ${props => css`
      color: ${props.isChecked ? COLORS.RADIO_BUTTON.SELECTED : COLORS.RADIO_BUTTON.PRIMARY};
    `}
  }

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    margin: auto;
    border: ${COLORS.RADIO_BUTTON.SECONDARY} 2px solid;
    border-radius: 14px;

    &:hover {
      border: ${COLORS.RADIO_BUTTON.SELECTED} 2px solid;
    }

    & > h1 {
      width: 18px;
      height: 18px;
      margin: 0;
      border-radius: 9px;

      ${props => css`
        background-color: ${props.isChecked
          ? COLORS.RADIO_BUTTON.SELECTED
          : COLORS.RADIO_BUTTON.NOT_SELECTED};
      `}
    }
  }
`;

export default RadioButtonStyles;
