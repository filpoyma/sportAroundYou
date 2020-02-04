import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { css } from 'styled-components';

import injectStyles from '@/utils/injectStyles';
import pluralize, { WORDS } from '@/utils/pluralize';
import { COLORS } from '@/utils/styleConstants';

const PersonAttributes = ({ age, height, weight, ...rest }) => (
  <div {...rest}>
    <p>
      {age}
      <span>{pluralize(parseInt(age, 10), WORDS.AGE.NOMINATIVE)}</span>
    </p>
    <p>
      {height}
      <span>см</span>
    </p>
    <p>
      {weight}
      <span>кг</span>
    </p>
  </div>
);

PersonAttributes.propTypes = {
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  weight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

PersonAttributes.defaultProps = {};

PersonAttributes.displayName = 'PersonCardPersonAttributesElement';

const styles = css`
  display: flex;
  justify-content: space-around;
  color: ${COLORS.TEXT.PRIMARY};

  & > p {
    margin: 0;
    font: 17px/20px var(--ff);
  }

  & > p > span {
    padding-left: 3px;
    color: ${COLORS.TEXT.PRIMARY_LIGHT};
    font: 11px/13px var(-ff);
  }
`;

export default memo(injectStyles(PersonAttributes, styles));
