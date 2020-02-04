import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import injectStyles from '@/utils/injectStyles';
import { COLORS } from '@/utils/styleConstants';

const ZoneCircle = ({ className }) => <div className={className}></div>;

ZoneCircle.propTypes = {
  className: PropTypes.string.isRequired,
  // Used by StyledComponents
  color: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  // Used by StyledComponents
  number: PropTypes.number // eslint-disable-line react/no-unused-prop-types
};

ZoneCircle.defaultProps = {
  number: 1,
  color: 'none'
};

ZoneCircle.displayName = 'TableComponentTableZoneCircleElement';

const styles = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 12px;
  height: 12px;

  border-radius: 6px;

  margin-right: 10px;
  margin-bottom: 3px;

  ${props => css`
    background: ${props.color !== 'none' ? props.color : COLORS.ZONES[props.number]};
  `}
`;

export default injectStyles(ZoneCircle, styles);
