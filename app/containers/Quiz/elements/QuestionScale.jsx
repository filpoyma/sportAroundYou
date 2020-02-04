import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import RadioButton from '@/components/RadioButton';
import injectStyles from '@/utils/injectStyles';
import { SPACE_SIZE } from '@/utils/styleConstants';

import QuestionHeader from './QuestionHeader';

const QuestionScale = ({
  className,
  id,
  leftLabel,
  onChange,
  rightLabel,
  selectedItem,
  startValue,
  endValue,
  title,
  validate
}) => {
  const radioButtons = [];

  for (let i = 0; i < endValue; i += 1) {
    const value = i + startValue;

    radioButtons.push(
      <RadioButton
        isChecked={selectedItem === value}
        key={`radio_button_${value}`}
        onChange={onChange(value)}
        title={value}
      />
    );
  }

  return (
    <div className={className}>
      <QuestionHeader
        title={title}
        hasError={validate && typeof selectedItem !== 'number'}
        id={id + 1}
      />
      <div>
        <span>{leftLabel}</span>
        {radioButtons}
        <span>{rightLabel}</span>
      </div>
    </div>
  );
};

QuestionScale.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  leftLabel: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  rightLabel: PropTypes.string.isRequired,
  selectedItem: PropTypes.number,
  startValue: PropTypes.number,
  endValue: PropTypes.number,
  title: PropTypes.string,
  validate: PropTypes.bool
};

QuestionScale.defaultProps = {
  selectedItem: undefined,
  startValue: 0,
  endValue: 7,
  title: '',
  validate: false
};

QuestionScale.displayName = 'QuizContainerQuestionScaleComponent';

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
    flex-direction: row;

    & > span:first-child {
      flex: 1;
      margin: ${SPACE_SIZE.S} ${SPACE_SIZE.S} 0 0;
      font: 15px/18px var(--dff);
    }

    & > span:last-child {
      flex: 1;
      margin: ${SPACE_SIZE.S} 0 0 ${SPACE_SIZE.S};
      font: 15px/18px var(--dff);
    }
  }
`;

export default injectStyles(QuestionScale, styles);
