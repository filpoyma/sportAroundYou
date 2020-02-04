import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Box from '@/components/Box';
import { getDates } from '@/containers/DateSelector/actions';
import TestResults from '@/containers/TestResults';
import injectLogic from '@/utils/injectLogic';
import injectReducer from '@/utils/injectReducer';

import CONSTANTS, { LABELS, RESULT_KEY } from './constants';
import PaddingChart from './elements/PaddingChart';
import StepOverChart from './elements/StepOverChart';
import logic from './logic';
import reducer from './reducer';
import { makeSelectResultsByRange, makeSelectStatus } from './selectors';

class CoordinationTennisTest extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getDates(CONSTANTS.DATES_PATH));
  }

  render() {
    const { status, statusByRange, resultsPadding, resultsStepOver } = this.props;

    return (
      <TestResults status={status}>
        <Box status={statusByRange} title={LABELS[RESULT_KEY.PADDING]}>
          <PaddingChart data={resultsPadding} />
        </Box>
        <Box status={statusByRange} title={LABELS[RESULT_KEY.STEP_OVER]}>
          <StepOverChart data={resultsStepOver} />
        </Box>
      </TestResults>
    );
  }
}

CoordinationTennisTest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  resultsPadding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  resultsStepOver: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  status: PropTypes.string.isRequired,
  statusByRange: PropTypes.string.isRequired
};

CoordinationTennisTest.defaultProps = {
  resultsPadding: '',
  resultsStepOver: ''
};

CoordinationTennisTest.displayName = 'CoordinationTennisTest';

const mapStateToProps = createStructuredSelector({
  resultsPadding: makeSelectResultsByRange(RESULT_KEY.PADDING),
  resultsStepOver: makeSelectResultsByRange(RESULT_KEY.STEP_OVER),
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
)(CoordinationTennisTest);
