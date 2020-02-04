import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { RESULT_KEY } from '@/athleteTests/CaliperBodyComposition/constants';
import Box from '@/components/Box';
import QuizWithInputs, { INPUT_TYPE } from '@/containers/QuizWithInputs';
import { makeSelectPersonGender } from '@/pages/TestPage/selectors';
import injectLogic from '@/utils/injectLogic';

import { saveForm } from './actions';
import { DESCRIPTION, INPUTS, QUESTIONS } from './constants';
import logic from './logic';

class RPETestQuiz extends Component {
  handleSaveForm = ({ answers, parsedValues }) => {
    const { dispatch } = this.props;
    dispatch(saveForm({ answers, parsedValues }));
  };

  render() {
    const inputs = INPUTS;

    return (
      <Box title="Ответьте, пожалуйста, на вопросы теста">
        <QuizWithInputs
          onSave={this.handleSaveForm}
          questionSettings={{
            leftLabel: 'Полное отсутствие напряжения',
            rightLabel: 'Максимальное напряжение',
            endValue: 11
          }}
          questions={[...QUESTIONS.RPE]}
          inputs={inputs}
          inputType={INPUT_TYPE.INT}
          labelWidth="235px"
        />
      </Box>
    );
  }
}

RPETestQuiz.propTypes = {
  dispatch: PropTypes.func.isRequired
};

RPETestQuiz.defaultProps = {};

RPETestQuiz.displayName = 'RPETestQuiz';

const mapStateToProps = createStructuredSelector({
  personGender: makeSelectPersonGender()
});

const withConnect = connect(mapStateToProps);
const withLogic = injectLogic({ logic, type: 'test' });

export default compose(
  withConnect,
  withLogic
)(RPETestQuiz);
