import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { css } from 'styled-components';

import injectStyles from '@/utils/injectStyles';

class Modal extends Component {
  modalId = 'modal-id';

  handleClose = event => {
    const { onClose } = this.props;

    event.persist();
    if (event.target.id === this.modalId) onClose();
  };

  render() {
    const { className, children } = this.props;

    return (
      <div
        id={this.modalId}
        className={className}
        onKeyPress={this.handleClose}
        role="button"
        onClick={this.handleClose}
        tabIndex={0}
      >
        {children}
      </div>
    );
  }
}

Modal.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired
};

Modal.defaultProps = {};

Modal.displayName = 'ModalHOCComponentModalElement';

const styles = css`
  position: fixed;
  z-index: 1999;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  left: 0px;
  top: 0px;
  height: 100vh;
  width: 100vw;
  background: #00000099;
`;

export default injectStyles(Modal, styles);
