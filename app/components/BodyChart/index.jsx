import PropTypes from 'prop-types';
import React from 'react';

import { hashMemo } from '@/utils/hashData';
import injectStyles from '@/utils/injectStyles';
import { COLORS } from '@/utils/styleConstants';

import ParameterLabel from './elements/ParameterLabel';
import styles from './styles';

const BodyChart = ({ className, data, gender }) => (
  <div className={className}>
    <h3>Мышечный баланс (тощая масса)</h3>
    <ParameterLabel
      id="trunk"
      color={COLORS.SUNBURST.LAST}
      gender={gender}
      label="ТУЛОВИЩЕ"
      value={data?.trunk}
    />
    <ParameterLabel
      id="rightArm"
      color={COLORS.SUNBURST.CHILD}
      gender={gender}
      label="ПРАВАЯ РУКА"
      value={data?.rightArm}
    />
    <ParameterLabel
      id="leftArm"
      color={COLORS.SUNBURST.CHILD}
      gender={gender}
      label="ЛЕВАЯ РУКА"
      value={data?.leftArm}
    />
    <ParameterLabel
      id="rightLeg"
      color={COLORS.SUNBURST.FIRST}
      gender={gender}
      label="ПРАВАЯ НОГА"
      value={data?.rightLeg}
    />
    <ParameterLabel
      id="leftLeg"
      color={COLORS.SUNBURST.FIRST}
      gender={gender}
      label="ЛЕВАЯ НОГА"
      value={data?.leftLeg}
    />
  </div>
);

BodyChart.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.shape({
    trunk: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    rightArm: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    leftArm: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    rightLeg: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    leftLeg: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }),
  gender: PropTypes.oneOf(['F', 'M']).isRequired
};

BodyChart.defaultProps = {
  data: {}
};

BodyChart.displayName = 'BodyChartComponent';

BodyChart.whyDidYouRender = true;

export default injectStyles(hashMemo(BodyChart), styles);
