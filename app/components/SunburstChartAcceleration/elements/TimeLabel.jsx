import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import injectStyles from '@/utils/injectStyles';
import { COLORS } from '@/utils/styleConstants';

const CenterLabel = ({ label, value, units, ...rest }) => (
  <div {...rest}>
    <p>{label}</p>
    <p>{value}</p>
    <p>{units}</p>
  </div>
);

CenterLabel.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  units: PropTypes.string.isRequired
};

CenterLabel.defaultProps = {};

CenterLabel.displayName = 'SunburstChartCenterLabelElement';

const styles = css`
  position: absolute;
  top: 80px;
  width: 100%;
  text-align: center;

  & > p {
    margin: 0;
    color: ${COLORS.TEXT.PRIMARY};
    font: 700 18px/21px var(--dff);

    &:nth-child(2) {
      font-size: 28px;
      line-height: 34px;
    }
  }
`;

export default injectStyles(CenterLabel, styles);
