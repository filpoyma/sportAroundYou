import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import injectStyles from '@/utils/injectStyles';
import { COLORS, SPACE_SIZE } from '@/utils/styleConstants';

const QuestionHeaderTwoColumns = ({ className, id, firstTitle, secondTitle }) => (
  <div className={className}>
    <h1>{id}</h1>
    <p>{firstTitle}</p>
    <p>{secondTitle}</p>
  </div>
);

QuestionHeaderTwoColumns.propTypes = {
  className: PropTypes.string.isRequired,
  firstTitle: PropTypes.string.isRequired,
  // Used by StyledComponents
  hasError: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  id: PropTypes.number.isRequired,
  secondTitle: PropTypes.string.isRequired
};

QuestionHeaderTwoColumns.defaultProps = {
  hasError: false
};

QuestionHeaderTwoColumns.displayName = 'QuizContainerQuestionHeaderTwoColumnsElement';

const styles = css`
  position: relative;
  width: 100%;
  min-height: 40px;
  display: flex;
  flex-direction: row;

  & h1 {
    width: 54px;
    min-width: 54px;
    margin: 0px;
    color: ${COLORS.QUIZ.PRIMARY};
    font: 700 22px/26px var(--dff);
    text-align: center;
  }

  & p {
    width: 50%;
    margin: 0px;
    color: ${props => (props.hasError ? COLORS.ERROR : COLORS.TEXT.PRIMARY)};
    font: 700 15px/18px var(--dff);

    & + p {
      margin-left: ${SPACE_SIZE.S};
    }
  }
`;

export default injectStyles(QuestionHeaderTwoColumns, styles);
