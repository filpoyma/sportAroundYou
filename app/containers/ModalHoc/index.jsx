import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

import Modal from './elements/Modal';

// это HOC, который оборачивает переданный компонент в портал и позволяет ему перекрывать все другие компоненты
// на входе принимает WrappedComponent

const ModalHOC = ({ children, show, onClose }) => {
  const element = document.getElementById('app');

  if (!show || !element) {
    return null;
  }

  return ReactDOM.createPortal(<Modal onClose={onClose}>{children}</Modal>, element);
};

ModalHOC.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

ModalHOC.defaultProps = {};

ModalHOC.displayName = 'ModalHOCComponent';

export default ModalHOC;
