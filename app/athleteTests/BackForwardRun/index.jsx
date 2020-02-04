import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Box from '@/components/Box';
// import LineChart from '@/components/LineChart';
import { getDates } from '@/containers/DateSelector/actions';
import TestResults from '@/containers/TestResults';
import injectLogic from '@/utils/injectLogic';
import injectReducer from '@/utils/injectReducer';

import CONSTANTS from './constants';
import Chart from './elements/Chart';
import logic from './logic';
import reducer from './reducer';
import {
  // makeSelectDynamic,
  makeSelectResultsByRange,
  makeSelectStatus
} from './selectors';

class BackForwardRunTest extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getDates(CONSTANTS.DATES_PATH));
  }

  render() {
    const { results, status, statusByRange } = this.props;

    return (
      <TestResults status={status}>
        <Box status={statusByRange} title="Анаэробная выносливость">
          <Chart data={results} />
        </Box>
        {/* <Box title="Динамика">
        </Box> */}
      </TestResults>
    );
  }
}

BackForwardRunTest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  results: PropTypes.object,
  status: PropTypes.string.isRequired,
  statusByRange: PropTypes.string.isRequired
};

BackForwardRunTest.defaultProps = {
  results: {}
};

BackForwardRunTest.displayName = 'BackForwardRunTest';

// BackForwardRunTest.whyDidYouRender = true;

const mapStateToProps = createStructuredSelector({
  results: makeSelectResultsByRange(),
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
)(BackForwardRunTest);
