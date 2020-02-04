import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Box from '@/components/Box';
import Dropdown from '@/components/Dropdown';
import Form, { INPUT_TYPE } from '@/containers/Form';
import injectLogic from '@/utils/injectLogic';

import { saveForm } from './actions';
import logic from './logic';

const arrayToDropdown = array =>
  array.map((value, index) => ({
    id: index,
    label: value,
    value
  }));

const generateInputs = cycles => {
  const inputs = [];

  for (let i = 0; i < cycles; i += 1) {
    inputs.push({
      id: `${i}`,
      label: `Время цикла ${i + 1}, с`
    });
  }

  return inputs;
};

const DISTANCE_DROPDOWN = arrayToDropdown([4, 5, 6, 8, 10, 12]);
const AMOUNT_DROPDOWN = arrayToDropdown([3, 4, 5]);
const CYCLES_DROPDOWN = arrayToDropdown([3, 4, 5]);

class BeepInputFormTest extends Component {
  state = {
    amount: 3,
    cycles: 3,
    dist: 4,
    inputs: generateInputs(3)
  };

  handleSaveForm = inputs => {
    const { dispatch } = this.props;
    const { cycles, dist } = this.state;

    const sum = [];

    for (let i = 0; i < cycles; i += 1) {
      const result = parseFloat(inputs[`${i}`]);
      sum.push(result);
    }

    const data = {
      cycles,
      dist,
      sum
    };

    dispatch(saveForm(data));
  };

  handleChangeDropdown = key => value => {
    if (key === 'dist') {
      this.setState(state => ({
        ...state,
        dist: value
      }));

      return;
    }

    if (key === 'amount') {
      this.setState(state => ({
        ...state,
        amount: value
      }));

      return;
    }

    this.setState(state => ({
      ...state,
      cycles: value,
      inputs: generateInputs(value)
    }));
  };

  render() {
    const { inputs } = this.state;

    return (
      <Box title="Время преодоления дистанции">
        <Dropdown
          items={DISTANCE_DROPDOWN}
          initialIndex={0}
          label="Длина отрезка, м"
          onChange={this.handleChangeDropdown('dist')}
          width="100px"
        />
        <Dropdown
          items={AMOUNT_DROPDOWN}
          initialIndex={0}
          label="Отрезков в цикле"
          onChange={this.handleChangeDropdown('amount')}
          width="100px"
        />
        <Dropdown
          items={CYCLES_DROPDOWN}
          initialIndex={0}
          label="Циклов"
          onChange={this.handleChangeDropdown('cycles')}
          width="100px"
        />
        <Form
          inputs={inputs}
          inputType={INPUT_TYPE.FLOAT}
          labelWidth="136px"
          onSave={this.handleSaveForm}
        />
      </Box>
    );
  }
}

BeepInputFormTest.propTypes = {
  dispatch: PropTypes.func.isRequired
};

BeepInputFormTest.defaultProps = {};

BeepInputFormTest.displayName = 'BeepInputFormTest';

// BeepInputFormTest.whyDidYouRender = true;

const withConnect = connect();
const withLogic = injectLogic({ logic, type: 'test' });

export default compose(
  withConnect,
  withLogic
)(BeepInputFormTest);
