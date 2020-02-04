import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import injectStyles from '@/utils/injectStyles';
import { OTHER, SPACE_SIZE } from '@/utils/styleConstants';

const AnswersContainer = ({ children, className }) => <div className={className}>{children}</div>;

AnswersContainer.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

AnswersContainer.defaultProps = {};

AnswersContainer.displayName = 'StressAndRecoveryTestAnswersContainerElement';

const styles = css`
  padding: ${SPACE_SIZE.XS} 0;

  & > hr {
    ${OTHER.HR}
  }
`;

export default injectStyles(AnswersContainer, styles);
