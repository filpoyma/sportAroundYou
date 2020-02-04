import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Box from '@/components/Box';
import LineChartWithBar from '@/components/LineChartWithBar';
import Plates from '@/components/Plates';
// import LineChart from '@/components/LineChart';
import { getDates } from '@/containers/DateSelector/actions';
import TestResults from '@/containers/TestResults';
import injectLogic from '@/utils/injectLogic';
import injectReducer from '@/utils/injectReducer';
import { COLORS } from '@/utils/styleConstants';

import CONSTANTS, { LABELS, RESULT_KEY } from './constants';
import ChartLegend from './elements/ChartLegend';
import logic from './logic';
import reducer from './reducer';
import {
  makeSelectLegend,
  makeSelectLineChartWithBarResultByRange,
  makeSelectPlatesResultByRange,
  // makeSelectDynamic,
  makeSelectResultByRange,
  makeSelectStatus
} from './selectors';

class TremorTest extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const { API_TYPE, DATES_PATH, GRAPHQL_BACK_TYPE } = CONSTANTS;

    dispatch(getDates(DATES_PATH, API_TYPE, GRAPHQL_BACK_TYPE));
  }

  render() {
    const { lineChartWithBarData, platesData, status, statusByRange } = this.props;
    const chartLegendData = [
      {
        color: COLORS.CHARTS.LEGEND,
        id: 1,
        label: 'Количество касаний'
      },
      {
        color: COLORS.CHARTS.PRIMARY,
        id: 2,
        label: 'Время'
      }
    ];

    return (
      <TestResults /* status={status} */>
        <Box /* status={statusByRange} */ title="Тремор">
          <LineChartWithBar
            {...lineChartWithBarData}
            legend="Количество касаний"
            units=""
            chartColor={COLORS.CHARTS.LEGEND}
          />
          <ChartLegend data={chartLegendData} />
          <br />
          <br />
          <Plates data={platesData} />
        </Box>
      </TestResults>
    );
  }
}

TremorTest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  legend: PropTypes.array,
  Data: PropTypes.object,
  status: PropTypes.string.isRequired,
  statusByRange: PropTypes.string.isRequired,

  lineChartWithBarData: PropTypes.shape({
    data: PropTypes.array,
    dataHashKey: PropTypes.string
  }),
  platesData: PropTypes.array
};

TremorTest.defaultProps = {
  legend: [],
  Result: {},

  lineChartWithBarData: {},
  platesData: []
};

TremorTest.displayName = 'TremorTest';

const mapStateToProps = createStructuredSelector({
  /* legend: makeSelectLegend(), */

  platesData: makeSelectPlatesResultByRange(),
  lineChartWithBarData: makeSelectLineChartWithBarResultByRange(),

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
)(TremorTest);
