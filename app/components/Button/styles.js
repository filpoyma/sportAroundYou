import { css } from 'styled-components';

import { COLORS, OTHER, SPACE_SIZE } from '@/utils/styleConstants';

import { BUTTON_CONSTANTS } from './constants';

const ButtonStyles = css`
  display: inline-block;

  ${props =>
    props.size === BUTTON_CONSTANTS.SIZE.RESPONSIVE &&
    css`
      display: flex;
      width: 100%;
    `}
  height: ${props => props.height};
  padding: 0 ${props => (props.size === BUTTON_CONSTANTS.SIZE.BIG ? SPACE_SIZE.XL : SPACE_SIZE.S)};
  background: ${props =>
    props.theme === BUTTON_CONSTANTS.THEME.BLUE
      ? COLORS.BUTTON.PRIMARY.ORDINARY
      : COLORS.BUTTON.WHITE.ORDINARY};
  color: ${props =>
    props.theme === BUTTON_CONSTANTS.THEME.BLUE
      ? COLORS.BUTTON.PRIMARY.TEXT_COLOR
      : COLORS.BUTTON.WHITE.TEXT_COLOR};
  border: none;
  font: 14px/40px var(--ff);
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  ${props => props.theme === BUTTON_CONSTANTS.THEME.BLUE && OTHER.BORDER_RADIUS};

  & i {
    padding: 0;
    margin: 0;
    margin-right: 10px;
  }

  &:hover:not(:disabled) {
    background: ${props =>
      props.theme === BUTTON_CONSTANTS.THEME.BLUE
        ? COLORS.BUTTON.PRIMARY.HOVER
        : COLORS.BUTTON.WHITE.HOVER};
  }

  &:active,
  &:focus {
    background: ${props =>
      props.theme === BUTTON_CONSTANTS.THEME.BLUE
        ? COLORS.BUTTON.PRIMARY.ACTIVE
        : COLORS.BUTTON.WHITE.ACTIVE};
  }

  &:disabled {
    filter: opacity(0.7);
  }
`;

export default ButtonStyles;
