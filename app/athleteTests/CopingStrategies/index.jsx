import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { QUESTIONS } from '@/athleteTests/CopingStrategiesQuiz/constants';
import Box from '@/components/Box';
import HistogramChart from '@/components/HistogramChart';
import QuizAnswers from '@/components/QuizAnswers';
import Spinner from '@/components/Spinner';
import { getDates } from '@/containers/DateSelector/actions';
import { REQUEST_STATUS } from '@/utils/constants';
import injectLogic from '@/utils/injectLogic';
import injectReducer from '@/utils/injectReducer';

import { API_PATH, STATE_KEY } from './constants';
import ResultDetails from './elements/ResultDetails';
import logic from './logic';
import reducer from './reducer';
import {
  makeSelectHistogramResultByRange,
  makeSelectResultByRange,
  makeSelectStatus
} from './selectors';

const Error = () => <Box title="Ошибка">Не удалось получить результаты тестирования</Box>;
const Loader = () => <Spinner position="relative" size="big" />;

class CopingStrategiesTest extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getDates(API_PATH));
  }

  render() {
    const {
      histogramData,
      result: { resultDetails, rawData },
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
        <Box title="Оценка стрессоустойчивости" status={statusResultsByRange}>
          <HistogramChart
            {...histogramData}
            legendKey="Копинг-стратегии"
            legendValue="Значение"
            units="ед"
          />
        </Box>
        <Box title="Результаты тестирования" status={statusResultsByRange}>
          <ResultDetails {...resultDetails} />
        </Box>
        <Box title="Ответы на вопросы" status={statusResultsByRange}>
          <QuizAnswers answers={rawData} questions={QUESTIONS} />
        </Box>
      </>
    );
  }
}

CopingStrategiesTest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  result: PropTypes.shape({
    resultDetails: PropTypes.object.isRequired,
    rawData: PropTypes.array.isRequired
  }).isRequired,
  histogramData: PropTypes.object.isRequired,
  statusResults: PropTypes.string.isRequired,
  statusResultsByRange: PropTypes.string.isRequired
};

CopingStrategiesTest.defaultProps = {};

CopingStrategiesTest.displayName = 'CopingStrategiesTest';

// CopingStrategiesTest.whyDidYouRender = true;

const mapStateToProps = createStructuredSelector({
  result: makeSelectResultByRange(),
  histogramData: makeSelectHistogramResultByRange(),
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
)(CopingStrategiesTest);
