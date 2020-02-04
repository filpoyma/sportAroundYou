import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { css } from 'styled-components';

import Box from '@/components/Box';
import SpeedometerChart from '@/components/SpeedometerChart';
import SunburstChart from '@/components/SunburstChartAcceleration';
import { getDates } from '@/containers/DateSelector/actions';
import TestResults from '@/containers/TestResults';
import injectLogic from '@/utils/injectLogic';
import injectReducer from '@/utils/injectReducer';
import injectStyles from '@/utils/injectStyles';
import { COLORS } from '@/utils/styleConstants';

import CONSTANTS from './constants';
import logic from './logic';
import reducer from './reducer';
import {
  makeSelectLeftChartData,
  makeSelectRightChartData,
  makeSelectSpeedometerData,
  makeSelectStatus
} from './selectors';

class AccelerationSideStanceTest extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getDates(CONSTANTS.DATES_PATH));
  }

  render() {
    const {
      className,
      speedometerData,
      leftChartData,
      rightChartData,
      status,
      statusByRange
    } = this.props;
    const valueR = speedometerData?.valueR ?? 0;
    const valueL = speedometerData?.valueL ?? 0;

    return (
      <TestResults status={status}>
        <Box status={statusByRange} title="Скоростно-силовые показатели">
          <div className={className}>
            <div>
              <h3>Правая Стойка</h3>
              <SunburstChart {...rightChartData} mainTitle="Правая стойка" />
            </div>
            <div className="AScontainer">
              <h3>Левая стойка</h3>
              <SunburstChart {...leftChartData} mainTitle="Левая стойка" />
            </div>
          </div>
        </Box>
        <Box title="Скорость разгона">
          <div className={className}>
            <div>
              <h3>Правая стойка</h3>
              <SpeedometerChart minValue={0} maxValue={5} value={valueR} />
            </div>
            <div>
              <h3>Левая стойка</h3>
              <SpeedometerChart minValue={0} maxValue={5} value={valueL} />
            </div>
          </div>
        </Box>
      </TestResults>
    );
  }
}

AccelerationSideStanceTest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  speedometerData: PropTypes.object,
  leftChartData: PropTypes.object,
  rightChartData: PropTypes.object,
  status: PropTypes.string.isRequired,
  statusByRange: PropTypes.string.isRequired
};

AccelerationSideStanceTest.defaultProps = {
  speedometerData: null,
  leftChartData: null,
  rightChartData: null
};

AccelerationSideStanceTest.displayName = 'AccelerationSideStanceTest';

const mapStateToProps = createStructuredSelector({
  speedometerData: makeSelectSpeedometerData(),
  leftChartData: makeSelectLeftChartData(),
  rightChartData: makeSelectRightChartData(),
  status: makeSelectStatus(CONSTANTS.REDUCER_KEY.RESULTS),
  statusByRange: makeSelectStatus(CONSTANTS.REDUCER_KEY.RESULTS_BY_RANGE)
});

const withConnect = connect(mapStateToProps);
const withLogic = injectLogic({ logic, type: 'test' });
const withReducer = injectReducer({ key: CONSTANTS.REDUCER_KEY.KEY, reducer });

const styles = css`
  display: flex;
  justify-content: space-around;

  h3 {
    color: ${COLORS.TEXT.PRIMARY};
    font: 700 15px/20px var(--ff);
    text-align: center;
  }
`;

export default compose(
  withConnect,
  withLogic,
  withReducer
)(injectStyles(AccelerationSideStanceTest, styles));
