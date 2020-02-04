import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Box from '@/components/Box';
import Form from '@/containers/Form';
import injectLogic from '@/utils/injectLogic';

import { saveForm } from './actions';
import { INPUTS } from './constants';
import logic from './logic';

class CoordinationTennisInputFormTest extends Component {
  handleSaveForm = inputs => {
    const { dispatch } = this.props;

    dispatch(saveForm(inputs));
  };

  render() {
    return (
      <Box title="Специфические действия">
        <Form inputs={INPUTS} labelWidth="100px" onSave={this.handleSaveForm} />
      </Box>
    );
  }
}

CoordinationTennisInputFormTest.propTypes = {
  dispatch: PropTypes.func.isRequired
};

CoordinationTennisInputFormTest.defaultProps = {};

CoordinationTennisInputFormTest.displayName = 'CoordinationTennisInputFormTest';

const withConnect = connect();
const withLogic = injectLogic({ logic, type: 'test' });

export default compose(
  withConnect,
  withLogic
)(CoordinationTennisInputFormTest);
