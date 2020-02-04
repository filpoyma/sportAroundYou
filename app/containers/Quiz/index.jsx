import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Button from '@/components/Button';
import QuestionOptions from '@/containers/Quiz/elements/QuestionOptions';
import injectStyles from '@/utils/injectStyles';

import { QUIZ_TYPE } from './constants';
import QuestionScale from './elements/QuestionScale';
import QuestionTwoColumns from './elements/QuestionTwoColumns';
import styles from './styles';

let Question;
class Quiz extends Component {
  constructor(props) {
    super(props);

    const { questions, type } = props;

    this.questionsLength = questions.length;
    this.state = {
      answers: [],
      answered: 0,
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

  handleSave = () => {
    const { onSave } = this.props;
    const { answers, answered, validate } = this.state;

    if (answered !== this.questionsLength) {
      if (!validate) {
        this.setState(state => ({
          ...state,
          validate: true
        }));
      }

      return;
    }

    onSave(answers);
  };

  render() {
    const { className, description, questions, questionSettings, noButton } = this.props;
    const { answers, validate } = this.state;

    return (
      <div className={className}>
        <div>{description}</div>
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
        {!noButton &&
        <Button onClick={this.handleSave} size="big">
          Сохранить и закончить
        </Button>}
        {validate && <span>Вы ответили не на все вопросы!</span>}
      </div>
    );
  }
}

Quiz.propTypes = {
  className: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired,
  questionSettings: PropTypes.object,
  type: PropTypes.oneOf(Object.values(QUIZ_TYPE)),
  noButton: PropTypes.bool,
};

Quiz.defaultProps = {
  questionSettings: {},
  type: QUIZ_TYPE.SCALE,
  noButton: false
};

Quiz.displayName = 'QuizContainer';

export const TYPE = QUIZ_TYPE;

export default injectStyles(Quiz, styles);
