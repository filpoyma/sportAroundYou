import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Box from '@/components/Box';
import HistogramChart from '@/components/HistogramChart';
import Plates from '@/components/Plates';
import { getDates } from '@/containers/DateSelector/actions';
import injectLogic from '@/utils/injectLogic';
import injectReducer from '@/utils/injectReducer';

import { API_PATH } from './constants';
import logic from './logic';
import reducer from './reducer';
import {
  makeSelectContactTimeHistogramResult,
  makeSelectHeightAverage,
  makeSelectHeightHistogramResult,
  makeSelectPlates,
  makeSelectStatus
} from './selectors';

class JumpsFatigueTest extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getDates(API_PATH));
  }

  render() {
    const {
      platesData,
      status,
      heightHistogramData,
      contactTimeHistogramData,
      heightAverage
    } = this.props;

    return (
      <>
        <Box title="Характеристики серии: высота" status={status}>
          <HistogramChart
            {...heightHistogramData}
            colors={bar => bar?.data?.color}
            legendValue="Высота прыжков"
            margin={{ top: 20, right: 35, bottom: 50, left: 55 }}
            markers={[
              {
                axis: 'y',
                value: heightAverage,
                legend: heightAverage.toString(),
                legendOrientation: 'horizontal',
                legendOffsetY: 1,
                legendOffsetX: -28,
                lineStyle: {
                  stroke: '#000',
                  strokeWidth: 1,
                  strokeOpacity: 1,
                  strokeDasharray: 8
                }
              }
            ]}
            units="см"
          />
        </Box>
        <Box title="Характеристики серии: время контакта" status={status}>
          <HistogramChart
            {...contactTimeHistogramData}
            colors={bar => bar?.data?.color}
            legendValue="Высота прыжка"
            units="мс"
          />
        </Box>
        <Box title="Показатели утомляемости" status={status}>
          <Plates data={platesData} />
        </Box>
      </>
    );
  }
}

JumpsFatigueTest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  platesData: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  heightHistogramData: PropTypes.object.isRequired,
  contactTimeHistogramData: PropTypes.object.isRequired,
  heightAverage: PropTypes.number.isRequired
};

JumpsFatigueTest.defaultProps = {};

JumpsFatigueTest.displayName = 'JumpsFatigueTest';

const mapStateToProps = createStructuredSelector({
  platesData: makeSelectPlates(),
  status: makeSelectStatus,
  heightHistogramData: makeSelectHeightHistogramResult(),
  contactTimeHistogramData: makeSelectContactTimeHistogramResult(),
  heightAverage: makeSelectHeightAverage()
});

const withConnect = connect(mapStateToProps);
const withLogic = injectLogic({ logic, type: 'test' });
const withReducer = injectReducer({ key: 'JumpsFatigueTest', reducer });

export default compose(
  withConnect,
  withLogic,
  withReducer
)(JumpsFatigueTest);
