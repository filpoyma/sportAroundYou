import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { css } from 'styled-components';

import injectStyles from '@/utils/injectStyles';
import { COLORS, SPACE_SIZE } from '@/utils/styleConstants';

const PersonTitle = ({ name, sportType, ...rest }) => (
  <div {...rest}>
    <h3>{name}</h3>
    <p>{sportType}</p>
  </div>
);

PersonTitle.propTypes = {
  name: PropTypes.string.isRequired,
  sportType: PropTypes.string.isRequired
};

PersonTitle.defaultProps = {};

PersonTitle.displayName = 'PersonCardPersonTitleElement';

const styles = css`
  display: inline-block;

  & > h3 {
    margin: 0;
    color: ${COLORS.TITLE};
    font: 700 17px/23px var(--ff);
  }

  & > p {
    margin: ${SPACE_SIZE.XXXS} 0 0;
    color: ${COLORS.TEXT.PRIMARY_LIGHT};
    font: 12px/14px var(--ff);
    text-transform: lowercase;
  }
`;

export default memo(injectStyles(PersonTitle, styles));
