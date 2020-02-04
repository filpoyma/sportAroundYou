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
import {
  makeSelectHistogramDataForCurrentDate,
  makeSelectPlates,
  makeSelectStatus
} from './selectors';

const Error = () => <Box title="Ошибка">Не удалось получить результаты тестирования</Box>;
const Loader = () => <Spinner position="relative" size="big" />;

class MotilityJumpsDiffVerticalTest extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getDates(API_PATH));
  }

  render() {
    const { statusMotilityJumpsDiffVertical, histogramData, platesData } = this.props;

    if (statusMotilityJumpsDiffVertical === REQUEST_STATUS.ERROR) {
      return <Error />;
    }

    if (statusMotilityJumpsDiffVertical === REQUEST_STATUS.LOADING) {
      return <Loader />;
    }

    return (
      <>
        <Box title="Показатели дифференциации" status={statusMotilityJumpsDiffVertical}>
          <Plates data={platesData} height={92} />
        </Box>
        <Box title="Характеристики серии" status={statusMotilityJumpsDiffVertical}>
          <HistogramChart
            {...histogramData}
            legendKey="Номер прыжка"
            legendValue="Высота"
            units="см"
          />
        </Box>
      </>
    );
  }
}

MotilityJumpsDiffVerticalTest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  statusMotilityJumpsDiffVertical: PropTypes.string.isRequired,
  histogramData: PropTypes.object.isRequired,
  platesData: PropTypes.array.isRequired
};

MotilityJumpsDiffVerticalTest.defaultProps = {};

MotilityJumpsDiffVerticalTest.displayName = 'MotilityJumpsDiffVerticalTest';

const mapStateToProps = createStructuredSelector({
  histogramData: makeSelectHistogramDataForCurrentDate(),
  platesData: makeSelectPlates(),
  statusMotilityJumpsDiffVertical: makeSelectStatus(STATE_KEY.MOTILITY_JUMPS_DIFF_VERTICAL)
});

const withConnect = connect(mapStateToProps);
const withLogic = injectLogic({ logic, type: 'test' });
const withReducer = injectReducer({ key: STATE_KEY.MAIN, reducer });

export default compose(
  withConnect,
  withLogic,
  withReducer
)(MotilityJumpsDiffVerticalTest);
