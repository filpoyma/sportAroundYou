import PropTypes from 'prop-types';
import React, { memo } from 'react';

import injectStyles from '@/utils/injectStyles';

import styles from './styles';

const NavigationBack = ({ title, ...rest }) => (
  <a {...rest}>
    <span>{title}</span>
  </a>
);

NavigationBack.propTypes = {
  title: PropTypes.string
};

NavigationBack.defaultProps = {
  title: null
};

NavigationBack.displayName = 'NavigationBackComponent';

export default injectStyles(memo(NavigationBack), styles);
