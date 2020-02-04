import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import injectStyles from '@/utils/injectStyles';

const Row = ({ children, ...rest }) => <div {...rest}>{children}</div>;

Row.propTypes = {
  children: PropTypes.node
};

Row.defaultProps = {
  children: null
};

Row.displayName = 'BodyCompositionAnalysisRow';

const styles = css`
  display: flex;
`;

export default injectStyles(Row, styles);
