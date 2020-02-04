import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { RESULT_KEY } from '@/athleteTests/CaliperBodyComposition/constants';
import Box from '@/components/Box';
import Quiz from '@/containers/Quiz';
import { makeSelectPersonGender } from '@/pages/TestPage/selectors';
import injectLogic from '@/utils/injectLogic';
import TestResults from '@/containers/TestResults';

import { saveForm } from './actions';
import { DESCRIPTION, DESCRIPTION_SECOND, INPUTS, QUESTIONS } from './constants';
import logic from './logic';

class AnxietyTest extends Component {
  handleSaveForm = inputs => {
    const { dispatch } = this.props;
    dispatch(saveForm(inputs));
  };

  render() {
    const inputs = INPUTS;

    return (
      <TestResults>
      <Box title="Ответьте, пожалуйста, на вопросы 1 части теста">
        <Quiz
          onSave={this.handleSaveForm}
          questionSettings={{
            leftLabel: 'Нет, это не так',
            rightLabel: 'Совершенно верно',
            endValue: 4,
            startValue: 1
          }}
          questions={[...QUESTIONS.FIRST]}
          labelWidth="235px"
          description = {DESCRIPTION}
          noButton
        />
      </Box>
      <Box title="Ответьте, пожалуйста, на вопросы 2 части теста">
        <Quiz
          onSave={this.handleSaveForm}
          questionSettings={{
            leftLabel: 'Никогда',
            rightLabel: 'Всегда',
            endValue: 4,
            startValue: 1
          }}
          questions={[...QUESTIONS.SECOND]}
          labelWidth="235px"
          description = {DESCRIPTION_SECOND}
        />
      </Box>
      </TestResults>
    );
  }
}

AnxietyTest.propTypes = {
  dispatch: PropTypes.func.isRequired
};

AnxietyTest.defaultProps = {};

AnxietyTest.displayName = 'AnxietyTest';

const mapStateToProps = createStructuredSelector({
  personGender: makeSelectPersonGender()
});

const withConnect = connect(mapStateToProps);
const withLogic = injectLogic({ logic, type: 'test' });

export default compose(
  withConnect,
  withLogic
)(AnxietyTest);
