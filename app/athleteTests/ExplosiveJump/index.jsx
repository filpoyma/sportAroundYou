import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Box from '@/components/Box';
// import LineChart from '@/components/LineChart';
import Spinner from '@/components/Spinner';
import { getDates } from '@/containers/DateSelector/actions';
import { REQUEST_STATUS } from '@/utils/constants';
import injectLogic from '@/utils/injectLogic';
import injectReducer from '@/utils/injectReducer';

import { API_PATH, API_TYPE, RESULT_KEY, STATE_KEY } from './constants';
import ChartHeight from './elements/ChartHeight';
import ChartLength from './elements/ChartLength';
import logic from './logic';
import reducer from './reducer';
import {
  // makeSelectDynamic,
  makeSelectResultsByRange,
  makeSelectStatus
} from './selectors';

const Error = () => <Box title="Ошибка">Не удалось получить результаты тестирования</Box>;
const Loader = () => <Spinner position="relative" size="big" />;

class ExplosiveJumpTest extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getDates(API_PATH, API_TYPE));
  }

  render() {
    const {
      resultsHeight,
      resultsLength,
      statusExplosiveJump,
      statusExplosiveJumpByRange
    } = this.props;

    if (statusExplosiveJump === REQUEST_STATUS.ERROR) {
      return <Error />;
    }

    if (statusExplosiveJump === REQUEST_STATUS.LOADING) {
      return <Loader />;
    }

    return (
      <>
        <Box status={statusExplosiveJumpByRange} title="Взрывная сила ног">
          <ChartLength {...resultsLength} />
        </Box>
        <Box status={statusExplosiveJumpByRange} title="Прыжок вверх">
          <ChartHeight {...resultsHeight} />
        </Box>
        {/* <Box title="Динамика">
        </Box> */}
      </>
    );
  }
}

ExplosiveJumpTest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  resultsHeight: PropTypes.object,
  resultsLength: PropTypes.object,
  statusExplosiveJump: PropTypes.string.isRequired,
  statusExplosiveJumpByRange: PropTypes.string.isRequired
};

ExplosiveJumpTest.defaultProps = {
  resultsHeight: {},
  resultsLength: {}
};

ExplosiveJumpTest.displayName = 'ExplosiveJumpTest';

// ExplosiveJumpTest.whyDidYouRender = true;

const mapStateToProps = createStructuredSelector({
  resultsHeight: makeSelectResultsByRange(RESULT_KEY.JUMP_HEIGHT),
  resultsLength: makeSelectResultsByRange(RESULT_KEY.JUMP_LENGTH),
  statusExplosiveJump: makeSelectStatus(STATE_KEY.RESULTS),
  statusExplosiveJumpByRange: makeSelectStatus(STATE_KEY.RESULTS_BY_RANGE)
});

const withConnect = connect(mapStateToProps);
const withLogic = injectLogic({ logic, type: 'test' });
const withReducer = injectReducer({ key: STATE_KEY.MAIN, reducer });

export default compose(
  withConnect,
  withLogic,
  withReducer
)(ExplosiveJumpTest);
