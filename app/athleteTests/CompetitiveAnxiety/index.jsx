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

import CONSTANTS from './constants';
import logic from './logic';
import reducer from './reducer';
import {
  makeSelectAnswersResultByRange,
  makeSelectHistogramResultByRange,
  makeSelectLegend,
  makeSelectStatus
} from './selectors';

class CompetitiveAnxietyTest extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const { API_TYPE, DATES_PATH, GRAPHQL_BACK_TYPE } = CONSTANTS;

    dispatch(getDates(DATES_PATH, API_TYPE, GRAPHQL_BACK_TYPE));
  }

  render() {
    const { histogramData, answers } = this.props;

    return (
      <TestResults /* status={status} */>
        <Box /* status={statusByRange} */ title="Соревновательная тревожность">
          <HistogramChart
            {...histogramData}
            colors={bar => bar?.data?.color}
            legendValue=""
            units=""
          />
        </Box>
        <Box title="Ответы на вопросы">
          <AnswersContainer>
            <QuizAnswers answers={answers} questions={QUESTIONS} />
          </AnswersContainer>
        </Box>
      </TestResults>
    );
  }
}

CompetitiveAnxietyTest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  legend: PropTypes.array,
  histogramData: PropTypes.object,
  status: PropTypes.string.isRequired,
  statusByRange: PropTypes.string.isRequired,
  answers: PropTypes.array
};

CompetitiveAnxietyTest.defaultProps = {
  legend: [],
  histogramData: {},
  answers: []
};

CompetitiveAnxietyTest.displayName = 'CompetitiveAnxietyTest';

// RPETest.whyDidYouRender = true;

const mapStateToProps = createStructuredSelector({
  /* legend: makeSelectLegend(), */
  histogramData: makeSelectHistogramResultByRange(),
  status: makeSelectStatus(CONSTANTS.REDUCER_KEY.RESULTS),
  statusByRange: makeSelectStatus(CONSTANTS.REDUCER_KEY.RESULTS_BY_RANGE),
  answers: makeSelectAnswersResultByRange()
});

const withConnect = connect(mapStateToProps);
const withLogic = injectLogic({ logic, type: 'test' });
const withReducer = injectReducer({ key: CONSTANTS.REDUCER_KEY.KEY, reducer });

export default compose(
  withConnect,
  withLogic,
  withReducer
)(CompetitiveAnxietyTest);
