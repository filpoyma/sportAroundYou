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

class ExplosiveThrowInputFormTest extends Component {
  handleSaveForm = inputs => {
    const { dispatch } = this.props;
    dispatch(saveForm(inputs));
  };

  render() {
    return (
      <Box title="Дальность метания, см">
        <Form inputs={INPUTS} onSave={this.handleSaveForm} />
      </Box>
    );
  }
}

ExplosiveThrowInputFormTest.propTypes = {
  dispatch: PropTypes.func.isRequired
};

ExplosiveThrowInputFormTest.defaultProps = {};

ExplosiveThrowInputFormTest.displayName = 'ExplosiveThrowInputFormTest';

// ExplosiveThrowInputFormTest.whyDidYouRender = true;

const withConnect = connect();
const withLogic = injectLogic({ logic, type: 'test' });

export default compose(
  withConnect,
  withLogic
)(ExplosiveThrowInputFormTest);
