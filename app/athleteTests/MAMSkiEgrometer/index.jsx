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

import CONSTANTS, { LABELS, RESULT_KEY } from './constants';
import logic from './logic';
import reducer from './reducer';
import {
  makeSelectLegend,
  // makeSelectDynamic,
  makeSelectPlatesResultByRange,
  makeSelectResultByRange,
  makeSelectStatus
} from './selectors';

class MAMSkiEgrometer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const { API_TYPE, DATES_PATH, GRAPHQL_BACK_TYPE } = CONSTANTS;

    dispatch(getDates(DATES_PATH, API_TYPE, GRAPHQL_BACK_TYPE));
  }

  render() {
    const { platesData } = this.props;

    return (
      <TestResults /* status={status} */>
        <Box /* status={statusByRange} */ title="Максимальная анаэробная мощность рук">
          <Plates data={platesData} />
        </Box>
      </TestResults>
    );
  }
}

MAMSkiEgrometer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  legend: PropTypes.array,
  Data: PropTypes.object,
  status: PropTypes.string.isRequired,
  statusByRange: PropTypes.string.isRequired,
  platesData: PropTypes.array
};

MAMSkiEgrometer.defaultProps = {
  platesData: [],
  legend: [],
  Result: {}
};

MAMSkiEgrometer.displayName = 'MAMSkiEgrometer';

const mapStateToProps = createStructuredSelector({
  /* legend: makeSelectLegend(), */
  platesData: makeSelectPlatesResultByRange(),
  Result: makeSelectResultByRange(),
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
)(MAMSkiEgrometer);
