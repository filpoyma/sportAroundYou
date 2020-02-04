import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import RadioButton from '@/components/RadioButton';
import injectStyles from '@/utils/injectStyles';

import QuestionHeader from './QuestionHeader';

const QuestionOptions = ({ className, id, options, onChange, selectedItem, title, validate }) => {
  const radioButtons = [];

  options.forEach(option => {
    radioButtons.push(
      <RadioButton
        isChecked={selectedItem === option.value}
        key={`radio_button_${option.id}`}
        onChange={onChange(option.value)}
        title={option.title}
      />
    );
  });

  return (
    <div className={className}>
      <QuestionHeader
        title={title}
        hasError={validate && typeof selectedItem !== 'number'}
        id={id + 1}
      />
      <div>{radioButtons}</div>
    </div>
  );
};

QuestionOptions.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      value: PropTypes.number.isRequired
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  selectedItem: PropTypes.number,
  title: PropTypes.string,
  validate: PropTypes.bool
};

QuestionOptions.defaultProps = {
  selectedItem: undefined,
  title: '',
  validate: false
};

QuestionOptions.displayName = 'QuizContainerQuestionOptionsComponent';

const styles = css`
  width: 100%;

  & + & {
    margin-top: 55px;
  }

  & > div:last-child {
    margin: 0px;
    margin-left: 54px;
    margin-top: 15px;

    display: flex;
    justify-content: center;

    & > div {
      width: 100px;
    }
  }
`;

export default injectStyles(QuestionOptions, styles);
