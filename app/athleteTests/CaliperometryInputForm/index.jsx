import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { RESULT_KEY } from '@/athleteTests/Caliperometry/constants';
import Box from '@/components/Box';
import Form from '@/containers/Form';
import { makeSelectPersonGender } from '@/pages/TestPage/selectors';
import injectLogic from '@/utils/injectLogic';

import { saveForm } from './actions';
import { INPUTS } from './constants';
import logic from './logic';

class CaliperometryInputFormTest extends Component {
  handleSaveForm = inputs => {
    const { dispatch } = this.props;
    dispatch(saveForm(inputs));
  };

  render() {
    const { personGender } = this.props;
    let inputs = INPUTS;

    if (personGender === 'F') {
      inputs = INPUTS.filter(({ id }) => id !== RESULT_KEY.CHEST);
    }

    return (
      <Box title="Двойная кожно-жировая складка, мм">
        <Form inputs={inputs} labelWidth="115px" onSave={this.handleSaveForm} />
      </Box>
    );
  }
}

CaliperometryInputFormTest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  personGender: PropTypes.oneOf(['F', 'M']).isRequired
};

CaliperometryInputFormTest.defaultProps = {};

CaliperometryInputFormTest.displayName = 'CaliperometryInputFormTest';

// CaliperometryInputFormTest.whyDidYouRender = true;

const mapStateToProps = createStructuredSelector({
  personGender: makeSelectPersonGender()
});

const withConnect = connect(mapStateToProps);
const withLogic = injectLogic({ logic, type: 'test' });

export default compose(
  withConnect,
  withLogic
)(CaliperometryInputFormTest);
