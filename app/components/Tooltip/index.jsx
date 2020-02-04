import PropTypes from 'prop-types';
import React from 'react';

import injectStyles from '@/utils/injectStyles';

import styles from './styles';

const Tooltip = ({ className, content }) => (
  <i className={className}>
    i
    <div>
      <div>{content}</div>
    </div>
  </i>
);

Tooltip.propTypes = {
  className: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired
};

Tooltip.defaultProps = {};

Tooltip.displayName = 'TooltipComponent';

export default injectStyles(Tooltip, styles);
