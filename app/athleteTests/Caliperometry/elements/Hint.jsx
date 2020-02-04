import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import injectStyles from '@/utils/injectStyles';
import { COLORS, SPACE_SIZE } from '@/utils/styleConstants';

const Hint = ({ className }) => (
  <div className={className}>
    <b>серым цветом — измерения со спины</b>
    <b>синим цветом — измерения спереди</b>
  </div>
);

Hint.propTypes = {
  className: PropTypes.string.isRequired
};

Hint.defaultProps = {};

Hint.displayName = 'CaliperometryTestHintElement';

const styles = css`
  margin: ${SPACE_SIZE.L} 0;
  text-align: center;

  b {
    color: ${COLORS.TEXT.PRIMARY};
    font: 700 10px/14px var(--ff);

    & + b {
      margin-left: ${SPACE_SIZE.XL};
      color: ${COLORS.BUTTON.PRIMARY.ORDINARY};
    }
  }
`;

export default injectStyles(Hint, styles);
