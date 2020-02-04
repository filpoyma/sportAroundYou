import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Box from '@/components/Box';
import HistogramChart from '@/components/HistogramChart';
import Plates from '@/components/Plates';
import Spinner from '@/components/Spinner';
import { getDates } from '@/containers/DateSelector/actions';
import { REQUEST_STATUS } from '@/utils/constants';
import injectLogic from '@/utils/injectLogic';
import injectReducer from '@/utils/injectReducer';

import { API_PATH, STATE_KEY } from './constants';
import logic from './logic';
import reducer from './reducer';
import { makeSelectJumpHeight, makeSelectPlates, makeSelectStatus } from './selectors';

const Error = () => <Box title="Ошибка">Не удалось получить результаты тестирования</Box>;
const Loader = () => <Spinner position="relative" size="big" />;

class SpeedAndPowerThreeJumpsTest extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getDates(API_PATH));
  }

  render() {
    const { jumpHeight, platesData, statusThreeJumps } = this.props;

    if (statusThreeJumps === REQUEST_STATUS.ERROR) {
      return <Error />;
    }

    if (statusThreeJumps === REQUEST_STATUS.LOADING) {
      return <Loader />;
    }

    return (
      <>
        <Box title="Оценка скоростно-силовых показателей">
          <HistogramChart
            {...jumpHeight}
            colors={bar => bar?.data?.color}
            legendValue="Высота"
            units="см"
          />
          <Plates data={platesData} height={92} />
        </Box>
      </>
    );
  }
}

SpeedAndPowerThreeJumpsTest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  jumpHeight: PropTypes.object.isRequired,
  platesData: PropTypes.array.isRequired,
  statusThreeJumps: PropTypes.string.isRequired
};

SpeedAndPowerThreeJumpsTest.defaultProps = {};

SpeedAndPowerThreeJumpsTest.displayName = 'SpeedAndPowerThreeJumpsTest';

const mapStateToProps = createStructuredSelector({
  jumpHeight: makeSelectJumpHeight(),
  platesData: makeSelectPlates(),
  statusThreeJumps: makeSelectStatus(STATE_KEY.SPEED_AND_POWER_THREE_JUMPS)
});

const withConnect = connect(mapStateToProps);
const withLogic = injectLogic({ logic, type: 'test' });
const withReducer = injectReducer({ key: STATE_KEY.MAIN, reducer });

export default compose(
  withConnect,
  withLogic,
  withReducer
)(SpeedAndPowerThreeJumpsTest);
