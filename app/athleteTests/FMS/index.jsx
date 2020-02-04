import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Box from '@/components/Box';
import { getDates } from '@/containers/DateSelector/actions';
import TestResults from '@/containers/TestResults';
import injectStyles from '@/utils/injectStyles';

import CONSTANTS, { BLOCK_LABELS, RESULT_KEY } from './constants';
import Arc from './elements/Arc';
import Block from './elements/Block';
import {
  // makeSelectDynamic,
  makeSelectResultsByRange,
  makeSelectStatus
} from './selectors';
import styles from './styles';

const data = {
  [RESULT_KEY.DEEP_SQUAT]: 3,
  [RESULT_KEY.STEP_OVER_LEFT]: 2,
  [RESULT_KEY.STEP_OVER_RIGHT]: 1,
  [RESULT_KEY.LINEAR_LUNGE_LEFT]: 3,
  [RESULT_KEY.LINEAR_LUNGE_RIGTH]: 2,
  [RESULT_KEY.SHOULDER_MOBILITY_LEFT]: 2,
  [RESULT_KEY.SHOULDER_MOBILITY_RIGHT]: 0,
  [RESULT_KEY.LEG_LIFT_LEFT]: 3,
  [RESULT_KEY.LEG_LIFT_RIGHT]: 0,
  [RESULT_KEY.PUSH_UP]: 2,
  [RESULT_KEY.TWIST_LEFT]: 1,
  [RESULT_KEY.TWIST_RIGHT]: 0,
  SUM: 19
};

class FMS extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getDates(CONSTANTS.DATES_PATH));
  }

  render() {
    // const { className, status, statusByRange } = this.props;
    const { className } = this.props;

    return (
      // <TestResults status={status}>
      <TestResults status="loaded">
        {/* <Box status={statusByRange} title="Результаты тестирования"> */}
        <Box status="loaded" title="Результаты тестирования" className={className}>
          <div className="arc">
            <h3>{BLOCK_LABELS.DEEP_SQUAT}</h3>
            <Arc value={data[RESULT_KEY.DEEP_SQUAT]} />
          </div>

          <div className="block">
            <h3>{BLOCK_LABELS.STEP_OVER}</h3>
            <p>лево</p>
            <p>право</p>
            <Block
              valueL={data[RESULT_KEY.STEP_OVER_LEFT]}
              valueR={data[RESULT_KEY.STEP_OVER_RIGHT]}
            />
          </div>

          <div className="block">
            <h3>{BLOCK_LABELS.LINEAR_LUNGE}</h3>
            <Block
              valueL={data[RESULT_KEY.LINEAR_LUNGE_LEFT]}
              valueR={data[RESULT_KEY.LINEAR_LUNGE_RIGTH]}
            />
          </div>

          <div className="block">
            <h3>{BLOCK_LABELS.SHOULDER_MOBILITY}</h3>
            <Block
              valueL={data[RESULT_KEY.SHOULDER_MOBILITY_LEFT]}
              valueR={data[RESULT_KEY.SHOULDER_MOBILITY_RIGHT]}
            />
          </div>

          <div className="block">
            <h3>{BLOCK_LABELS.LEG_LIFT}</h3>
            <Block
              valueL={data[RESULT_KEY.LEG_LIFT_LEFT]}
              valueR={data[RESULT_KEY.LEG_LIFT_RIGHT]}
            />
          </div>

          <div className="arc">
            <h3>{BLOCK_LABELS.PUSH_UP}</h3>
            <Arc value={data[RESULT_KEY.PUSH_UP]} />
          </div>

          <div className="block">
            <h3>{BLOCK_LABELS.TWIST}</h3>
            <Block valueL={data[RESULT_KEY.TWIST_LEFT]} valueR={data[RESULT_KEY.TWIST_RIGHT]} />
          </div>

          <div className="arc">
            <h3>{BLOCK_LABELS.SUM}</h3>
            <Arc sum={data.SUM} />
          </div>
        </Box>
      </TestResults>
    );
  }
}

FMS.propTypes = {
  className: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

FMS.displayName = 'FMSComponent';

const mapStateToProps = createStructuredSelector({
  results: makeSelectResultsByRange(),
  status: makeSelectStatus(CONSTANTS.REDUCER_KEY.RESULTS),
  statusByRange: makeSelectStatus(CONSTANTS.REDUCER_KEY.RESULTS_BY_RANGE)
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(injectStyles(FMS, styles));
