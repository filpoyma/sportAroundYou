import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { RESULT_KEY } from '@/athleteTests/CaliperBodyComposition/constants';
import Box from '@/components/Box';
import Form from '@/containers/Form';
import { makeSelectPersonGender } from '@/pages/TestPage/selectors';
import injectLogic from '@/utils/injectLogic';

import { saveForm } from './actions';
import { INPUTS } from './constants';
import logic from './logic';

class CaliperBodyCompositionInputFormTest extends Component {
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
      <Box title="Толщины и обхваты">
        <Form inputs={inputs} labelWidth="285px" onSave={this.handleSaveForm} />
      </Box>
    );
  }
}

CaliperBodyCompositionInputFormTest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  personGender: PropTypes.oneOf(['F', 'M']).isRequired
};

CaliperBodyCompositionInputFormTest.defaultProps = {};

CaliperBodyCompositionInputFormTest.displayName = 'CaliperBodyCompositionInputFormTest';

const mapStateToProps = createStructuredSelector({
  personGender: makeSelectPersonGender()
});

const withConnect = connect(mapStateToProps);
const withLogic = injectLogic({ logic, type: 'test' });

export default compose(
  withConnect,
  withLogic
)(CaliperBodyCompositionInputFormTest);
