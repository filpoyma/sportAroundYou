import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import injectStyles from '@/utils/injectStyles';
import { COLORS, SPACE_SIZE } from '@/utils/styleConstants';

import { MOTIVATION_KEY } from '../constants';

const MOTIVATION_INTERPRETATION = {
  [MOTIVATION_KEY.UN]:
    '<b>Мотив узнавания нового</b> – Вам может доставлять удовольствие процесс поиска новых моделей и стратегий тренировок или освоение какого-либо технического элемента. Вы будете проявлять любознательность, искренний интерес и внимание по отношению к рекомендациям тренера и ко всякого рода обучающим материалам в печатных изданиях, на видео и т.д., а также будете стремиться разузнать «секреты» своих потенциальных соперников.',
  [MOTIVATION_KEY.S]:
    '<b>Мотив саморазвития</b> - стремление повышать уровень собственного мастерства, преумножать эффективность своих действий и желание достичь намеченной цели. Во время выступления Вами движет желание показать наивысший результат, проявить свои навыки наилучшим образом и самоутвердиться за счёт этого. В спорте это удовлетворяется за счёт выполнения какой-то сложной задачи, достижения высокого результата, а также повышения уровня своего мастерства.',
  [MOTIVATION_KEY.PE]:
    '<b>Мотив получение положительных эмоций</b> проявляется в Вашем желании посредством выполнения определенной деятельности вызывать возникновение положительных эмоций и ярких впечатлений. Наличие подобного рода мотивации обусловлено тем, что когда Вы находитесь на пике своих возможностей и достигаете существенных результатов, этому сопутствуют такие состояния как радость, эмоциональный подъем, то, что Вами может определяется как «кураж».',
  [MOTIVATION_KEY.SC]:
    '<b>Смещение цели</b> – Вы склоны рассматривать занятия спортом как средство достижения личных целей косвенным образом за счет основных результатов спортивной деятельности. К таковым персональным целям могут относиться саморазвитие личности в различных сферах, знакомство с новыми людьми на фоне общих интересов, а также подержание с помощью занятий спортом хороших отношений с друзьями, получение ценного жизненного опыта и различного рода полезной информации.',
  [MOTIVATION_KEY.D]:
    '<b>Обостренное чувство долга</b> бывает ярко выражено, когда имеет место внешнее (со стороны окружающих) или внутреннее (повышенные требования к самому себе) психологическое давление на личность. Например, часто так бывает, что когда Вы не достигаете результата, которого от Вас ожидают, Вас могут одолевать чувство вины, стыда и смущения из-за того, что Вы приложили недостаточно усилий, что не выполнили свой долг.',
  [MOTIVATION_KEY.SO]:
    '<b>Потребность в социальном одобрении</b> объясняет Ваше поведение, контролируемое сторонними влияниями, такими как материальное вознаграждение, принуждение, похвала, одобрение. Человек, в структуре мотивации которого преобладает потребность в социальном одобрении, занимается спортом для того, чтобы иметь возможность завоевать уважение окружающих, ради престижа быть профессиональным спортсменом, для удовлетворения своих амбиций и для того, чтобы иметь возможность продемонстрировать окружающим свое физическое превосходство и свои достижения.'
};

const getCommonMotivationInterpretation = (externalMotivation, internalMotivation, prcDiff) => {
  if (prcDiff < 15) {
    return 'Оценка структуры спортивной мотивации показала одинаковую значимость внутренней и внешней мотивации, что описывает желание человека заниматься определенным родом деятельности ради получения удовольствия от самого процесса её выполнения, а также ради цели, не связанной напрямую с выполнением поставленной задачи.';
  }

  if (externalMotivation > internalMotivation) {
    return 'Оценка структуры спортивной мотивации показала преобладание внешней мотивации над внутренней, что описывает желание человека заниматься определенным родом деятельности ради цели, не связанной напрямую с выполнением поставленной задачи. например, получение любого рода вознаграждения за выполнение определенной деятельности, обостренного чувства долга и социального одобрения.';
  }

  return 'Оценка структуры спортивной мотивации показала преобладание внутренней мотивации над внешней, что описывает желание человека заниматься определенным родом деятельности ради получения удовольствия от самого процесса её выполнения, а также достижения желаемого результата.';
};

const ResultDetails = ({
  className,
  externalMotivation,
  internalMotivation,
  maxMotivationKeys,
  minMotivationKeys,
  [MOTIVATION_KEY.OM]: lackOfMotivation,
  prcDiff
}) => (
  <div className={className}>
    <p>{getCommonMotivationInterpretation(externalMotivation, internalMotivation, prcDiff)}</p>
    {lackOfMotivation >= 15 && (
      <p>
        Важно обратить внимание на достаточно высокий балл по шкале отсутствие мотивации, что может
        провялятся в том, что демотивированный спортсмен не видит связи между своими действиями и
        тем, что происходит в результате этих действий.
      </p>
    )}
    <h4>Наиболее выраженный мотив</h4>
    {maxMotivationKeys.map(key => (
      <p
        dangerouslySetInnerHTML={{ __html: MOTIVATION_INTERPRETATION[key] }}
        key={`max_motivation_${key}`}
      />
    ))}
    <h4>Наименее выраженный мотив</h4>
    {minMotivationKeys.map(key => (
      <p
        dangerouslySetInnerHTML={{
          __html: `${MOTIVATION_INTERPRETATION[key]} Для данного спортсмена это не характерно.`
        }}
        key={`min_motivation_${key}`}
      />
    ))}
  </div>
);

ResultDetails.propTypes = {
  className: PropTypes.string.isRequired,
  externalMotivation: PropTypes.number.isRequired,
  internalMotivation: PropTypes.number.isRequired,
  minMotivationKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  maxMotivationKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  [MOTIVATION_KEY.OM]: PropTypes.number.isRequired,
  prcDiff: PropTypes.number.isRequired
};

ResultDetails.defaultProps = {};

ResultDetails.displayName = 'SportMotivationScaleTestResultDetailsElement';

const styles = css`
  color: ${COLORS.TEXT.PRIMARY};

  & > h4 {
    margin: 0 0 ${SPACE_SIZE.XS};
    font: 700 14px/18px var(--ff);
  }

  & > p {
    font: 14px/18px var(--dff);

    & + h4 {
      margin-top: ${SPACE_SIZE.L};
    }
  }
`;

export default injectStyles(ResultDetails, styles);