import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import injectStyles from '@/utils/injectStyles';
import { COLORS, OTHER, SPACE_SIZE } from '@/utils/styleConstants';

import { FACTOR_KEY } from '../constants';

const getMostStressFactors = (questions, answers) => {
  const distribution = [[], [], [], []];

  answers.forEach((value, id) => {
    distribution[value].push(id);
  });

  const highFrequencyCount = distribution[2].length + distribution[3].length;
  const lowFrequencyCount = distribution[0].length + distribution[1].length;

  if (lowFrequencyCount === 0) {
    return (
      <p>
        Выбрано много факторов со степенью влияния «Всегда» и «Часто». Это может говорить о том, что
        у спортсмена широкий спектр ситуаций вызывают серьезное напряжение во время соревнований.
      </p>
    );
  }

  if (distribution[3].length > 5) {
    return (
      <p>
        Выбрано много факторов со степенью влияния «Всегда». Это может говорить о том, что у
        спортсмена много ситуаций вызывают серьезное напряжение во время соревнований.
      </p>
    );
  }

  if (distribution[3].length === 0 && distribution[2].length > 5) {
    return (
      <p>
        Выбрано много факторов со степенью влияния «Часто». Это может говорить о том, что широкий
        спектр ситуаций вызывает у спортсмена стрессовую реакцию.
      </p>
    );
  }

  if (highFrequencyCount > 5 && distribution[3].length > 0) {
    return (
      <>
        <p>
          Наиболее сильно влияют на психологическое самочувствие в соревновательном периоде такие
          факторы, как:
        </p>
        <ul>
          {questions.map(({ id, title }) => {
            if (distribution[3].indexOf(id) !== -1) {
              return <li key={`most_stress_factors_${id}`}>{title}</li>;
            }

            return null;
          })}
        </ul>
      </>
    );
  }

  if (highFrequencyCount > 0) {
    return (
      <>
        <p>
          Наиболее сильно влияют на психологическое самочувствие в соревновательном периоде такие
          факторы, как:
        </p>
        <ul>
          {questions.map(({ id, title }) => {
            if (distribution[2].indexOf(id) !== -1 || distribution[3].indexOf(id) !== -1) {
              return <li key={`most_stress_factors_${id}`}>{title}</li>;
            }

            return null;
          })}
        </ul>
      </>
    );
  }

  return (
    <p>
      Выбрано много факторов со степенью влияния «никогда» и «иногда». Это может говорить о том, что
      спортсмен не всегда осознаёт, какие факторы оказывают влияние на её соревновательный
      результат.
    </p>
  );
};

const getInfluence = total => {
  if (total >= 30) {
    return 'Очень высокий уровень влияния стресс-факторов на спортивный результат во время соревнований.';
  }

  if (total >= 16) {
    return 'Высокий уровень влияния стресс-факторов на спортивный результат во время соревнований.';
  }

  if (total >= 7) {
    return 'Достаточный уровень влияния стресс-факторов на спортивный результат во время соревнований';
  }

  return 'Низкий уровень влияния стресс-факторов на спортивный результат во время соревнований';
};

const getRecommendation = (orgQuestions, readiness, personal) => {
  if (orgQuestions === readiness && orgQuestions === personal) {
    return 'Нет наиболее выраженной группы стресс-факторов.';
  }

  if (Math.max(orgQuestions, readiness, personal) === orgQuestions) {
    if (orgQuestions === readiness) {
      return 'Наиболее выраженная группа стресс-факторов – готовность к соревнованию и организационные вопросы.';
    }

    if (orgQuestions === personal) {
      return 'Наиболее выраженная группа стресс-факторов – личные переживания и организационные вопросы.';
    }

    return 'Наиболее выраженная группа стресс-факторов – организационные вопросы. Рекомендуется уделять особое внимание возможным форс-мажорным обстоятельствам во время соревнований, готовить стратегии реагирования.';
  }

  if (readiness >= personal) {
    if (readiness === personal) {
      return 'Наиболее выраженная группа стресс-факторов – готовность к соревнованию и личные переживания.';
    }

    return 'Наиболее выраженная группа стресс-факторов – готовность к соревнованию. Рекомендуется уделять особое внимание обсуждению готовности спортсмена к соревнованиям, формировать уверенность в уровне подготовки в течение тренировочного цикла.';
  }

  return 'Наиболее выраженная группа стресс-факторов – личные переживания. Рекомендуется включить в психологическую подготовку спортсмена упражнения на саморегуляцию и контроль мыслей.';
};

const ResultDetails = ({
  className,
  [FACTOR_KEY.ORG_QUESTIONS]: orgQuestions,
  [FACTOR_KEY.READINESS]: readiness,
  [FACTOR_KEY.PERSONAL]: personal,
  rawData,
  questions
}) => (
  <div className={className}>
    {getMostStressFactors(questions, rawData)}
    <hr />
    <p>{getInfluence(orgQuestions + readiness + personal)}</p>
    <p>{getRecommendation(orgQuestions, readiness, personal)}</p>
  </div>
);

ResultDetails.propTypes = {
  className: PropTypes.string.isRequired,
  [FACTOR_KEY.ORG_QUESTIONS]: PropTypes.number.isRequired,
  [FACTOR_KEY.READINESS]: PropTypes.number.isRequired,
  [FACTOR_KEY.PERSONAL]: PropTypes.number.isRequired,
  rawData: PropTypes.array.isRequired,
  questions: PropTypes.array.isRequired
};

ResultDetails.defaultProps = {};

ResultDetails.displayName = 'StressFactorsTestResultDetailsElement';

const styles = css`
  color: ${COLORS.TEXT.PRIMARY};

  & > p,
  & > ul > li {
    font: 14px/18px var(--dff);
  }

  & > ul {
    padding-inline-start: ${SPACE_SIZE.S};
  }

  & > hr {
    ${OTHER.HR}
  }
`;

export default injectStyles(ResultDetails, styles);
