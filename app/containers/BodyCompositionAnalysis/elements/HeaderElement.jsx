import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import injectStyles from '@/utils/injectStyles';
import { COLORS } from '@/utils/styleConstants';

const HeaderElement = ({ children, isSecondary, ...rest }) => <div {...rest}>{children}</div>;

HeaderElement.propTypes = {
  children: PropTypes.node.isRequired,
  isSecondary: PropTypes.bool
};

HeaderElement.defaultProps = {
  isSecondary: false
};

HeaderElement.displayName = 'BodyCompositionAnalysisHeaderElement';

const styles = css`
  width: 17%;
  &:first-child {
    width: 33%;
  }

  &:last-child {
    width: 50%;
  }

  & + & {
    border-left: 1px solid #fff;
  }

  background: ${COLORS.PRIMARY};

  ${props =>
    props.isSecondary &&
    css`
      background: ${COLORS.SECONDARY};
    `}
`;

export default injectStyles(HeaderElement, styles);
