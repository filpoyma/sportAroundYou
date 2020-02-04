import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import RadioButton from '@/components/RadioButton';
import injectStyles from '@/utils/injectStyles';
import { SPACE_SIZE } from '@/utils/styleConstants';

import QuestionHeaderTwoColumns from './QuestionHeaderTwoColumns';

const QuestionTwoColumns = ({ className, id, onChange, selectedItem, questions, validate }) => (
  <div className={className}>
    <QuestionHeaderTwoColumns
      hasError={validate && isEmpty(selectedItem)}
      id={id + 1}
      firstTitle={questions[0].title}
      secondTitle={questions[1].title}
    />
    <div>
      <div>
        <RadioButton
          title="Немного"
          isChecked={selectedItem?.[0] === 1}
          onChange={onChange([1, 0])}
        />
        <RadioButton
          title="Достаточно"
          isChecked={selectedItem?.[0] === 2}
          onChange={onChange([2, 0])}
        />
        <RadioButton
          title="Значительно"
          isChecked={selectedItem?.[0] === 3}
          onChange={onChange([3, 0])}
        />
      </div>
      <div>
        <RadioButton
          title="Немного"
          isChecked={selectedItem?.[1] === 1}
          onChange={onChange([0, 1])}
        />
        <RadioButton
          title="Достаточно"
          isChecked={selectedItem?.[1] === 2}
          onChange={onChange([0, 2])}
        />
        <RadioButton
          title="Значительно"
          isChecked={selectedItem?.[1] === 3}
          onChange={onChange([0, 3])}
        />
      </div>
    </div>
  </div>
);

QuestionTwoColumns.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired,
  selectedItem: PropTypes.array,
  validate: PropTypes.bool
};

QuestionTwoColumns.defaultProps = {
  selectedItem: [],
  validate: false
};

QuestionTwoColumns.displayName = 'QuizContainerQuestionTwoColumnsComponent';

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

    & > div {
      display: flex;
      justify-content: space-between;
      width: 50%;

      & + div {
        margin-left: ${SPACE_SIZE.S};
      }
    }
  }
`;

export default injectStyles(QuestionTwoColumns, styles);
