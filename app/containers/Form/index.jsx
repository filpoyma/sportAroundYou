import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Button from '@/components/Button';
import Input from '@/components/Input';
import injectStyles from '@/utils/injectStyles';

import styles from './styles';

export const INPUT_TYPE = {
  NONE: 'none',
  INT: 'int',
  FLOAT: 'float'
};

class Form extends Component {
  state = {
    inputValues: {},
    validate: false
  };

  static getDerivedStateFromProps(props, state) {
    const { inputs } = props;
    const { inputValues } = state;

    const newInputValues = { ...inputValues };

    inputs.forEach(({ id, value }) => {
      if (value && newInputValues[id] !== value) newInputValues[id] = value;
    });

    const newState = { ...state, inputValues: newInputValues };
    return newState;
  }

  resetForm = () => {
    this.setState(() => ({
      inputValues: {},
      validate: false
    }));
  };

  validateInputs = () => {
    const { inputs } = this.props;
    const { inputValues } = this.state;

    const filled = inputs.reduce((accum, { id, validation }) => {
      if (validation !== false && (!inputValues[id] || inputValues[id] === '')) return false;
      return accum;
    }, true);

    return filled;
  };

  handleInputChange = id => event => {
    const { inputs, inputType, syncData } = this.props;
    const inputValues = { ...this.state.inputValues };
    let type = inputType;

    // Check for type overrides
    inputs.forEach(input => {
      if (id === input.id && input.type) {
        type = input.type;
      }
    });

    if (type === INPUT_TYPE.NONE) {
      inputValues[id] = event.target.value;
    }

    if (type === INPUT_TYPE.INT) {
      inputValues[id] = event.target.value.replace(/[^0-9]/g, '');
    }

    if (type === INPUT_TYPE.FLOAT) {
      inputValues[id] = event.target.value.replace(/[^0-9,.]/g, '');
      inputValues[id] = inputValues[id].replace(/,/g, '.');
    }

    const filled = this.validateInputs();

    this.setState(state => ({
      ...state,
      inputValues,
      validate: state.validate && filled ? false : state.validate
    }));

    if (syncData) syncData(inputValues);
  };

  handleSave = () => {
    const { inputs, inputType, onSave } = this.props;
    const { inputValues, validate } = this.state;

    const savingPermision = this.validateInputs();

    if (!savingPermision) {
      if (!validate) {
        this.setState(state => ({
          ...state,
          validate: true
        }));
      }

      return;
    }

    if (inputType === INPUT_TYPE.NONE) {
      onSave(inputValues);

      return;
    }

    const parsedValues = {};

    Object.keys(inputValues).forEach(key => {
      const value = inputValues[key];
      let type = inputType;

      // Check for type overrides
      inputs.forEach(input => {
        if (key === input.id && input.type) {
          type = input.type;
        }
      });

      if (type === INPUT_TYPE.NONE) {
        parsedValues[key] = value;

        return;
      }

      parsedValues[key] = type === INPUT_TYPE.INT ? parseInt(value, 10) : parseFloat(value);
    });

    onSave(parsedValues);
  };

  render() {
    const { className, inputs, labelWidth } = this.props;
    const { inputValues, validate } = this.state;

    return (
      <div className={className}>
        {inputs.map(({ id, label, validation }) => (
          <Input
            error={validate && !inputValues[id] && validation !== false}
            id={id}
            key={`form_input_${id}`}
            label={label}
            labelWidth={labelWidth}
            onChange={this.handleInputChange(id)}
            value={inputValues[id]}
          />
        ))}
        <Button onClick={this.handleSave} size="big">
          Сохранить и закончить
        </Button>
        {validate && <span>Вы заполнили не все поля!</span>}
      </div>
    );
  }
}

Form.propTypes = {
  className: PropTypes.string.isRequired,
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.oneOf(Object.values(INPUT_TYPE)),
      validation: PropTypes.bool,
      value: PropTypes.strings
    })
  ).isRequired,
  inputType: PropTypes.oneOf(Object.values(INPUT_TYPE)),
  labelWidth: PropTypes.string,
  onSave: PropTypes.func.isRequired,
  syncData: PropTypes.func
};

Form.defaultProps = {
  inputType: INPUT_TYPE.NONE,
  labelWidth: null,
  syncData: null
};

Form.displayName = 'FormContainer';

export default injectStyles(Form, styles);
