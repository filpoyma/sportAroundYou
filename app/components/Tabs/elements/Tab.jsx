import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import injectStyles from '@/utils/injectStyles';
import { COLORS, SPACE_SIZE } from '@/utils/styleConstants';

const Tab = ({ className, onClick, title }) => (
  <button className={className} onClick={onClick} type="button">
    {title}
  </button>
);

Tab.propTypes = {
  className: PropTypes.string.isRequired,
  // Used by StyledComponents
  current: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  onClick: PropTypes.func.isRequired,
  title: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

Tab.defaultProps = {
  current: false
};

Tab.displayName = 'TabsComponentTabElement';

const styles = css`
  width: 50%;
  padding: ${SPACE_SIZE.S} ${SPACE_SIZE.S} 17px;
  background: 0;
  color: #0e88ff;
  font: 700 17px/20px var(--dff);
  border: 0;
  outline: 0;
  cursor: pointer;

  &:hover {
    color: ${COLORS.TEXT.PRIMARY};
  }

  ${props =>
    props.current &&
    css`
      color: ${COLORS.TEXT.PRIMARY};
      border-bottom: 3px solid #0e88ff;
    `}
`;

export default injectStyles(Tab, styles);
