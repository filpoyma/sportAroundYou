import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import AnswersContainer from '@/athleteTests/Anxiety/elements/AnswersContainer';
import { QUESTIONS } from '@/athleteTests/CompetitiveAnxietyQuiz/constants';
import Box from '@/components/Box';
import HistogramChart from '@/components/HistogramChart';
import QuizAnswers from '@/components/QuizAnswers';
// import LineChart from '@/components/LineChart';
import { getDates } from '@/containers/DateSelector/actions';
import TestResults from '@/containers/TestResults';
import injectLogic from '@/utils/injectLogic';
import injectReducer from '@/utils/injectReducer';
import { COLORS, NIVO_CHART_THEME } from '@/utils/styleConstants';

import CONSTANTS, { LABELS, RESULT_KEY } from './constants';
import ChartLegend from './elements/ChartLegend';
import ResultDetails from './elements/ResultDetails';
import logic from './logic';
import reducer from './reducer';
import {
  makeSelectHistogramResultByRange,
  makeSelectLegend,
  makeSelectResultByRange,
  makeSelectStatus
} from './selectors';

class ClaimsTest extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const { API_TYPE, DATES_PATH } = CONSTANTS;

    dispatch(getDates(DATES_PATH, API_TYPE));
  }

  render() {
    const { histogramData } = this.props;

    const chartLegendData = [
      {
        color: COLORS.CHARTS.HISTOGRAM.BLUE,
        id: 1,
        label: 'Притязания'
      },
      {
        color: COLORS.CHARTS.HISTOGRAM.GRAY,
        id: 2,
        label: 'Достижения'
      }
    ];

    return (
      <TestResults /* status={status} */>
        <Box title="Динамика уровня притязаний">
          <HistogramChart
            {...histogramData}
            keys={['value', 'value2']}
            colors={[COLORS.CHARTS.HISTOGRAM.BLUE, COLORS.CHARTS.HISTOGRAM.GRAY]}
            groupMode="grouped"
            legendKey="Номер серии"
            legendValue="Количество квадратов"
            units="шт"
            colorBy="id"
          />
          <ChartLegend data={chartLegendData} />
        </Box>
        <Box /* status={statusByRange} */ title="Результаты тестирования">
          <ResultDetails />
        </Box>
      </TestResults>
    );
  }
}

ClaimsTest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  legend: PropTypes.array,
  Data: PropTypes.object,
  status: PropTypes.string.isRequired,
  statusByRange: PropTypes.string.isRequired,
  histogramData: PropTypes.object.isRequired
};

ClaimsTest.defaultProps = {
  legend: [],
  Result: {}
};

ClaimsTest.displayName = 'ClaimsTest';

const mapStateToProps = createStructuredSelector({
  /* legend: makeSelectLegend(), */
  histogramData: makeSelectHistogramResultByRange(),
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
)(ClaimsTest);
