import PropTypes from 'prop-types';
import React from 'react';

import injectStyles from '@/utils/injectStyles';

import styles from './styles';

const Spinner = ({ className }) => <div className={className} />;

Spinner.propTypes = {
  className: PropTypes.string.isRequired,
  // Used by StyledComponent
  position: PropTypes.oneOf(['absolute', 'relative']), // eslint-disable-line react/no-unused-prop-types
  // Used by StyledComponents
  size: PropTypes.oneOf(['small', 'normal', 'big']) // eslint-disable-line react/no-unused-prop-types
};

Spinner.defaultProps = {
  position: 'absolute',
  size: 'normal'
};

Spinner.displayName = 'SpinnerComponent';

export default injectStyles(Spinner, styles);
