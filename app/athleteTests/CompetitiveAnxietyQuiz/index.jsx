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

import { saveForm } from './actions';
import { DESCRIPTION, INPUTS, QUESTIONS } from './constants';
import logic from './logic';

class CompetitiveAnxietyQuiz extends Component {
  handleSaveForm = answers => {
    const { dispatch } = this.props;
    dispatch(saveForm(answers));
  };

  render() {

    return (
      <Box title="Ответьте, пожалуйста, на вопросы теста">
        <Quiz
          description={DESCRIPTION}
          onSave={this.handleSaveForm}
          questionSettings={{
            leftLabel: 'Совершенно не соответствует',
            rightLabel: 'Полностью соответствует',
            startValue: 1,
            endValue: 4
          }}
          questions={[...QUESTIONS]}
        />
      </Box>
    );
  }
}

CompetitiveAnxietyQuiz.propTypes = {
  dispatch: PropTypes.func.isRequired
};

CompetitiveAnxietyQuiz.defaultProps = {};

CompetitiveAnxietyQuiz.displayName = 'CompetitiveAnxietyQuiz';

const mapStateToProps = createStructuredSelector({
  personGender: makeSelectPersonGender()
});

const withConnect = connect(mapStateToProps);
const withLogic = injectLogic({ logic, type: 'test' });

export default compose(
  withConnect,
  withLogic
)(CompetitiveAnxietyQuiz);
