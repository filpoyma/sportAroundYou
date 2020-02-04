// import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import injectStyles from '@/utils/injectStyles';

import HeaderElement from './HeaderElement';

const Header = props => (
  <div {...props}>
    <HeaderElement>недостаток</HeaderElement>
    <HeaderElement isSecondary>норма</HeaderElement>
    <HeaderElement>превышение</HeaderElement>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

Header.displayName = 'BodyCompositionAnalysisHeader';

const styles = css`
  display: flex;

  margin-right: 40px;
  margin-left: 185px;

  font: bold 10px/14px var(--ff);
  text-align: center;
  color: #fff;
`;

export default injectStyles(Header, styles);
