import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { QUESTIONS } from '@/athleteTests/AnxietyQuiz/constants';
import Box from '@/components/Box';
import HistogramChart from '@/components/HistogramChart';
import QuizAnswers from '@/components/QuizAnswers';
// import LineChart from '@/components/LineChart';
import { getDates } from '@/containers/DateSelector/actions';
import TestResults from '@/containers/TestResults';
import injectLogic from '@/utils/injectLogic';
import injectReducer from '@/utils/injectReducer';
import { COLORS } from '@/utils/styleConstants';

import CONSTANTS from './constants';
import AnswersContainer from './elements/AnswersContainer';
import logic from './logic';
import reducer from './reducer';
import {
  // makeSelectDynamic,
  makeSelectHistogramResultByRange,
  // makeSelectLegend,
  makeSelectStatus
} from './selectors';

class AnxietyTest extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const { API_TYPE, DATES_PATH } = CONSTANTS;

    dispatch(getDates(DATES_PATH, API_TYPE));
  }

  render() {
    const { histogramData } = this.props;

    const result = {};

    result.answers = [1, 2, 3, 4, 4, 3, 2, 1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 2, 1, 2, 3, 4,1, 2, 3, 4, 4, 3, 2, 1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 2, 1, 2, 3, 4];

    return (
      <TestResults /* status={status} */>
        <Box /* status={statusByRange} */ title="Личностная и ситуативная тревожность">
          <HistogramChart
            {...histogramData}
            colors={bar => bar?.data?.color}
            legendValue=""
            units=""
          />
        </Box>
        <Box /* status={statusByRange} */ title="Результаты тестирования">
          Соответствующая тревожность оптимальная
        </Box>
        <Box title="Ответы на вопросы">
          <AnswersContainer>
            <QuizAnswers answers={result.answers.slice(0, 20)} questions={QUESTIONS.FIRST} />
            <hr />
            <QuizAnswers
              answers={result.answers.slice(0, 20)}
              color={COLORS.QUIZ.SECONDARY}
              questions={QUESTIONS.SECOND}
            />
          </AnswersContainer>
        </Box>
      </TestResults>
    );
  }
}

AnxietyTest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  legend: PropTypes.array,
  histogramData: PropTypes.object,
  status: PropTypes.string.isRequired,
  statusByRange: PropTypes.string.isRequired
};

AnxietyTest.defaultProps = {
  legend: [],
  histogramData: {}
};

AnxietyTest.displayName = 'AnxietyTest';

// AnxietyTest.whyDidYouRender = true;

const mapStateToProps = createStructuredSelector({
  /* legend: makeSelectLegend(), */
  histogramData: makeSelectHistogramResultByRange(),
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
)(AnxietyTest);
