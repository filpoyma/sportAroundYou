import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Box from '@/components/Box';
import HistogramChart from '@/components/HistogramChart';
import LineChart from '@/components/LineChart';
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
  makeSelectDynamic,
  makeSelectHistogramDataForCurrentDate,
  makeSelectPlates,
  makeSelectStatus
} from './selectors';

const Error = () => <Box title="Ошибка">Не удалось получить результаты тестирования</Box>;
const Loader = () => <Spinner position="relative" size="big" />;

class MotilityJumpsDiffHorizontalTest extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getDates(API_PATH));
  }

  render() {
    const {
      statusMotilityJumpsDiffHorizontal,
      histogramData,
      platesData,
      kPano,
      sumPano,
      sigmaPano
    } = this.props;

    if (statusMotilityJumpsDiffHorizontal === REQUEST_STATUS.ERROR) {
      return <Error />;
    }

    if (statusMotilityJumpsDiffHorizontal === REQUEST_STATUS.LOADING) {
      return <Loader />;
    }

    return (
      <>
        <Box title="Показатели дифференциации" status={statusMotilityJumpsDiffHorizontal}>
          <Plates data={platesData} height={92} />
        </Box>
        <Box title="Характеристики серии" status={statusMotilityJumpsDiffHorizontal}>
          <HistogramChart
            {...histogramData}
            legendKey="Номер прыжка"
            legendValue="Высота"
            units="см"
          />
        </Box>
        <Box title="Динамика" status={statusMotilityJumpsDiffHorizontal}>
          <LineChart {...sumPano} legend="Сумма приращений" units="см" />
          <LineChart {...sigmaPano} legend="Приращение" units="см" />
          <LineChart {...kPano} legend="Коэффициент дифференциации" units="" />
        </Box>
      </>
    );
  }
}

MotilityJumpsDiffHorizontalTest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  statusMotilityJumpsDiffHorizontal: PropTypes.string.isRequired,
  histogramData: PropTypes.object.isRequired,
  platesData: PropTypes.array.isRequired,
  kPano: PropTypes.object.isRequired,
  sumPano: PropTypes.object.isRequired,
  sigmaPano: PropTypes.object.isRequired
};

MotilityJumpsDiffHorizontalTest.defaultProps = {};

MotilityJumpsDiffHorizontalTest.displayName = 'MotilityJumpsDiffHorizontalTest';

const mapStateToProps = createStructuredSelector({
  histogramData: makeSelectHistogramDataForCurrentDate(),
  platesData: makeSelectPlates(),
  kPano: makeSelectDynamic('k'),
  sumPano: makeSelectDynamic('sum'),
  sigmaPano: makeSelectDynamic('sigma'),
  statusMotilityJumpsDiffHorizontal: makeSelectStatus(STATE_KEY.MOTILITY_JUMPS_DIFF_HORIZONTAL)
});

const withConnect = connect(mapStateToProps);
const withLogic = injectLogic({ logic, type: 'test' });
const withReducer = injectReducer({ key: STATE_KEY.MAIN, reducer });

export default compose(
  withConnect,
  withLogic,
  withReducer
)(MotilityJumpsDiffHorizontalTest);
