import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Box from '@/components/Box';
import Quiz, { TYPE as QUIZ_TYPE } from '@/containers/Quiz';
import injectLogic from '@/utils/injectLogic';

import { saveTest } from './actions';
import { DESCRIPTION, QUESTIONS } from './constants';
import logic from './logic';

class SportMotivationQuizTest extends Component {
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
          type={QUIZ_TYPE.TWO_COLUMNS}
        />
      </Box>
    );
  }
}

SportMotivationQuizTest.propTypes = {
  dispatch: PropTypes.func.isRequired
};

SportMotivationQuizTest.defaultProps = {};

SportMotivationQuizTest.displayName = 'SportMotivationQuizTest';

// SportMotivationQuizTest.whyDidYouRender = true;

const withConnect = connect();
const withLogic = injectLogic({ logic, type: 'test' });

export default compose(
  withConnect,
  withLogic
)(SportMotivationQuizTest);
