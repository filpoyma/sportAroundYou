import PropTypes from 'prop-types';
import React from 'react';

import injectStyles from '@/utils/injectStyles';

import styles from './styles';

const RadioButton = ({ className, onChange, title }) => (
  <div className={className}>
    <span>{title}</span>
    <div onKeyPress={onChange} onClick={onChange} role="button" tabIndex={0}>
      <h1 />
    </div>
  </div>
);

RadioButton.propTypes = {
  className: PropTypes.string.isRequired,
  // Used by StyledComponents
  isChecked: PropTypes.bool.isRequired, // eslint-disable-line react/no-unused-prop-types
  onChange: PropTypes.func,
  title: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

RadioButton.defaultProps = {
  onChange: undefined,
  title: ''
};

RadioButton.displayName = 'RadioButtonComponent';

export default injectStyles(RadioButton, styles);
