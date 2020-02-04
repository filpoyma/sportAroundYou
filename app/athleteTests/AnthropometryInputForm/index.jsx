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

class ANTHROPOMETRYInputFormTest extends Component {
  handleSaveForm = inputs => {
    const { dispatch } = this.props;
    dispatch(saveForm(inputs));
  };

  render() {
    return (
      <Box title="Диаметр и длины">
        <Form inputs={INPUTS} labelWidth="201px" onSave={this.handleSaveForm} />
      </Box>
    );
  }
}

ANTHROPOMETRYInputFormTest.propTypes = {
  dispatch: PropTypes.func.isRequired
};

ANTHROPOMETRYInputFormTest.defaultProps = {};

ANTHROPOMETRYInputFormTest.displayName = 'ANTHROPOMETRYInputFormTest';

const withConnect = connect();
const withLogic = injectLogic({ logic, type: 'test' });

export default compose(
  withConnect,
  withLogic
)(ANTHROPOMETRYInputFormTest);
