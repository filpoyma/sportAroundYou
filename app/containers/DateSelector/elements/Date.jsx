import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import injectStyles from '@/utils/injectStyles';
import { COLORS, SPACE_SIZE } from '@/utils/styleConstants';

const Date = ({ children, ...rest }) => <a {...rest}>{children}</a>;

Date.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool
};

Date.defaultProps = {
  selected: false
};

Date.displayName = 'DateSelectorDateElement';

const styles = css`
  z-index: 1;
  position: relative;
  color: ${COLORS.INPUT.TEXT};
  font: 13px/15px var(--ff);

  & + & {
    margin-left: ${SPACE_SIZE.XL};
  }

  ${props =>
    !props.selected &&
    css`
      cursor: pointer;

      &:hover {
        color: ${COLORS.TEXT.HOVER};
      }
    `}

  ${props =>
    props.selected &&
    css`
      z-index: 0;
      &::after {
        content: '';
        z-index: -1;
        position: absolute;
        top: -4px;
        bottom: -4px;
        left: -${SPACE_SIZE.XS};
        right: -${SPACE_SIZE.XS};
        background: #ebecf0;
        border-radius: 2px;
      }
    `}
`;

export default injectStyles(Date, styles);
