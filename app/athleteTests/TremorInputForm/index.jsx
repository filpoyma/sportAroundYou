import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { RESULT_KEY } from '@/athleteTests/CaliperBodyComposition/constants';
import Box from '@/components/Box';
import Form, { INPUT_TYPE } from '@/containers/Form';
import { makeSelectPersonGender } from '@/pages/TestPage/selectors';
import injectLogic from '@/utils/injectLogic';

import { saveForm } from './actions';
import { INPUTS } from './constants';
import logic from './logic';

class TremorInputForm extends Component {
  handleSaveForm = inputs => {
    const { dispatch } = this.props;
    dispatch(saveForm(inputs));
  };

  render() {
    const inputs = INPUTS;

    return (
      <Box title="Результаты теста">
        <Form
          inputs={INPUTS}
          labelWidth="205px"
          onSave={this.handleSaveForm}
          inputType={INPUT_TYPE.INT}
        />
      </Box>
    );
  }
}

TremorInputForm.propTypes = {
  dispatch: PropTypes.func.isRequired
};

TremorInputForm.defaultProps = {};

TremorInputForm.displayName = 'TremorInputForm';

const mapStateToProps = createStructuredSelector({
  personGender: makeSelectPersonGender()
});

const withConnect = connect(mapStateToProps);
const withLogic = injectLogic({ logic, type: 'test' });

export default compose(
  withConnect,
  withLogic
)(TremorInputForm);
