import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Box from '@/components/Box';
import Form, { INPUT_TYPE } from '@/containers/Form';
import { makeSelectPersonGender } from '@/pages/TestPage/selectors';
import injectLogic from '@/utils/injectLogic';

import { saveForm } from './actions';
import { DESCRIPTION, INPUTS, QUESTIONS } from './constants';
import logic from './logic';

class ClaimsInputForm extends Component {
  handleSaveForm = inputs => {
    const { dispatch } = this.props;
    dispatch(saveForm(inputs));
  };

  render() {
    return (
      <Box title="Данные тестирования">
        <Form inputs={INPUTS} onSave={this.handleSaveForm} inputType={INPUT_TYPE.INT} />
      </Box>
    );
  }
}

ClaimsInputForm.propTypes = {
  dispatch: PropTypes.func.isRequired
};

ClaimsInputForm.defaultProps = {};

ClaimsInputForm.displayName = 'ClaimsInputForm';

const mapStateToProps = createStructuredSelector({
  personGender: makeSelectPersonGender()
});

const withConnect = connect(mapStateToProps);
const withLogic = injectLogic({ logic, type: 'test' });

export default compose(
  withConnect,
  withLogic
)(ClaimsInputForm);
