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
import { COLORS, SPACE_SIZE } from '@/utils/styleConstants';

import CONSTANTS from './constants';
import logic from './logic';
import reducer from './reducer';
import { makeSelectChartData, makeSelectSpeedometerData, makeSelectStatus } from './selectors';

class AccelerationDirectStanceTest extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getDates(CONSTANTS.DATES_PATH));
  }

  render() {
    const { className, chartData, speedometerValue, status, statusByRange } = this.props;
    const value = speedometerValue?.value ?? 0;

    return (
      <TestResults status={status}>
        <Box status={statusByRange} title="Скоростно-силовые показатели">
          {/* <Box title="Скоростно-силовые показатели"> */}
          <div className={className}>
            <SunburstChart {...chartData} />
            <div>
              Общее время преодоления дистанции (Время) можно представить как сумму Времени разгона
              служит в качестве одного из показателей подготовленности – способности к быстрому
              ускорению. Кроме этого фиксировалась фиксировалась Длительность первого шага первого
              первого шага – характеристика скорости реакции.
            </div>
          </div>
        </Box>

        <Box title="Скорость разгона">
          <div className={className}>
            <div>
              <SpeedometerChart minValue={0} maxValue={5} value={value} />
            </div>
            <p>
              Средняя скорость разгона – отношение длины преодоленной дистанции к времени разгона.
            </p>
          </div>
        </Box>
      </TestResults>
    );
  }
}

AccelerationDirectStanceTest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  chartData: PropTypes.object,
  speedometerValue: PropTypes.object,
  status: PropTypes.string.isRequired,
  statusByRange: PropTypes.string.isRequired
};

AccelerationDirectStanceTest.defaultProps = {
  chartData: null,
  speedometerValue: null
};

AccelerationDirectStanceTest.displayName = 'AccelerationDirectStanceTest';

const mapStateToProps = createStructuredSelector({
  chartData: makeSelectChartData(),
  speedometerValue: makeSelectSpeedometerData(),
  status: makeSelectStatus(CONSTANTS.REDUCER_KEY.RESULTS),
  statusByRange: makeSelectStatus(CONSTANTS.REDUCER_KEY.RESULTS_BY_RANGE)
});

const withConnect = connect(mapStateToProps);
const withLogic = injectLogic({ logic, type: 'test' });
const withReducer = injectReducer({ key: CONSTANTS.REDUCER_KEY.KEY, reducer });

const styles = css`
  display: flex;
  color: ${COLORS.TEXT.PRIMARY};
  font: 14px/16px var(--dff);

  ${SunburstChart} {
    width: 250px;
    margin-right: ${SPACE_SIZE.M};
  }

  & > ${SunburstChart} + div {
    padding-top: ${SPACE_SIZE.XL};
    width: 310px;
  }

  & > p {
    width: 310px;
    padding-top: ${SPACE_SIZE.XS};
  }

  & > :first-child:not(${SunburstChart}) {
    flex: 1;
    margin: 0 ${SPACE_SIZE.M} 0 35px;
  }
`;

export default compose(
  withConnect,
  withLogic,
  withReducer
)(injectStyles(AccelerationDirectStanceTest, styles));
