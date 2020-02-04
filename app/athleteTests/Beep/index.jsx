import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Box from '@/components/Box';
import PieChart from '@/components/PieChart';
// import LineChart from '@/components/LineChart';
import { getDates } from '@/containers/DateSelector/actions';
import TestResults from '@/containers/TestResults';
import injectLogic from '@/utils/injectLogic';
import injectReducer from '@/utils/injectReducer';

import CONSTANTS from './constants';
import logic from './logic';
import reducer from './reducer';
import {
  // makeSelectDynamic,
  makeSelectResultsByRange,
  makeSelectStatus
} from './selectors';

class BeepTest extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getDates(CONSTANTS.DATES_PATH));
  }

  render() {
    const {
      results: {
        data: { data, total },
        dataHashKey
      },
      status,
      statusByRange
    } = this.props;

    return (
      <TestResults status={status}>
        <Box status={statusByRange} title="Анаэробная выносливость">
          <PieChart
            data={data}
            dataHashKey={dataHashKey}
            isInteractive={false}
            totalValue={total}
            totalLabel="c"
            colors={item => item.color}
            radialLabelsTextColor={item => item.color}
            radialLabelsLinkColor={item => item.color}
            theme={{
              labels: {
                text: {
                  fontSize: '20px',
                  fontFamily: 'var(--dff)',
                  fontWeight: '700'
                }
              }
            }}
          />
        </Box>
        {/* <Box title="Динамика">
        </Box> */}
      </TestResults>
    );
  }
}

BeepTest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  results: PropTypes.shape({
    data: PropTypes.shape({
      data: PropTypes.array,
      total: PropTypes.number
    }),
    dataHashKey: PropTypes.string
  }),
  status: PropTypes.string.isRequired,
  statusByRange: PropTypes.string.isRequired
};

BeepTest.defaultProps = {
  results: {}
};

BeepTest.displayName = 'BeepTest';

// BeepTest.whyDidYouRender = true;

const mapStateToProps = createStructuredSelector({
  results: makeSelectResultsByRange(),
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
)(BeepTest);
