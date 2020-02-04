import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Box from '@/components/Box';
import LineChartWithBar from '@/components/LineChartWithBar';
import Plates from '@/components/Plates';
import { getDates } from '@/containers/DateSelector/actions';
import TestResults from '@/containers/TestResults';
import injectLogic from '@/utils/injectLogic';
import injectReducer from '@/utils/injectReducer';

import CONSTANTS from './constants';
import logic from './logic';
import reducer from './reducer';
import {
  makeSelectLineChartWithBarResultByRange,
  makeSelectPlatesResultByRange,
  makeSelectStatus
} from './selectors';

class CadenceTest extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getDates(CONSTANTS.DATES_PATH, 1));
  }

  render() {
    const { lineChartWithBarData, platesData, status, statusByRange } = this.props;

    return (
      <TestResults status={status}>
        <Box status={statusByRange} title="Скоростно-силовые показатели">
          <LineChartWithBar
            {...lineChartWithBarData}
            legend="Частота педалирования"
            units="об/мин"
          />
          <Plates data={platesData} />
        </Box>
        {/* <Box title="Динамика">
        </Box> */}
      </TestResults>
    );
  }
}

CadenceTest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  lineChartWithBarData: PropTypes.shape({
    data: PropTypes.array,
    dataHashKey: PropTypes.string
  }),
  platesData: PropTypes.array,
  status: PropTypes.string.isRequired,
  statusByRange: PropTypes.string.isRequired
};

CadenceTest.defaultProps = {
  lineChartWithBarData: {},
  platesData: []
};

CadenceTest.displayName = 'CadenceTest';

// CadenceTest.whyDidYouRender = true;

const mapStateToProps = createStructuredSelector({
  platesData: makeSelectPlatesResultByRange(),
  lineChartWithBarData: makeSelectLineChartWithBarResultByRange(),
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
)(CadenceTest);
