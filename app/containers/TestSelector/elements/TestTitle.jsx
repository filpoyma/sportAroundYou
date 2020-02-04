import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'styled-components';

import injectStyles from '@/utils/injectStyles';
import { COLORS, SPACE_SIZE } from '@/utils/styleConstants';

const TestTitle = ({ className, children, url, onClick }) => {
  if (onClick) {
    return (
      <div className={className} onKeyPress={onClick} role="button" onClick={onClick} tabIndex={0}>
        {children}
      </div>
    );
  }

  return (
    <Link to={url} className={className}>
      {children}
    </Link>
  );
};

TestTitle.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  // Used by StyledComponents
  current: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  url: PropTypes.string,
  onClick: PropTypes.func
};

TestTitle.defaultProps = {
  current: false,
  url: '',
  onClick: undefined
};

TestTitle.displayName = 'TestSelectorTestTitleElement';

const styles = css`
  position: relative;
  display: block;
  padding: ${SPACE_SIZE.XXS} ${SPACE_SIZE.XS} ${SPACE_SIZE.XXS} ${SPACE_SIZE.L};
  color: ${COLORS.TEXT.PRIMARY};
  font: 15px/17px var(--ff);
  text-decoration: none;
  hyphens: auto;
  cursor: pointer;

  &:hover {
    background: ${COLORS.INPUT.HOVER};
  }

  &:last-child {
    margin-bottom: ${SPACE_SIZE.S};
  }

  ${props =>
    props.current &&
    css`
      font-weight: 700;

      &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 3px;
        height: 24px;
        margin: auto;
        background: ${COLORS.TEXT.HOVER};
      }
    `}
`;

export default injectStyles(TestTitle, styles);
