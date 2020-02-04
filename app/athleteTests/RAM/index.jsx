import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Box from '@/components/Box';
import Plates from '@/components/Plates';
// import LineChart from '@/components/LineChart';
import { getDates } from '@/containers/DateSelector/actions';
import TestResults from '@/containers/TestResults';
import injectLogic from '@/utils/injectLogic';
import injectReducer from '@/utils/injectReducer';

import CONSTANTS from './constants';
import logic from './logic';
import reducer from './reducer';
import {
  // makeSelectDynamic,
  makeSelectPlatesResultByRange,
  makeSelectStatus
} from './selectors';

class RAMTest extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const { API_TYPE, DATES_PATH, GRAPHQL_BACK_TYPE } = CONSTANTS;

    dispatch(getDates(DATES_PATH, API_TYPE, GRAPHQL_BACK_TYPE));
  }

  render() {
    const { platesData } = this.props;

    return (
      <TestResults /* status={status} */>
        <Box /* status={statusByRange} */ title="Результаты тестирования">
          <Plates data={platesData} />
        </Box>
      </TestResults>
    );
  }
}

RAMTest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  legend: PropTypes.array,
  platesData: PropTypes.object,
  status: PropTypes.string.isRequired,
  statusByRange: PropTypes.string.isRequired
};

RAMTest.defaultProps = {
  legend: [],
  results: {}
};

RAMTest.displayName = 'RPETest';

// RPETest.whyDidYouRender = true;

const mapStateToProps = createStructuredSelector({
  /* legend: makeSelectLegend(), */
  platesData: makeSelectPlatesResultByRange(),
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
)(RAMTest);
