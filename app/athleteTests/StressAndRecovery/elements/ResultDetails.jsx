import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import SpeedometerChart from '@/components/SpeedometerChart';
import injectStyles from '@/utils/injectStyles';
import { COLORS, SPACE_SIZE } from '@/utils/styleConstants';

const getRecoveryInterpretation = answers => {
  const text = [];

  if (answers[0] > 4) {
    text.push({
      id: 1,
      text:
        'У вас высокие значениями по шкале физическая работоспособность, вы чувствуете себя сильным, энергичным, в хорошей физической форме, полным сил. Что может означать хорошую адаптацию к нагрузкам и успешную стратегию восстановления.'
    });
  }

  if (answers[1] > 4) {
    text.push({
      id: 2,
      text:
        'У Вас высокие значения по шкале умственная работоспособность, вы хорошо сконцентрированы, внимательны, сосредоточены и готовы к работе. Значения этой шкалы зависит от того в какое время вы отвечали на вопрос, так как по утрам уровень умственной работоспособности выше, далее он снижается к вечеру.'
    });
  }

  if (answers[2] > 4) {
    text.push({
      id: 3,
      text:
        'У Вас высокие значения по шкале эмоциональный баланс, вы пребываете в хорошем настроении, эмоционально стабильны, чувствуете, что все под контролем. Спортсмены, испытывающие одинаковый стресс и трудности восстановления, могут оценивать свое состояние по этой шкале по-разному. Это зависит от индивидуального восприятия спортсменов своего состояния.'
    });
  }

  if (answers[3] > 4) {
    text.push({
      id: 4,
      text:
        'У Вас высокие значения по шкале общее восстановление, вы восстановленный, отдохнувший, физически расслабленный. Данная шкала оценивает вашу реакцию на восстановление и стрессовые стимулы.'
    });
  }

  if (text.length === 0) {
    text.push({
      id: 1,
      text:
        'Ваш средний балл по оценке физической работоспособности, умственной работоспособности, эмоционального баланса и общего восстановления. Чем выше интегральная оценка, тем лучше уровень восстановления.'
    });
  }

  return text;
};

const getStressInterpretation = answers => {
  const text = [];

  if (answers[4] > 4) {
    text.push({
      id: 5,
      text:
        'У Вас высокие значения по шкале стресс для мускулатуры, скорее всего вы ощущаете мышечное истощение, мышечную усталость, боли в мышцах, забитость мышц.'
    });
  }

  if (answers[5] > 4) {
    text.push({
      id: 6,
      text:
        'У Вас высокие значения по шкале нехватка мотивации, скорее всего вы, апатичный, незаинтересованный, чувствуете, что не хватает энергии. Данная реакция может быть на длительно действующие стрессовые факторы. Изменения по данной шкале требует более длительного времени, чем остальные.'
    });
  }

  if (answers[6] > 4) {
    text.push({
      id: 7,
      text:
        'У Вас высокие значения по шкале негативное эмоциональное состояние, вы я чувствуете себя разбитым, находитесь в состоянии стресса, раздражительный, вспыльчивый. Такие реакции зависят от личной ситуации. Одинаковые стрессоры могут переживаться спортсменами на разном уровне.'
    });
  }

  if (answers[7] > 4) {
    text.push({
      id: 8,
      text:
        'У Вас высокие значения по шкале общий стресс, вы уставший, измученный, перегружены, физически истощены. Ваш уровень восприятия стресса зависит от ситуации.'
    });
  }

  if (text.length === 0) {
    text.push({
      id: 5,
      text:
        'Ваш средний балл по оценке стресса для мускулатуры, нехватке мотивации, негативному эмоциональному состоянию и общего стресса. Чем выше интегральная оценка, тем выше Ваш уровень стресса.'
    });
  }

  return text;
};

const ResultDetails = ({ answers, className, scale1, scale2 }) => (
  <div className={className}>
    <div>
      <div>
        <SpeedometerChart
          minValue={0}
          minValueLabel="0.0"
          maxValue={6}
          maxValueLabel="6.0"
          value={scale1}
        />
      </div>
      <div>
        <h3>Уровень восстановления</h3>
        {getRecoveryInterpretation(answers).map(({ id, text }) => (
          <p key={`recovery_interpretation_${id}`}>{text}</p>
        ))}
      </div>
    </div>
    <div>
      <div>
        <SpeedometerChart
          minValue={0}
          minValueLabel="0.0"
          maxValue={6}
          maxValueLabel="6.0"
          value={scale2}
        />
      </div>
      <div>
        <h3>Уровень стресса</h3>
        {getStressInterpretation(answers).map(({ id, text }) => (
          <p key={`recovery_interpretation_${id}`}>{text}</p>
        ))}
      </div>
    </div>
  </div>
);

ResultDetails.propTypes = {
  answers: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
  scale1: PropTypes.number.isRequired,
  scale2: PropTypes.number.isRequired
};

ResultDetails.defaultProps = {};

ResultDetails.displayName = 'StressAndRecoveryTestResultDetailsElement';

const styles = css`
  padding: ${SPACE_SIZE.M} 0;

  & > div {
    display: flex;
    justify-content: space-between;
    color: ${COLORS.TEXT.PRIMARY};

    & > *:first-child {
      flex: 1;
      margin-right: ${SPACE_SIZE.M};
    }

    & > *:last-child {
      width: 404px;
    }

    h3 {
      margin: 0 0 ${SPACE_SIZE.XXS};
      font: 400 15px/20px var(--ff);
    }

    p {
      margin: 0;
      font: 14px/16px var(--dff);

      & + p {
        margin-top: ${SPACE_SIZE.S};
      }
    }

    & + div {
      margin-top: 40px;
    }
  }
`;

export default injectStyles(ResultDetails, styles);
