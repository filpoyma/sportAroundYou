import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { hashMemo } from '@/utils/hashData';
import injectStyles from '@/utils/injectStyles';

import { CHART_TYPE } from './constants';
import Fill from './elements/Fill';
import FillVertical from './elements/FillVertical';
import Stacked from './elements/Stacked';
import styles from './styles';

let Bar;

class BarChart extends Component {
  constructor(props) {
    super(props);

    switch (props.type) {
      case CHART_TYPE.STACKED:
        Bar = Stacked;
        break;
      case CHART_TYPE.FILL_VERTICAL:
        Bar = FillVertical;
        break;
      case CHART_TYPE.FILL:
      default:
        Bar = Fill;
        break;
    }
  }

  render() {
    const { className, data, lineSize, units } = this.props;

    return <Bar className={className} data={data} lineSize={lineSize} units={units} />;
  }
}

BarChart.propTypes = {
  // Used by StyledComponents
  barSize: PropTypes.string, // eslint-disable-line
  className: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  // Used by StyledComponents
  lineSize: PropTypes.string, // eslint-disable-line
  // Used by StyledComponents
  outerSize: PropTypes.string, // eslint-disable-line
  type: PropTypes.oneOf(Object.values(CHART_TYPE)),
  units: PropTypes.string
};

BarChart.defaultProps = {
  barSize: '100%',
  lineSize: '30px',
  outerSize: '110px',
  type: CHART_TYPE.FILL,
  units: ''
};

BarChart.displayName = 'BarChartComponent';

BarChart.whyDidYouRender = true;

export const TYPE = CHART_TYPE;

export default injectStyles(hashMemo(BarChart), styles);
