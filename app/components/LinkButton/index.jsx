import PropTypes from 'prop-types';
import React, { memo } from 'react';

import injectStyles from '@/utils/injectStyles';

import styles from './styles';

const LinkButton = ({ children, ...rest }) => (
  <button type="button" {...rest}>
    {children}
  </button>
);

LinkButton.propTypes = {
  children: PropTypes.node.isRequired
};

LinkButton.defaultProps = {};

LinkButton.displayName = 'LinkButtonComponent';

export default injectStyles(
  memo(LinkButton, (prevProps, newProps) => prevProps.children === newProps.children),
  styles
);
