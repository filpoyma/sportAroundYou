import PropTypes from 'prop-types';
import React from 'react';

import { RESULT_KEY } from '@/athleteTests/Anthropometry/constants';
import { hashMemo } from '@/utils/hashData';
import injectStyles from '@/utils/injectStyles';

import Label from './elements/Label';
import styles from './styles';

export const KEYS = [
  RESULT_KEY.SHOULDER_DIAMETER,
  RESULT_KEY.FOREARM_DIAMETER,
  RESULT_KEY.HIP_DIAMETER,
  RESULT_KEY.SHIN_DIAMETER,
  RESULT_KEY.LEG_LENGTH,
  RESULT_KEY.HIP_LENGTH
];

const AnthropometryChart = ({ className, data, gender }) => (
  <div className={className}>
    {Object.keys(data)
      .filter(key => KEYS.some(keyOfType => key === keyOfType))
      .map(key => (
        <Label
          id={key}
          gender={gender}
          key={`anthropometry_chart_label_${key}`}
          value={data?.[key]}
        />
      ))}
  </div>
);

AnthropometryChart.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.object,
  gender: PropTypes.oneOf(['F', 'M']).isRequired
};

AnthropometryChart.defaultProps = {
  data: {}
};

AnthropometryChart.displayName = 'AnthropometryChartComponent';

AnthropometryChart.whyDidYouRender = true;

export default injectStyles(hashMemo(AnthropometryChart), styles);
