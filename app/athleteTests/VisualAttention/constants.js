import CONSTANTS from '@/utils/interfaces/constants';

const REDUCER_KEY = 'VisualAttention';
const API_PATH = 'visualAttention';

export default CONSTANTS(REDUCER_KEY, API_PATH);

export const RESULT_KEY = {
  TIME: 'time',
  VIEWED_RINGS: 'viewed_rings',
  ERRORS: 'errors',
  CROSS_OUT_RINGS: 'cross_out_rings',
  ERRORS_SUM: 'errors_sum',
  CROSS_OUT_RINGS_SUM: 'cross_out_rings_sum'
};

export const LABELS = {
  [RESULT_KEY.TIME]: 'Время выполнение теста',
  [RESULT_KEY.VIEWED_RINGS]: 'Количество просмотренных колец',
  [RESULT_KEY.ERRORS]: 'Количество ошибок',
  [RESULT_KEY.CROSS_OUT_RINGS]: 'Кол-во колец, кот. нужно зачеркнуть',
  [RESULT_KEY.ERRORS_SUM]: 'Количество ошибок за тест',
  [RESULT_KEY.CROSS_OUT_RINGS_SUM]: 'Кол-во колец, кот. нужно зачеркнуть в тесте'
};

export const INTERPRETATION = {
  EFFICIENCY: {
    LEVEL_1: 'Уровень развития пространственного мышления очень высокий',
    LEVEL_2: 'Уровень развития пространственного мышления высокий',
    LEVEL_3: 'Уровень развития пространственного мышления выше среднего',
    LEVEL_4: 'Уровень развития пространственного мышления средний',
    LEVEL_5: 'Уровень развития пространственного мышления ниже среднего',
    LEVEL_6: 'Уровень развития пространственного мышления низкий',
    LEVEL_7: 'Уровень развития пространственного мышления очень низкий'
  },
  ACCURACY: {
    LEVEL_1: 'Качество работы высокое',
    LEVEL_2: 'Качество работы выше среднего',
    LEVEL_3: 'Качество работы среднее',
    LEVEL_4: 'Качество работы ниже среднего',
    LEVEL_5: 'Качество работы низкое'
  }
};
