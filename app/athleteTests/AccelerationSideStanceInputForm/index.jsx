import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { compose } from 'redux';

import Box from '@/components/Box';
import Form, { INPUT_TYPE } from '@/containers/Form';
import injectLogic from '@/utils/injectLogic';

import { saveForm } from './actions';
import { INPUTS } from './constants';
import logic from './logic';

class AccelerationSideStanceInputFormTest extends Component {
  handleSaveForm = inputs => {
    const { dispatch } = this.props;
    dispatch(saveForm(inputs));
  };

  render() {
    return (
      <Box title="Скоростно-силовые показатели">
        <Form
          inputs={INPUTS}
          labelWidth="250px"
          onSave={this.handleSaveForm}
          inputType={INPUT_TYPE.INT}
        />
      </Box>
    );
  }
}

AccelerationSideStanceInputFormTest.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const withLogic = injectLogic({ logic, type: 'test' });

AccelerationSideStanceInputFormTest.displayName = 'AccelerationSideStanceInputFormTest';

export default compose(withLogic)(AccelerationSideStanceInputFormTest);
