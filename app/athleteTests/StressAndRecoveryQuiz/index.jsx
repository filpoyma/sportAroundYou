import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Box from '@/components/Box';
import Quiz from '@/containers/Quiz';
import injectLogic from '@/utils/injectLogic';

import { saveTest } from './actions';
import { DESCRIPTION, QUESTIONS } from './constants';
import logic from './logic';

class StressAndRecoveryQuizTest extends Component {
  handleSaveTest = answers => {
    const { dispatch } = this.props;
    dispatch(saveTest(answers));
  };

  render() {
    return (
      <Box title="Ответьте, пожалуйста, на вопросы теста">
        <Quiz
          description={DESCRIPTION}
          onSave={this.handleSaveTest}
          questionSettings={{
            leftLabel: 'Не подходит совершенно',
            rightLabel: 'Подходит полностью'
          }}
          questions={[...QUESTIONS.RECOVERY, ...QUESTIONS.STRESS]}
        />
      </Box>
    );
  }
}

StressAndRecoveryQuizTest.propTypes = {
  dispatch: PropTypes.func.isRequired
};

StressAndRecoveryQuizTest.defaultProps = {};

StressAndRecoveryQuizTest.displayName = 'StressAndRecoveryQuizTest';

// StressAndRecoveryQuizTest.whyDidYouRender = true;

const withConnect = connect();
const withLogic = injectLogic({ logic, type: 'test' });

export default compose(
  withConnect,
  withLogic
)(StressAndRecoveryQuizTest);
