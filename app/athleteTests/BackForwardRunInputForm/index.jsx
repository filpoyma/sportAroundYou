import PropTypes from 'prop-types';
import React, { Component, createRef } from 'react';
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

const generateInputs = amount => {
  const inputs = [
    {
      id: 'touch',
      label: 'Касание',
      type: INPUT_TYPE.NONE
    }
  ];

  for (let i = 0; i < amount; i += 1) {
    inputs.push({
      id: i,
      label: `Время отрезка ${inputs.length}, с`
    });
  }

  return inputs;
};

const DISTANCE_DROPDOWN = arrayToDropdown([6, 8, 10, 12, 15, 20]);
const AMOUNT_DROPDOWN = arrayToDropdown([6, 8, 10, 12]);
const POSITION_DROPDOWN = [
  { id: 'SIDE', label: 'Изнутри (боковая стойка)' },
  { id: 'FRONT', label: 'Высокий старт (снаружи)' }
];

class BackForwardRunInputFormTest extends Component {
  state = {
    amount: 6,
    dist: 6,
    inputs: generateInputs(6),
    position: 'SIDE'
  };

  formRef = createRef();

  handleSaveForm = inputs => {
    const { dispatch } = this.props;
    const { amount, dist, position } = this.state;

    const rawData = [];

    for (let i = 0; i < amount; i += 1) {
      rawData.push(inputs[i]);
    }

    const data = {
      dist,
      rawData,
      position,
      touch: inputs.touch
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
      this.setState(
        state => ({
          ...state,
          amount: value,
          inputs: generateInputs(value)
        }),
        () => {
          this.formRef?.current.resetForm();
        }
      );

      return;
    }

    this.setState(state => ({
      ...state,
      position: value
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
          width="70px"
        />
        <Dropdown
          items={AMOUNT_DROPDOWN}
          initialIndex={0}
          label=" Количество отрезков"
          onChange={this.handleChangeDropdown('amount')}
          width="70px"
        />
        <Dropdown
          items={POSITION_DROPDOWN}
          initialIndex={0}
          label="Стартовая позиция"
          onChange={this.handleChangeDropdown('position')}
          width="230px"
        />
        <Form
          inputs={inputs}
          inputType={INPUT_TYPE.FLOAT}
          labelWidth="136px"
          onSave={this.handleSaveForm}
          ref={this.formRef}
        />
      </Box>
    );
  }
}

BackForwardRunInputFormTest.propTypes = {
  dispatch: PropTypes.func.isRequired
};

BackForwardRunInputFormTest.defaultProps = {};

BackForwardRunInputFormTest.displayName = 'BackForwardRunInputFormTest';

// BackForwardRunInputFormTest.whyDidYouRender = true;

const withConnect = connect();
const withLogic = injectLogic({ logic, type: 'test' });

export default compose(
  withConnect,
  withLogic
)(BackForwardRunInputFormTest);
