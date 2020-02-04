import PropTypes from 'prop-types';
import React from 'react';

import Tooltip from '@/components/Tooltip';
import injectStyles from '@/utils/injectStyles';

import styles from './styles';

const PageTitle = ({ className, description, title }) => (
  <div className={className}>
    <h1>
      {title}
      {description && <Tooltip content={description} />}
    </h1>
  </div>
);

PageTitle.propTypes = {
  className: PropTypes.string.isRequired,
  description: PropTypes.string,
  title: PropTypes.string
};

PageTitle.defaultProps = {
  description: undefined,
  title: null
};

PageTitle.displayName = 'PageTitleContainer';

export default injectStyles(PageTitle, styles);
