import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { QUESTIONS } from '@/athleteTests/StressAndRecoveryQuiz/constants';
import Box from '@/components/Box';
import LineChart from '@/components/LineChart';
import QuizAnswers from '@/components/QuizAnswers';
import Spinner from '@/components/Spinner';
import { getDates } from '@/containers/DateSelector/actions';
import { REQUEST_STATUS } from '@/utils/constants';
import injectLogic from '@/utils/injectLogic';
import injectReducer from '@/utils/injectReducer';
import { COLORS } from '@/utils/styleConstants';

import { API_PATH, STATE_KEY } from './constants';
import AnswersContainer from './elements/AnswersContainer';
import ResultDetails from './elements/ResultDetails';
import logic from './logic';
import reducer from './reducer';
import { makeSelectDynamic, makeSelectResultsByRange, makeSelectStatus } from './selectors';

const Error = () => <Box title="Ошибка">Не удалось получить результаты тестирования</Box>;
const Loader = () => <Spinner position="relative" size="big" />;

class StressAndRecoveryTest extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getDates(API_PATH));
  }

  render() {
    const {
      dynamicRecovery,
      dynamicStress,
      result,
      statusResults,
      statusResultsByRange
    } = this.props;

    if (statusResults === REQUEST_STATUS.ERROR) {
      return <Error />;
    }

    if (statusResults === REQUEST_STATUS.LOADING) {
      return <Loader />;
    }

    return (
      <>
        <Box title="Субъективная оценка процессов восстановления" status={statusResultsByRange}>
          <ResultDetails {...result} />
        </Box>
        <Box title="Ответы на вопросы" status={statusResultsByRange}>
          <AnswersContainer>
            <QuizAnswers answers={result.answers.slice(0, 4)} questions={QUESTIONS.RECOVERY} />
            <hr />
            <QuizAnswers
              answers={result.answers.slice(4, 8)}
              color={COLORS.QUIZ.SECONDARY}
              questions={QUESTIONS.STRESS}
            />
          </AnswersContainer>
        </Box>
        <Box title="Динамика">
          <LineChart {...dynamicRecovery} legend="Уровень восстановления" units="ед" />
          <LineChart {...dynamicStress} legend="Уровень стресса" units="ед" />
        </Box>
      </>
    );
  }
}

StressAndRecoveryTest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  dynamicRecovery: PropTypes.object.isRequired,
  dynamicStress: PropTypes.object.isRequired,
  result: PropTypes.object.isRequired,
  statusResults: PropTypes.string.isRequired,
  statusResultsByRange: PropTypes.string.isRequired
};

StressAndRecoveryTest.defaultProps = {};

StressAndRecoveryTest.displayName = 'StressAndRecoveryTest';

// StressAndRecoveryTest.whyDidYouRender = true;

const mapStateToProps = createStructuredSelector({
  dynamicRecovery: makeSelectDynamic('scale1'),
  dynamicStress: makeSelectDynamic('scale2'),
  result: makeSelectResultsByRange(),
  statusResults: makeSelectStatus(STATE_KEY.RESULTS),
  statusResultsByRange: makeSelectStatus(STATE_KEY.RESULTS_BY_RANGE)
});

const withConnect = connect(mapStateToProps);
const withLogic = injectLogic({ logic, type: 'test' });
const withReducer = injectReducer({ key: STATE_KEY.MAIN, reducer });

export default compose(
  withConnect,
  withLogic,
  withReducer
)(StressAndRecoveryTest);
