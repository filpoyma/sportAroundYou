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
import { INPUTS } from './constants';
import logic from './logic';

class MASkiEgrometerInputForm extends Component {
  handleSaveForm = inputs => {
    const { dispatch } = this.props;
    dispatch(saveForm(inputs));
  };

  render() {
    const inputs = INPUTS;

    return (
      <Box title="Ответьте, пожалуйста, на вопросы теста">
        <Form
          inputs={INPUTS}
          labelWidth="235px"
          onSave={this.handleSaveForm}
          inputType={INPUT_TYPE.INT}
        />
      </Box>
    );
  }
}

MASkiEgrometerInputForm.propTypes = {
  dispatch: PropTypes.func.isRequired
};

MASkiEgrometerInputForm.defaultProps = {};

MASkiEgrometerInputForm.displayName = 'MASkiEgrometerInputForm';

const mapStateToProps = createStructuredSelector({
  personGender: makeSelectPersonGender()
});

const withConnect = connect(mapStateToProps);
const withLogic = injectLogic({ logic, type: 'test' });

export default compose(
  withConnect,
  withLogic
)(MASkiEgrometerInputForm);
