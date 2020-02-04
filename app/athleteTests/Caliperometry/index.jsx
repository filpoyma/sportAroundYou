import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Box from '@/components/Box';
import CaliperometryChart from '@/components/CaliperometryChart';
import BarChart, { TYPE as CHART_TYPE } from '@/components/NewBarChart';
import Plates from '@/components/Plates';
// import LineChart from '@/components/LineChart';
import Spinner from '@/components/Spinner';
import { getDates } from '@/containers/DateSelector/actions';
import { makeSelectPersonGender } from '@/pages/TestPage/selectors';
import { REQUEST_STATUS } from '@/utils/constants';
import injectLogic from '@/utils/injectLogic';
import injectReducer from '@/utils/injectReducer';

import { API_PATH, STATE_KEY } from './constants';
import Hint from './elements/Hint';
import TotalChart from './elements/TotalChart';
import logic from './logic';
import reducer from './reducer';
import {
  makeSelectBarChartData,
  makeSelectPlatesData,
  // makeSelectDynamic,
  makeSelectResultsByRange,
  makeSelectStatus
} from './selectors';

const Error = () => <Box title="Ошибка">Не удалось получить результаты тестирования</Box>;
const Loader = () => <Spinner position="relative" size="big" />;

class CaliperomteryTest extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getDates(API_PATH));
  }

  render() {
    const {
      barChartData,
      personGender,
      platesData,
      results,
      statusCaliperomtery,
      statusCaliperomteryByRange
    } = this.props;

    if (statusCaliperomtery === REQUEST_STATUS.ERROR) {
      return <Error />;
    }

    if (statusCaliperomtery === REQUEST_STATUS.LOADING) {
      return <Loader />;
    }

    return (
      <>
        <Box status={statusCaliperomteryByRange} title="Калиперометрия">
          <CaliperometryChart {...results} gender={personGender} />
          <Hint />
          <BarChart {...barChartData} type={CHART_TYPE.STACKED} />
          <TotalChart {...barChartData} />
          <Plates data={platesData} />
        </Box>
        {/* <Box title="Динамика">
        </Box> */}
      </>
    );
  }
}

CaliperomteryTest.propTypes = {
  barChartData: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  personGender: PropTypes.oneOf(['F', 'M']).isRequired,
  platesData: PropTypes.array,
  results: PropTypes.object,
  statusCaliperomtery: PropTypes.string.isRequired,
  statusCaliperomteryByRange: PropTypes.string.isRequired
};

CaliperomteryTest.defaultProps = {
  barChartData: [],
  platesData: [],
  results: {}
};

CaliperomteryTest.displayName = 'CaliperomteryTest';

// CaliperomteryTest.whyDidYouRender = true;

const mapStateToProps = createStructuredSelector({
  barChartData: makeSelectBarChartData(),
  personGender: makeSelectPersonGender(),
  platesData: makeSelectPlatesData(),
  results: makeSelectResultsByRange(),
  statusCaliperomtery: makeSelectStatus(STATE_KEY.RESULTS),
  statusCaliperomteryByRange: makeSelectStatus(STATE_KEY.RESULTS_BY_RANGE)
});

const withConnect = connect(mapStateToProps);
const withLogic = injectLogic({ logic, type: 'test' });
const withReducer = injectReducer({ key: STATE_KEY.MAIN, reducer });

export default compose(
  withConnect,
  withLogic,
  withReducer
)(CaliperomteryTest);
