import PropTypes from 'prop-types';
import React from 'react';

import injectStyles from '@/utils/injectStyles';

import styles from './styles';

const Wrapper = ({ children, ...rest }) => <div {...rest}>{children}</div>;

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
};

Wrapper.defaultProps = {};

Wrapper.displayName = 'WrapperComponent';

export default injectStyles(Wrapper, styles);
