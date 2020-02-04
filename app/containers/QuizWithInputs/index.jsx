import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Button from '@/components/Button';
import Input from '@/components/Input';
import QuestionOptions from '@/containers/Quiz/elements/QuestionOptions';
import QuestionTwoColumns from '@/containers/Quiz/elements/QuestionTwoColumns';
import injectStyles from '@/utils/injectStyles';

import { QUIZ_TYPE } from './constants';
import QuestionScale from './elements/QuestionScale';
import styles from './styles';

let Question;

export const INPUT_TYPE = {
  NONE: 'none',
  INT: 'int',
  FLOAT: 'float'
};

class QuizWithInputs extends Component {
  constructor(props) {
    super(props);

    const { questions, type } = props;

    this.questionsLength = questions.length;
    this.state = {
      answers: [],
      answered: 0,
      filled: 0,
      inputValues: {},
      validate: false
    };

    switch (type) {
      case QUIZ_TYPE.OPTIONS:
        Question = QuestionOptions;
        break;
      case QUIZ_TYPE.TWO_COLUMNS:
        Question = QuestionTwoColumns;
        break;
      case QUIZ_TYPE.SCALE:
      default:
        Question = QuestionScale;
        break;
    }
  }

  handleSelectAnswer = id => answer => () => {
    const answers = [...this.state.answers];
    answers[id] = answer;
    const answered = answers.reduce(
      (prev, answerValue) => prev + (answerValue === undefined ? 0 : 1),
      0
    );

    this.setState(state => ({
      ...state,
      answers,
      answered,
      validate: state.validate && answered === this.questionsLength ? false : state.validate
    }));
  };

  handleInputChange = id => event => {
    const { inputs, inputType } = this.props;
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

    const filled = Object.values(inputValues).reduce(
      (prev, inputValue) => prev + (inputValue === '' ? 0 : 1),
      0
    );

    this.setState(state => ({
      ...state,
      filled,
      inputValues,
      validate: state.validate && filled === this.totalInputs ? false : state.validate
    }));
  };

  handleSave = () => {
    const { onSave, inputs, inputType } = this.props;
    const { answers, answered, validate, inputValues } = this.state;

    if (answered !== this.questionsLength) {
      if (!validate) {
        this.setState(state => ({
          ...state,
          validate: true
        }));
      }

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

    onSave({ answers, parsedValues });
  };

  render() {
    const { className, description, questions, questionSettings, inputs, labelWidth } = this.props;
    const { inputValues, answers, validate } = this.state;

    return (
      <div className={className}>
        {description && <div>{description}</div>}
        <hr />
        {questions.map(({ id, ...rest }, index) => (
          <Question
            id={id}
            key={`psycho_question_${id}`}
            onChange={this.handleSelectAnswer(id)}
            selectedItem={answers?.[index]}
            validate={validate}
            {...questionSettings}
            {...rest}
          />
        ))}
        <hr />
        {inputs.map(({ id, label }) => (
          <Input
            error={validate && !inputValues[id]}
            id={id}
            key={`form_input_${id}`}
            label={label}
            labelWidth={labelWidth}
            onChange={this.handleInputChange(id)}
            value={inputValues[id]}
          />
        ))}
        <hr />
        <Button onClick={this.handleSave} size="big">
          Сохранить и закончить
        </Button>
        {validate && <span>Вы ответили не на все вопросы!</span>}
      </div>
    );
  }
}

QuizWithInputs.propTypes = {
  className: PropTypes.string.isRequired,
  description: PropTypes.string,
  onSave: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired,
  questionSettings: PropTypes.object,
  type: PropTypes.oneOf(Object.values(QUIZ_TYPE)),
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.oneOf(Object.values(INPUT_TYPE))
    })
  ).isRequired,
  inputType: PropTypes.oneOf(Object.values(INPUT_TYPE)),
  labelWidth: PropTypes.string
};

QuizWithInputs.defaultProps = {
  questionSettings: {},
  type: QUIZ_TYPE.SCALE,
  inputType: INPUT_TYPE.NONE,
  labelWidth: null,
  description: null
};

QuizWithInputs.displayName = 'QuizWithInputsContainer';

export const TYPE = QUIZ_TYPE;

export default injectStyles(QuizWithInputs, styles);
