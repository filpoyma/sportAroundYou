import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import injectStyles from '@/utils/injectStyles';
import { COLORS } from '@/utils/styleConstants';

const Label = ({ children, ...rest }) => <div {...rest}>{children}</div>;

Label.propTypes = {
  children: PropTypes.node
};

Label.defaultProps = {
  children: null
};

Label.displayName = 'BodyCompositionAnalysisLabel';

const styles = css`
  width: 158px;
  margin-top: 10px;

  color: ${COLORS.TEXT.PRIMARY};
  font: 14px/17px var(--dff);
`;

export default injectStyles(Label, styles);
