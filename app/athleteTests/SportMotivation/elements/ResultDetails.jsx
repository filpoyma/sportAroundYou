import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import injectStyles from '@/utils/injectStyles';
import { COLORS, SPACE_SIZE } from '@/utils/styleConstants';

import { MOTIVATION_KEY } from '../constants';

const MOTIVATION_INTERPRETATION = {
  [MOTIVATION_KEY.EU]:
    'Мотив эмоционального удовольствия (ЭУ) - стремление, отражающее радость движения и физических усилий. Ему соответствует суждение: "Я получаю радость от спорта, так как могу двигаться и испытывать напряжение. Это меня воодушевляет и поднимает настроение".',
  [MOTIVATION_KEY.SS]:
    'Мотив социального самоутверждения (СС) - стремление проявить себя, выражающееся в том, что занятия спортом и достигаемые при этом успехи рассматриваются и переживаются с точки зрения личного престижа, уважения знакомыми, зрителями. Ему соответствует суждение: "Я занимаюсь, спортом, так как добиваюсь успехов. Мои товарищи по школе и спортивной команде, так же как зрители, уважают меня за это. Во время соревнований приятно быть в центре внимания, повышать свой престиж.',
  [MOTIVATION_KEY.FS]:
    'Мотив физического самоутверждения (ФС) - стремление к физическому развитию, становлению характера. Ему соответствует следующее суждение: "Я активно занимаюсь спортом, потому что хочу развиться физически и закалить свой характер. Не хочу потолстеть и стать ленивым, хочу быть здоровым".',
  [MOTIVATION_KEY.SE]:
    'Социально-эмоциональный мотив (СЭ) - стремление к спортивным событиям ввиду их высокой эмоциональности, неформальности общения, социальной и эмоциональной раскованности. Ему соответствует суждение: "Мне нравятся занятия спортом, потому что соревноваться очень интересно, потому что радуют достигнутые успехи. Я люблю атмосферу соревнований".',
  [MOTIVATION_KEY.SM]:
    'Социально-моральный мотив (СМ) - стремление к успеху своей команды, ради которой надо тренироваться, иметь хороший контакт с партнерами, тренером. Ему соответствует суждение: "Моя спортивная команда должна занимать лидирующее положение. Я хочу внести свой вклад в это дело. Я не хочу подводить своего тренера и товарищей, это заставляет меня больше тренироваться".',
  [MOTIVATION_KEY.DU]:
    'Мотив достижения успеха в спорте (ДУ) - стремлению к достижению успеха, улучшению личных спортивных результатов. Ему соответствует суждение: "Я регулярно тренируюсь, чтобы поддерживать и повышать достигнутые результаты, чтобы добиться поставленной передо мной (мною) цели".',
  [MOTIVATION_KEY.SP]:
    'Спортивно-познавательный мотив (СП) - стремление к изучению вопросов технической и тактической подготовки научно-обоснованных принципов тренировки. Ему соответствует следующее суждение: "Я хочу разбираться в вопросах техники, тактики, принципах тренировочного процесса, знать, как правильнее тренироваться".',
  [MOTIVATION_KEY.RV]:
    'Рационально-волевой (рекреационный). мотив (РЕ) - желание заниматься спортом для компенсации дефицита двигательной активности при умственной (сидячей) работе Ему соответствует суждение: «Я занимаюсь спортом, чтобы отдохнуть от работы, чтобы получить прилив сил, поэтому спорт для меня -хобби. Спортивные результаты интересуют меня в меньшей степени».',
  [MOTIVATION_KEY.PD]:
    'Мотив подготовки к профессиональной деятельности (ПД) - стремление заниматься спортом для подготовки к требованиям избранной профессиональной деятельности. Ему соответствует суждение: «Достичь хороших результатов в учебе и работе возможно, только если я буду здоров и физически развит. Этому содействует спорт».',
  [MOTIVATION_KEY.GP]:
    'Гражданско-патриотическип мотив (ГП) - стремление к спортивному совершенствованию для успешного выступления на соревнованиях, для поддержания престижа коллектива, города, страны. Ему у соответствует суждение: "Если я буду регулярно тренироваться, то смогу показывать высокие спортивные результаты, защищать честь своего коллектива, спортивного общества, нашей страны".'
};

const ResultDetails = ({ className, maxMotivationKeys, minMotivationKeys }) => (
  <div className={className}>
    <h4>Наиболее выраженный мотив</h4>
    {maxMotivationKeys.map(key => (
      <p key={`max_motivation_${key}`}>{MOTIVATION_INTERPRETATION[key]}</p>
    ))}
    <h4>Наименее выраженный мотив</h4>
    {minMotivationKeys.map(key => (
      <p key={`min_motivation_${key}`}>{MOTIVATION_INTERPRETATION[key]}</p>
    ))}
  </div>
);

ResultDetails.propTypes = {
  className: PropTypes.string.isRequired,
  maxMotivationKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  minMotivationKeys: PropTypes.arrayOf(PropTypes.string).isRequired
};

ResultDetails.defaultProps = {};

ResultDetails.displayName = 'SportMotivationTestResultDetailsElement';

const styles = css`
  color: ${COLORS.TEXT.PRIMARY};

  & > h4 {
    margin: 0 0 ${SPACE_SIZE.XS};
    font: 700 14px/18px var(--ff);
  }

  & > p {
    font: 14px/18px var(--ff);

    & + h4 {
      margin-top: ${SPACE_SIZE.L};
    }
  }
`;

export default injectStyles(ResultDetails, styles);
