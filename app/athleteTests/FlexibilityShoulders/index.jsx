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

import { API_PATH, API_TYPE, STATE_KEY } from './constants';
import Chart from './elements/Chart';
import logic from './logic';
import reducer from './reducer';
import {
  // makeSelectDynamic,
  makeSelectResultsByRange,
  makeSelectStatus
} from './selectors';

const Error = () => <Box title="Ошибка">Не удалось получить результаты тестирования</Box>;
const Loader = () => <Spinner position="relative" size="big" />;

class FlexibilityShouldersTest extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getDates(API_PATH, API_TYPE));
  }

  render() {
    const { results, statusFlexibilityShoulders, statusFlexibilityShouldersByRange } = this.props;

    if (statusFlexibilityShoulders === REQUEST_STATUS.ERROR) {
      return <Error />;
    }

    if (statusFlexibilityShoulders === REQUEST_STATUS.LOADING) {
      return <Loader />;
    }

    return (
      <>
        <Box status={statusFlexibilityShouldersByRange} title="Гибкость">
          <Chart data={results} />
        </Box>
        {/* <Box title="Динамика">
        </Box> */}
      </>
    );
  }
}

FlexibilityShouldersTest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  results: PropTypes.object,
  statusFlexibilityShoulders: PropTypes.string.isRequired,
  statusFlexibilityShouldersByRange: PropTypes.string.isRequired
};

FlexibilityShouldersTest.defaultProps = {
  results: {}
};

FlexibilityShouldersTest.displayName = 'FlexibilityShouldersTest';

// FlexibilityShouldersTest.whyDidYouRender = true;

const mapStateToProps = createStructuredSelector({
  results: makeSelectResultsByRange(),
  statusFlexibilityShoulders: makeSelectStatus(STATE_KEY.RESULTS),
  statusFlexibilityShouldersByRange: makeSelectStatus(STATE_KEY.RESULTS_BY_RANGE)
});

const withConnect = connect(mapStateToProps);
const withLogic = injectLogic({ logic, type: 'test' });
const withReducer = injectReducer({ key: STATE_KEY.MAIN, reducer });

export default compose(
  withConnect,
  withLogic,
  withReducer
)(FlexibilityShouldersTest);
