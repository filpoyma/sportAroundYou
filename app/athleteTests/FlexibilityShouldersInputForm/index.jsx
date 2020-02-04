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

class FlexibilityShouldersInputFormTest extends Component {
  handleSaveForm = inputs => {
    const { dispatch } = this.props;
    dispatch(saveForm(inputs));
  };

  render() {
    return (
      <Box title="Гибкость плечевых суставов, см">
        <Form inputs={INPUTS} labelWidth="96px" onSave={this.handleSaveForm} />
      </Box>
    );
  }
}

FlexibilityShouldersInputFormTest.propTypes = {
  dispatch: PropTypes.func.isRequired
};

FlexibilityShouldersInputFormTest.defaultProps = {};

FlexibilityShouldersInputFormTest.displayName = 'FlexibilityShouldersInputFormTest';

// FlexibilityShouldersInputFormTest.whyDidYouRender = true;

const withConnect = connect();
const withLogic = injectLogic({ logic, type: 'test' });

export default compose(
  withConnect,
  withLogic
)(FlexibilityShouldersInputFormTest);
