import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { RESULT_KEY } from '@/athleteTests/MotilityJumpsDiffHorizontal/constants';
import Box from '@/components/Box';
import Form, { INPUT_TYPE } from '@/containers/Form';
import injectLogic from '@/utils/injectLogic';

import { saveTest } from './actions';
import { INPUTS } from './constants';
import logic from './logic';

class MotilityJumpsDiffHorizontalIInputFormTest extends Component {
  handleSaveTest = data => {
    const { dispatch } = this.props;
    const dataTemp = [
      data[RESULT_KEY.JUMP_1],
      data[RESULT_KEY.JUMP_2],
      data[RESULT_KEY.JUMP_3],
      data[RESULT_KEY.JUMP_4],
      data[RESULT_KEY.JUMP_5],
      data[RESULT_KEY.JUMP_6]
    ];

    dispatch(saveTest(dataTemp));
  };

  render() {
    return (
      <Box title="Прыжки, см">
        <Form inputs={INPUTS} onSave={this.handleSaveTest} inputType={INPUT_TYPE.INT} />
      </Box>
    );
  }
}

MotilityJumpsDiffHorizontalIInputFormTest.propTypes = {
  dispatch: PropTypes.func.isRequired
};

MotilityJumpsDiffHorizontalIInputFormTest.defaultProps = {};

MotilityJumpsDiffHorizontalIInputFormTest.displayName = 'MotilityJumpsDiffHorizontalIInputFormTest';

const withConnect = connect();
const withLogic = injectLogic({ logic, type: 'test' });

export default compose(
  withConnect,
  withLogic
)(MotilityJumpsDiffHorizontalIInputFormTest);
