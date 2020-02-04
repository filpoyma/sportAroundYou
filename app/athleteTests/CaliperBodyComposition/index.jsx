import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Hint from '@/athleteTests/Caliperometry/elements/Hint';
import TotalChart from '@/athleteTests/Caliperometry/elements/TotalChart';
import AnthropometryChart from '@/components/AnthropometryChart';
import Box from '@/components/Box';
import CaliperometryChart from '@/components/CaliperometryChart';
import BarChart, { TYPE as BAR_CHART_TYPE } from '@/components/NewBarChart';
import SunburstChart from '@/components/SunburstChart';
import { getDates } from '@/containers/DateSelector/actions';
import TestResults from '@/containers/TestResults';
import { makeSelectPersonGender } from '@/pages/TestPage/selectors';
import injectLogic from '@/utils/injectLogic';
import injectReducer from '@/utils/injectReducer';
import injectStyles from '@/utils/injectStyles';

import CONSTANTS from './constants';
import logic from './logic';
import reducer from './reducer';
import {
  makeSelectBarChartFatData,
  makeSelectFatMuscleRatio,
  makeSelectResultsFatByRange,
  makeSelectResultsGirthByRange,
  makeSelectStatus
} from './selectors';
import styles from './styles';

class CaliperBodyCompositionTest extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getDates(CONSTANTS.DATES_PATH));
  }

  render() {
    const {
      barChartFatData,
      personGender,
      sunburstChartResults,
      anthropometryChartResults,
      caliperometryChartResults,
      status,
      statusByRange,
      className
    } = this.props;

    return (
      <TestResults status={status}>
        <Box className={className} status={statusByRange} title="Состав тела">
          <SunburstChart {...sunburstChartResults} title={<br />} />
        </Box>
        <Box status={statusByRange} title="Обхваты">
          <AnthropometryChart {...anthropometryChartResults} gender={personGender} />
        </Box>
        <Box status={statusByRange} title="Двойная кожно-жировая складка">
          <CaliperometryChart {...caliperometryChartResults} gender={personGender} />
          <Hint />
          <BarChart {...barChartFatData} type={BAR_CHART_TYPE.STACKED} />
          <TotalChart {...barChartFatData} />
        </Box>
      </TestResults>
    );
  }
}

CaliperBodyCompositionTest.propTypes = {
  dispatch: PropTypes.func.isRequired,

  sunburstChartResults: PropTypes.object,
  anthropometryChartResults: PropTypes.object,
  caliperometryChartResults: PropTypes.object,
  barChartFatData: PropTypes.object,

  personGender: PropTypes.oneOf(['F', 'M']).isRequired,
  status: PropTypes.string.isRequired,
  statusByRange: PropTypes.string.isRequired,

  className: PropTypes.string.isRequired
};

CaliperBodyCompositionTest.defaultProps = {
  sunburstChartResults: null,
  anthropometryChartResults: {},
  barChartFatData: [],
  caliperometryChartResults: {}
};

CaliperBodyCompositionTest.displayName = 'CaliperBodyCompositionTest';

const mapStateToProps = createStructuredSelector({
  sunburstChartResults: makeSelectFatMuscleRatio(),
  barChartFatData: makeSelectBarChartFatData(),
  personGender: makeSelectPersonGender(),
  anthropometryChartResults: makeSelectResultsGirthByRange(),
  caliperometryChartResults: makeSelectResultsFatByRange(),
  status: makeSelectStatus(CONSTANTS.REDUCER_KEY.RESULTS),
  statusByRange: makeSelectStatus(CONSTANTS.REDUCER_KEY.RESULTS_BY_RANGE)
});

const withConnect = connect(mapStateToProps);
const withLogic = injectLogic({ logic, type: 'test' });
const withReducer = injectReducer({ key: CONSTANTS.REDUCER_KEY.KEY, reducer });

export default compose(
  withConnect,
  withLogic,
  withReducer
)(injectStyles(CaliperBodyCompositionTest, styles));
