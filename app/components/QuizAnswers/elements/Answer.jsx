import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import injectStyles from '@/utils/injectStyles';
import { COLORS, SPACE_SIZE } from '@/utils/styleConstants';

const Answer = ({ answer, className, id, title }) => (
  <div className={className}>
    <h1>{id + 1}</h1>
    <p>{title}</p>
    <p>
      Ответ: <b>{answer}</b>
    </p>
  </div>
);

Answer.propTypes = {
  answer: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  // Used by StyledComponents
  color: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

Answer.defaultProps = {};

Answer.displayName = 'QuizAnswersComponentAnswerElement';

const styles = css`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;

  & > h1 {
    width: 54px;
    min-width: 54px;
    margin: 0px;
    color: ${props => props.color};
    font: 22px/26px var(--dff);
    text-align: center;
    font-weight: bold;
  }

  & > p {
    width: 85%;
    margin: 0px;
    color: ${COLORS.TEXT.PRIMARY};
    font: 15px/18px var(--dff);
  }

  & > p:last-child {
    width: 15%;
    margin: 0px;
    padding-left: 20px;
    color: ${COLORS.TEXT.PRIMARY};
    font: 15px/18px var(--dff);
  }

  & + & {
    margin-top: ${SPACE_SIZE.L};
  }
`;

export default injectStyles(Answer, styles);
