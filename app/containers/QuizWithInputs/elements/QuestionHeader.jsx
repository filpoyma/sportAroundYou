import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import injectStyles from '@/utils/injectStyles';
import { COLORS } from '@/utils/styleConstants';

const QuestionHeader = ({ className, id, title }) => (
  <div className={className}>
    <h1>{id}</h1>
    <p>{title}</p>
  </div>
);

QuestionHeader.propTypes = {
  className: PropTypes.string.isRequired,
  // Used by StyledComponents
  hasError: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

QuestionHeader.defaultProps = {
  hasError: false
};

QuestionHeader.displayName = 'QuizContainerQuestionHeaderElement';

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
    margin: 0px;
    color: ${props => (props.hasError ? COLORS.ERROR : COLORS.TEXT.PRIMARY)};
    font: 700 15px/18px var(--dff);
  }
`;

export default injectStyles(QuestionHeader, styles);
