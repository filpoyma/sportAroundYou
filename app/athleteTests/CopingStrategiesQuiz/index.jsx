import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Box from '@/components/Box';
import Quiz, { TYPE as QUIZ_TYPE } from '@/containers/Quiz';
import injectLogic from '@/utils/injectLogic';

import { saveTest } from './actions';
import { DESCRIPTION, OPTIONS, QUESTIONS } from './constants';
import logic from './logic';

class CopingStrategiesQuizTest extends Component {
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
          questions={QUESTIONS}
          questionSettings={{
            options: OPTIONS
          }}
          type={QUIZ_TYPE.OPTIONS}
        />
      </Box>
    );
  }
}

CopingStrategiesQuizTest.propTypes = {
  dispatch: PropTypes.func.isRequired
};

CopingStrategiesQuizTest.defaultProps = {};

CopingStrategiesQuizTest.displayName = 'CopingStrategiesQuizTest';

// CopingStrategiesQuizTest.whyDidYouRender = true;

const withConnect = connect();
const withLogic = injectLogic({ logic, type: 'test' });

export default compose(
  withConnect,
  withLogic
)(CopingStrategiesQuizTest);
