import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { css } from 'styled-components';

import Box from '@/components/Box';
import HoriontalScale from '@/components/HorizontalScale';
import Plates from '@/components/Plates';
import { getDates } from '@/containers/DateSelector/actions';
import TestResults from '@/containers/TestResults';
import injectLogic from '@/utils/injectLogic';
import injectReducer from '@/utils/injectReducer';
import injectStyles from '@/utils/injectStyles';

import CONSTANTS from './constants';
import logic from './logic';
import reducer from './reducer';
import {
  makeSelectPlatesResultByRange,
  makeSelectScalesResultByRange,
  makeSelectStatus
} from './selectors';

class HemoglobinMassTest extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getDates(CONSTANTS.DATES_PATH, 1, CONSTANTS.GRAPHQL_BACK_TYPE));
  }

  render() {
    // const { status, statusByRange, platesData } = this.props;
    const { platesData, scalesData, className } = this.props;

    return (
      // <TestResults status={status}>
      <TestResults status="loaded">
        <Box title="Общая гемоглобиновая масса" className={className}>
          <p>ОМГ</p>
          <HoriontalScale
            value={scalesData[0].value}
            minValue={8}
            maxValue={20.2}
            maximum={20.1}
            markers={{ spacing: 2, caption: 2 }}
          />
          <p>ОЦК</p>
          <HoriontalScale
            value={scalesData[1].value}
            minValue={40}
            maxValue={140}
            maximum={135}
            type={['ock', 'man']}
            markers={{ spacing: 10, caption: 2 }}
          />
          <Plates data={platesData} />
        </Box>
        {/* <Box title="Динамика">
        </Box> */}
      </TestResults>
    );
  }
}

HemoglobinMassTest.propTypes = {
  className: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  results: PropTypes.shape({
    data: PropTypes.shape({
      data: PropTypes.array,
      total: PropTypes.number
    }),
    dataHashKey: PropTypes.string
  }),
  // status: PropTypes.string.isRequired,
  // statusByRange: PropTypes.string.isRequired
  platesData: PropTypes.array.isRequired,
  scalesData: PropTypes.array.isRequired,
};

HemoglobinMassTest.defaultProps = {
  results: {}
};

HemoglobinMassTest.displayName = 'HemoglobinMassTest';

const mapStateToProps = createStructuredSelector({
  status: makeSelectStatus(CONSTANTS.REDUCER_KEY.RESULTS),
  statusByRange: makeSelectStatus(CONSTANTS.REDUCER_KEY.RESULTS_BY_RANGE),
  platesData: makeSelectPlatesResultByRange(),
  scalesData: makeSelectScalesResultByRange()
});

const withConnect = connect(mapStateToProps);
const withLogic = injectLogic({ logic, type: 'test' });
const withReducer = injectReducer({ key: CONSTANTS.REDUCER_KEY.KEY, reducer });

const styles = css`
  & > ${Plates} {
    margin-top: 20px;
  }

  & > p {
    font: 700 15px/20px var(--ff);
    color: #4d4f4f;
  }
`;

export default compose(
  withConnect,
  withLogic,
  withReducer
)(injectStyles(HemoglobinMassTest, styles));
