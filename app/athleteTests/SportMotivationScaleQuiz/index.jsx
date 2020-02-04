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

class SportMotivationScaleQuizTest extends Component {
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
            leftLabel: 'Не соответствует вовсе',
            rightLabel: 'Полностью соответствует',
            startValue: 1
          }}
        />
      </Box>
    );
  }
}

SportMotivationScaleQuizTest.propTypes = {
  dispatch: PropTypes.func.isRequired
};

SportMotivationScaleQuizTest.defaultProps = {};

SportMotivationScaleQuizTest.displayName = 'SportMotivationScaleQuizTest';

// SportMotivationScaleQuizTest.whyDidYouRender = true;

const withConnect = connect();
const withLogic = injectLogic({ logic, type: 'test' });

export default compose(
  withConnect,
  withLogic
)(SportMotivationScaleQuizTest);
