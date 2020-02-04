import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Box from '@/components/Box';
import Form, { INPUT_TYPE } from '@/containers/Form';
import injectLogic from '@/utils/injectLogic';

import { saveForm } from './actions';
import { INPUTS } from './constants';
import logic from './logic';

class HemoglobinMassInputFormTest extends Component {
  state = {};

  handleSaveForm = inputs => {
    const { dispatch } = this.props;
    dispatch(saveForm(inputs));
  };

  render() {
    return (
      <Box title="Общая гемоглобиновая масса">
        <Form 
          inputs={INPUTS} 
          labelWidth="330px" 
          onSave={this.handleSaveForm} 
          inputType={INPUT_TYPE.FLOAT}
        />
      </Box>
    );
  }
}

HemoglobinMassInputFormTest.propTypes = {
  dispatch: PropTypes.func.isRequired
};

HemoglobinMassInputFormTest.defaultProps = {};

HemoglobinMassInputFormTest.displayName = 'HemoglobinMassInputFormTest';

const withConnect = connect();
const withLogic = injectLogic({ logic, type: 'test' });

export default compose(
  withConnect,
  withLogic
)(HemoglobinMassInputFormTest);
