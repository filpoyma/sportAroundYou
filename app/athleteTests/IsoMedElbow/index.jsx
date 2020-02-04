import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Box from '@/components/Box';
import Table from '@/components/Table';
import Tabs from '@/components/Tabs';
// import LineChart from '@/components/LineChart';
import { getDates } from '@/containers/DateSelector/actions';
import TestResults from '@/containers/TestResults';
import injectLogic from '@/utils/injectLogic';
import injectReducer from '@/utils/injectReducer';

import CONSTANTS, { KEYS } from './constants';
import Chart from './elements/Chart';
import logic from './logic';
import reducer from './reducer';
import {
  // makeSelectDynamic,
  makeSelectChartData,
  makeSelectResultsByRange,
  makeSelectStatus
} from './selectors';

const TABS_DATA = [
  {
    id: KEYS.FORCE,
    title: 'Сила'
  },
  {
    id: KEYS.POWER,
    title: 'Мощность'
  }
];

class IsoMedElbowTest extends Component {
  state = {
    currentTab: KEYS.FORCE
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getDates(CONSTANTS.DATES_PATH, CONSTANTS.API_TYPE));
  }

  handleChangeTab = id => {
    this.setState(state => ({
      ...state,
      currentTab: id
    }));
  };

  render() {
    const { extensionChartData, flexionChartData, results, status, statusByRange } = this.props;
    const { currentTab } = this.state;

    return (
      <TestResults status={status}>
        <Box status={statusByRange} title="Сила мышц">
          <Tabs data={TABS_DATA} onChange={this.handleChangeTab} />
          <Table data={results[currentTab]} />
        </Box>
        <Box status={statusByRange} title="Максимальные и пороговые показатели">
          <Chart {...flexionChartData} legend="Момент силы" title="Сгибание" units="Нм" />
          <Chart {...extensionChartData} legend="Момент силы" title="Разгибание" units="Нм" />
        </Box>
        {/* <Box title="Динамика">
        </Box> */}
      </TestResults>
    );
  }
}

IsoMedElbowTest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  extensionChartData: PropTypes.object.isRequired,
  flexionChartData: PropTypes.object.isRequired,
  results: PropTypes.object,
  status: PropTypes.string.isRequired,
  statusByRange: PropTypes.string.isRequired
};

IsoMedElbowTest.defaultProps = {
  results: {}
};

IsoMedElbowTest.displayName = 'IsoMedElbowTest';

// IsoMedElbowTest.whyDidYouRender = true;

const mapStateToProps = createStructuredSelector({
  extensionChartData: makeSelectChartData(KEYS.EXTENSION_GRAPH),
  flexionChartData: makeSelectChartData(KEYS.FLEXION_GRAPH),
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
)(IsoMedElbowTest);
