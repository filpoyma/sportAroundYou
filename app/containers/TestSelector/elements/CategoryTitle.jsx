import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { css } from 'styled-components';

import IconExpand from '@/images/icon-expand.svg?file';
import injectStyles from '@/utils/injectStyles';
import { COLORS, SPACE_SIZE } from '@/utils/styleConstants';

const CategoryTitle = ({ children, current, expanded, ...rest }) => (
  <span {...rest}>{children}</span>
);

CategoryTitle.propTypes = {
  current: PropTypes.bool,
  children: PropTypes.node.isRequired,
  expanded: PropTypes.bool
};

CategoryTitle.defaultProps = {
  current: false,
  expanded: false
};

CategoryTitle.displayName = 'TestSelectorCategoryTitleElement';

const styles = css`
  position: relative;
  display: block;
  height: 50px;
  padding: 0 ${SPACE_SIZE.XL} 0 ${SPACE_SIZE.S};
  color: ${COLORS.TEXT.PRIMARY};
  font: 13px/50px var(--ff);
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: ${COLORS.INPUT.HOVER};
  }

  &:after {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    right: ${SPACE_SIZE.XS};
    width: 12px;
    height: 6px;
    margin: auto;
    background: url(${IconExpand});
  }

  ${props =>
    props.current &&
    css`
      font-weight: 700;
    `}

  ${props =>
    props.expanded &&
    css`
      &:after {
        transform: rotate(-90deg);
      }
    `}
`;

export default memo(injectStyles(CategoryTitle, styles));
