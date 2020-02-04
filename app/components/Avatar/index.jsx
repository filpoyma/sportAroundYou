import PropTypes from 'prop-types';
import React, { memo } from 'react';

import injectStyles from '@/utils/injectStyles';

import styles from './styles';

const Avatar = ({ className }) => <div className={className} />;

Avatar.propTypes = {
  className: PropTypes.string.isRequired,
  // Used by StyledComponents
  url: PropTypes.string // eslint-disable-line react/no-unused-prop-types
};

Avatar.defaultProps = {
  url: ''
};

Avatar.displayName = 'AvatarComponent';

export default memo(injectStyles(Avatar, styles));
