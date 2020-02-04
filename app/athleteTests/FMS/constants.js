import CONSTANTS from '@/utils/interfaces/constants';

const REDUCER_KEY = 'FMS';
const API_PATH = 'fms';

export default CONSTANTS(REDUCER_KEY, API_PATH);

export const RESULT_KEY = {
  DEEP_SQUAT: 'deep_squat',
  STEP_OVER_LEFT: 'step_over_left',
  STEP_OVER_RIGHT: 'step_over_right',
  LINEAR_LUNGE_LEFT: 'linear_lunge_left',
  LINEAR_LUNGE_RIGTH: 'linear_lunge_rigth',
  SHOULDER_MOBILITY_LEFT: 'shoulder_mobility_left',
  SHOULDER_MOBILITY_RIGHT: 'shoulder_mobility_right',
  LEG_LIFT_LEFT: 'leg_lift_left',
  LEG_LIFT_RIGHT: 'leg_lift_right',
  PUSH_UP: 'push_up',
  TWIST_LEFT: 'twist_left',
  TWIST_RIGHT: 'twist_right'
};

export const LABELS = {
  [RESULT_KEY.DEEP_SQUAT]: 'Глубокий присед',
  [RESULT_KEY.STEP_OVER_LEFT]: 'Перешагивание препятствия, левая',
  [RESULT_KEY.STEP_OVER_RIGHT]: 'Перешагивание препятствия, правая',
  [RESULT_KEY.LINEAR_LUNGE_LEFT]: 'Линейный выпад, левая',
  [RESULT_KEY.LINEAR_LUNGE_RIGTH]: 'Линейный выпад, правая',
  [RESULT_KEY.SHOULDER_MOBILITY_LEFT]: 'Подвижность плеч, левая',
  [RESULT_KEY.SHOULDER_MOBILITY_RIGHT]: 'Подвижность плеч, правая',
  [RESULT_KEY.LEG_LIFT_LEFT]: 'Подъем прямой ноги, левая',
  [RESULT_KEY.LEG_LIFT_RIGHT]: 'Подъем прямой ноги, правая',
  [RESULT_KEY.PUSH_UP]: 'Отжимание (стабилизация корпуса)',
  [RESULT_KEY.TWIST_LEFT]: 'Скручивание, левая',
  [RESULT_KEY.TWIST_RIGHT]: 'Скручивание, правая'
};

export const BLOCK_LABELS = {
  DEEP_SQUAT: 'ГЛУБОКИЙ\nПРИСЕД',
  STEP_OVER: 'ПЕРЕШАГИВАНИЕ\nПРЕПЯТСТВИЯ',
  LINEAR_LUNGE: 'ЛИНЕЙНЫЙ\nВЫПАД',
  SHOULDER_MOBILITY: 'ПОДВИЖНОСТЬ\nПЛЕЧ',
  LEG_LIFT: 'ПОДЪЕМ ПРЯМОЙ\nНОГИ',
  PUSH_UP: 'ОТЖИМАНИЕ\n(СТАБИЛИЗАЦИЯ КОРПУСА)',
  TWIST: 'СКРУЧИВАНИЕ',
  SUM: 'СУММА'
};
