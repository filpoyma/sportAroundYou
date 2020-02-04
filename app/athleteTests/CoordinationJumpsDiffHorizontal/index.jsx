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

class CoordinationJumpsDiffHorizontalTest extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getDates(API_PATH));
  }

  render() {
    const {
      statusCoordinationJumpsDiffHorizontal,
      histogramData,
      platesData,
      kPano,
      sumPano,
      sigmaPano
    } = this.props;

    if (statusCoordinationJumpsDiffHorizontal === REQUEST_STATUS.ERROR) {
      return <Error />;
    }

    if (statusCoordinationJumpsDiffHorizontal === REQUEST_STATUS.LOADING) {
      return <Loader />;
    }

    return (
      <>
        <Box title="Показатели дифференциации" status={statusCoordinationJumpsDiffHorizontal}>
          <Plates data={platesData} height={92} />
        </Box>
        <Box title="Характеристики серии" status={statusCoordinationJumpsDiffHorizontal}>
          <HistogramChart
            {...histogramData}
            legendKey="Номер прыжка"
            legendValue="Высота"
            units="см"
          />
        </Box>
        <Box title="Динамика" status={statusCoordinationJumpsDiffHorizontal}>
          <LineChart {...sumPano} legend="Сумма приращений" units="см" />
          <LineChart {...sigmaPano} legend="Приращение" units="см" />
          <LineChart {...kPano} legend="Коэффициент дифференциации" units="" />
        </Box>
      </>
    );
  }
}

CoordinationJumpsDiffHorizontalTest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  statusCoordinationJumpsDiffHorizontal: PropTypes.string.isRequired,
  histogramData: PropTypes.object.isRequired,
  platesData: PropTypes.array.isRequired,
  kPano: PropTypes.object.isRequired,
  sumPano: PropTypes.object.isRequired,
  sigmaPano: PropTypes.object.isRequired
};

CoordinationJumpsDiffHorizontalTest.defaultProps = {};

CoordinationJumpsDiffHorizontalTest.displayName = 'CoordinationJumpsDiffHorizontalTest';

const mapStateToProps = createStructuredSelector({
  histogramData: makeSelectHistogramDataForCurrentDate(),
  platesData: makeSelectPlates(),
  kPano: makeSelectDynamic('k'),
  sumPano: makeSelectDynamic('sum'),
  sigmaPano: makeSelectDynamic('sigma'),
  statusCoordinationJumpsDiffHorizontal: makeSelectStatus(
    STATE_KEY.COORDINATION_JUMPS_DIFF_HORIZONTAL
  )
});

const withConnect = connect(mapStateToProps);
const withLogic = injectLogic({ logic, type: 'test' });
const withReducer = injectReducer({ key: STATE_KEY.MAIN, reducer });

export default compose(
  withConnect,
  withLogic,
  withReducer
)(CoordinationJumpsDiffHorizontalTest);
