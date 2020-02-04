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

const OPTIONS = [
  {
    id: 0,
    title: 'Никогда',
    value: 0
  },
  {
    id: 1,
    title: 'Иногда',
    value: 1
  },
  {
    id: 2,
    title: 'Часто',
    value: 2
  },
  {
    id: 3,
    title: 'Всегда',
    value: 3
  }
];

class StressFactorsQuizTest extends Component {
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

StressFactorsQuizTest.propTypes = {
  dispatch: PropTypes.func.isRequired
};

StressFactorsQuizTest.defaultProps = {};

StressFactorsQuizTest.displayName = 'StressFactorsQuizTest';

// StressFactorsQuizTest.whyDidYouRender = true;

const withConnect = connect();
const withLogic = injectLogic({ logic, type: 'test' });

export default compose(
  withConnect,
  withLogic
)(StressFactorsQuizTest);
