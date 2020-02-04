import PropTypes from 'prop-types';
import React from 'react';

import Spinner from '@/components/Spinner';
import { REQUEST_STATUS } from '@/utils/constants';
import injectStyles from '@/utils/injectStyles';

import styles from './styles';

const Error = () => <p>Ошибка при получении данных</p>;
const Loading = () => <Spinner position="relative" />;

const Box = ({ className, children, title, status }) => {
  let content = children;

  if (status === REQUEST_STATUS.LOADING) {
    content = <Loading />;
  }

  if (status === REQUEST_STATUS.ERROR) {
    content = <Error />;
  }

  return (
    <div className={className}>
      {title && <h3>{title}</h3>}
      {content}
    </div>
  );
};

Box.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
  // Used by StyledComponent
  flex: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  status: PropTypes.string,
  title: PropTypes.string
};

Box.defaultProps = {
  children: null,
  flex: false,
  status: REQUEST_STATUS.LOADED,
  title: null
};

Box.displayName = 'BoxComponent';

export default injectStyles(Box, styles);
