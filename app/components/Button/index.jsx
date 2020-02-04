import PropTypes from 'prop-types';
import React from 'react';

import IconSvg from '@/components/IconSvg';
import injectStyles from '@/utils/injectStyles';

import { BUTTON_CONSTANTS } from './constants';
import styles from './styles';

export const { SIZE } = BUTTON_CONSTANTS;
export const { THEME } = BUTTON_CONSTANTS;

const Button = ({ children, disabled, className, onClick, prefixIcon }) => (
  <button className={className} disabled={disabled} onClick={onClick} type="button">
    {prefixIcon && (
      <i>
        <IconSvg type={prefixIcon} />
      </i>
    )}
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  // Used by StyledComponents
  size: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  // Used by StyledComponents
  theme: PropTypes.oneOf([BUTTON_CONSTANTS.THEME.BLUE, BUTTON_CONSTANTS.THEME.WHITE]), // eslint-disable-line react/no-unused-prop-types
  // Used by StyledComponents
  height: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  prefixIcon: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  disabled: false,
  height: '40px',
  onClick: undefined,
  prefixIcon: null,
  size: BUTTON_CONSTANTS.SIZE.NORMAL,
  theme: BUTTON_CONSTANTS.THEME.BLUE
};

Button.displayName = 'ButtonComponent';

export default injectStyles(Button, styles);
