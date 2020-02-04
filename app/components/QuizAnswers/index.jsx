import PropTypes from 'prop-types';
import React from 'react';

import { COLORS } from '@/utils/styleConstants';

import Answer from './elements/Answer';

const QuizAnswers = ({ answers, color, multiQuestions, questions }) => {
  if (multiQuestions) {
    return (
      <>
        {questions.map((question, index) => {
          const answeredQuestionIndex = answers[index][0] > 0 ? 0 : 1;
          const { title } = question.questions[answeredQuestionIndex];

          return (
            <Answer
              answer={answers[index][answeredQuestionIndex]}
              color={color}
              id={question.id}
              key={`quiz_answer_${question.id}`}
              title={title}
            />
          );
        })}
      </>
    );
  }
  return (
    <>
      {questions.map(({ id, title }, index) => (
        <Answer
          answer={answers[index]}
          color={color}
          id={id}
          key={`quiz_answer_${id}`}
          title={title}
        />
      ))}
    </>
  );
};

QuizAnswers.propTypes = {
  answers: PropTypes.array.isRequired,
  color: PropTypes.string,
  multiQuestions: PropTypes.bool,
  questions: PropTypes.array.isRequired
};

QuizAnswers.defaultProps = {
  color: COLORS.QUIZ.PRIMARY,
  multiQuestions: false
};

QuizAnswers.displayName = 'QuizAnswersComponent';

export default QuizAnswers;
