import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Box from '@/components/Box';
import ParallelCoordinatesChart from '@/components/ParallelCoordinatesChart';
// import LineChart from '@/components/LineChart';
import { getDates } from '@/containers/DateSelector/actions';
import TestResults from '@/containers/TestResults';
import injectLogic from '@/utils/injectLogic';
import injectReducer from '@/utils/injectReducer';

import CONSTANTS, { LABELS, RESULT_KEY } from './constants';
import ChartLegend from './elements/ChartLegend';
import logic from './logic';
import reducer from './reducer';
import {
  makeSelectLegend,
  // makeSelectDynamic,
  makeSelectResultsByRange,
  makeSelectStatus
} from './selectors';

const TOOLTIP_KEYS = Object.values(RESULT_KEY);

class MAMRelativeTest extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const { API_TYPE, DATES_PATH } = CONSTANTS;

    dispatch(getDates(DATES_PATH, API_TYPE));
  }

  render() {
    const {
      legend,
      results: { data, dataHashKey },
      status,
      statusByRange
    } = this.props;

    return (
      <TestResults status={status}>
        <Box status={statusByRange} title="Максимальная анаэробная мощность">
          <ParallelCoordinatesChart
            colors={chartData => chartData.color}
            {...data}
            dataHashKey={dataHashKey}
            tooltipKeys={TOOLTIP_KEYS}
            tooltipLabels={LABELS}
          />
          <ChartLegend data={legend} />
        </Box>
        {/* <Box title="Динамика">
        </Box> */}
      </TestResults>
    );
  }
}

MAMRelativeTest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  legend: PropTypes.array,
  results: PropTypes.shape({
    data: PropTypes.object,
    dataHashKey: PropTypes.string
  }),
  status: PropTypes.string.isRequired,
  statusByRange: PropTypes.string.isRequired
};

MAMRelativeTest.defaultProps = {
  legend: [],
  results: {}
};

MAMRelativeTest.displayName = 'MAMRelativeTest';

// MAMRelativeTest.whyDidYouRender = true;

const mapStateToProps = createStructuredSelector({
  legend: makeSelectLegend(),
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
)(MAMRelativeTest);
