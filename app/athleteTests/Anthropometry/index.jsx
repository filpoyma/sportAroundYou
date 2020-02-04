import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { css } from 'styled-components';

import AnthropometryChart from '@/components/AnthropometryChart';
import Box from '@/components/Box';
import Plates from '@/components/Plates';
import { getDates } from '@/containers/DateSelector/actions';
import TestResults from '@/containers/TestResults';
import { makeSelectPersonGender } from '@/pages/TestPage/selectors';
import injectLogic from '@/utils/injectLogic';
import injectReducer from '@/utils/injectReducer';
import injectStyles from '@/utils/injectStyles';
import { SPACE_SIZE } from '@/utils/styleConstants';

import CONSTANTS from './constants';
import logic from './logic';
import reducer from './reducer';
import { makeSelectResultsByRange, makeSelectStatus } from './selectors';

class AnthropometryTest extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getDates(CONSTANTS.DATES_PATH));
  }

  render() {
    const {
      className,
      personGender,
      results,
      statusAnthropometry,
      statusAnthropometryByRange
    } = this.props;

    const km = results?.data?.km || null;

    return (
      <TestResults status={statusAnthropometry}>
        <Box status={statusAnthropometryByRange} title="Результаты тестирования">
          <AnthropometryChart {...results} gender={personGender} />
          <Plates className={className} data={[{ id: 1, title: 'Костная масса, кг', value: km }]} />
        </Box>
        {/* <Box title="Динамика">
        </Box> */}
      </TestResults>
    );
  }
}

AnthropometryTest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  personGender: PropTypes.oneOf(['F', 'M']).isRequired,
  results: PropTypes.object,
  statusAnthropometry: PropTypes.string.isRequired,
  statusAnthropometryByRange: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

AnthropometryTest.defaultProps = {
  results: {}
};

AnthropometryTest.displayName = 'AnthropometryTest';

const mapStateToProps = createStructuredSelector({
  personGender: makeSelectPersonGender(),
  results: makeSelectResultsByRange(),
  statusAnthropometry: makeSelectStatus(CONSTANTS.REDUCER_KEY.RESULTS),
  statusAnthropometryByRange: makeSelectStatus(CONSTANTS.REDUCER_KEY.RESULTS_BY_RANGE)
});

const withConnect = connect(mapStateToProps);
const withLogic = injectLogic({ logic, type: 'test' });
const withReducer = injectReducer({ key: CONSTANTS.REDUCER_KEY.KEY, reducer });

const styles = css`
  & > div {
    margin-top: ${SPACE_SIZE.M};
  }
`;

export default compose(
  withConnect,
  withLogic,
  withReducer
)(injectStyles(AnthropometryTest, styles));
