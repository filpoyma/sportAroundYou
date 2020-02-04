// import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { css } from 'styled-components';

import injectStyles from '@/utils/injectStyles';
import { COLORS, SPACE_SIZE } from '@/utils/styleConstants';

const Arrow = ({ ...rest }) => (
  <a {...rest}>
    <ArrowSvg />
  </a>
);

Arrow.propTypes = {};

Arrow.defaultProps = {};

Arrow.displayName = 'DateSelectorArrowElement';

const styles = css`
  margin: 0 ${SPACE_SIZE.XS};
  padding: ${SPACE_SIZE.XXXS} ${SPACE_SIZE.XXS};
  cursor: pointer;

  &:hover > svg > path {
    stroke: ${COLORS.TEXT.HOVER};
  }

  &:last-child > svg {
    transform: rotate(180deg);
  }
`;

const ArrowSvg = () => (
  <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 14.8571L1.5 8.57143" stroke="#A6BDD1" strokeLinecap="square" />
    <path d="M1 8L4.55218 3.94037L7 1.14286" stroke="#A6BDD1" strokeLinecap="square" />
  </svg>
);

export default memo(injectStyles(Arrow, styles), () => true);
