import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { css } from 'styled-components';

import Box from '@/components/Box';
import SpeedometerChart from '@/components/SpeedometerChart';
// import PieChart from '@/components/PieChart';
// // import LineChart from '@/components/LineChart';
import { getDates } from '@/containers/DateSelector/actions';
import TestResults from '@/containers/TestResults';
import injectStyles from '@/utils/injectStyles';
import { COLORS } from '@/utils/styleConstants';

// import injectLogic from '@/utils/injectLogic';
// import injectReducer from '@/utils/injectReducer';
import CONSTANTS, { INTERPRETATION } from './constants';
import LineChart from './elements/LineChart';
// import logic from './logic';
// import reducer from './reducer';
import {
  // makeSelectDynamic,
  makeSelectResultsByRange,
  makeSelectStatus
} from './selectors';

const data = [
  {
    id: 'производительность',
    color: COLORS.CHARTS.PIE_CHART.GREY,
    data: [
      {
        x: '01:00',
        y: 5
      },
      {
        x: '02:00',
        y: 8
      },
      {
        x: '03:00',
        y: 2
      },
      {
        x: '04:00',
        y: 1
      }
    ],
    yMin: Math.min(0),
    yMax: Math.max(20)
  },
  {
    id: 'param_2',
    color: COLORS.CHARTS.PIE_CHART.BLUE,
    data: [
      {
        x: '01:00',
        y: 5
      },
      {
        x: '02:00',
        y: 2
      },
      {
        x: '04:00',
        y: 16
      }
    ],
    yMin: Math.min(0),
    yMax: Math.max(5)
  }
];

class VisualAttention extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getDates(CONSTANTS.DATES_PATH));
  }

  render() {
    // const { className, status, statusByRange } = this.props;
    const { className } = this.props;

    return (
      // <TestResults status={status}>
      <TestResults status="loaded">
        {/* <Box status={statusByRange} title="Результаты тестирования"> */}
        <Box status="loaded" title="Результаты тестирования">
          <div className={className}>
            <SpeedometerChart
              minValue={0}
              minValueLabel="0:00"
              maxValue={7}
              maxValueLabel="7:00"
              value={3.5}
              valueLabel="4:30"
              markers={[{ value: 2, label: '4:15' }, { value: 5, label: '4:45' }]}
            />
            <div>
              <h3>Время обработки информации</h3>
              <p>{INTERPRETATION.EFFICIENCY.LEVEL_2}</p>
            </div>
          </div>
          <div className={className}>
            <SpeedometerChart
              minValue={0}
              minValueLabel="0,00"
              maxValue={1}
              maxValueLabel="1,00"
              value={0.6}
              valueLabel="0.87"
              markers={[{ value: 0.33, label: '0.85' }, { value: 0.67, label: '0.89' }]}
            />
            <div>
              <h3>Точность</h3>
              <p>{INTERPRETATION.ACCURACY.LEVEL_3}</p>
            </div>
          </div>
        </Box>

        <Box status="loaded" title="Сводный график">
          <LineChart data={data} legend="" units="" />
        </Box>
      </TestResults>
    );
  }
}

VisualAttention.propTypes = {
  className: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

VisualAttention.displayName = 'VisualAttentionComponent';

const mapStateToProps = createStructuredSelector({
  results: makeSelectResultsByRange(),
  status: makeSelectStatus(CONSTANTS.REDUCER_KEY.RESULTS),
  statusByRange: makeSelectStatus(CONSTANTS.REDUCER_KEY.RESULTS_BY_RANGE)
});

const withConnect = connect(mapStateToProps);

const styles = css`
  display: flex;
  justify-content: space-around;
  height: 120px;
  color: ${COLORS.TEXT.PRIMARY};

  & > div:nth-child(2) {
    width: 350px;
    font: 14px/16px var(--dff);

    h3 {
      font: 700 15px/20px var(--ff);
    }
  }
`;

export default compose(withConnect)(injectStyles(VisualAttention, styles));
