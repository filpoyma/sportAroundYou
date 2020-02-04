import PropTypes from 'prop-types';
import React from 'react';

import { hashMemo } from '@/utils/hashData';
import injectStyles from '@/utils/injectStyles';

import Label from './elements/Label';
import styles from './styles';

const CaliperometryChart = ({ className, data, gender }) => (
  <div className={className}>
    {data.map(({ id, label, value }) => (
      <Label
        id={id}
        gender={gender}
        key={`calipometry_chart_label_${id}`}
        label={label}
        value={value}
      />
    ))}
  </div>
);

CaliperometryChart.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.array,
  gender: PropTypes.oneOf(['F', 'M']).isRequired
};

CaliperometryChart.defaultProps = {
  data: []
};

CaliperometryChart.displayName = 'CaliperometryChartComponent';

CaliperometryChart.whyDidYouRender = true;

export default injectStyles(hashMemo(CaliperometryChart), styles);
