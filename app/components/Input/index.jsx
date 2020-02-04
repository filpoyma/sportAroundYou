import PropTypes from 'prop-types';
import React from 'react';

import injectStyles from '@/utils/injectStyles';

import styles from './styles';

const Input = ({ className, id, label, onChange, value }) => (
  <div className={className}>
    {label && <label htmlFor={id}>{label}:</label>}
    <input id={id} onChange={onChange} type="text" value={value} />
  </div>
);

Input.propTypes = {
  className: PropTypes.string.isRequired,
  // Used by StyledComponents
  error: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  // Used by StyledComponents
  labelWidth: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

Input.defaultProps = {
  error: false,
  label: '',
  labelWidth: 'auto',
  onChange: undefined,
  value: ''
};

Input.displayName = 'InputComponent';

export default injectStyles(Input, styles);
