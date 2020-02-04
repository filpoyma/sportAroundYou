import CONSTANTS from '@/utils/interfaces/constants';

const REDUCER_KEY = 'SpatialIntellection';
const API_PATH = 'SpatialIntellection';

export default CONSTANTS(REDUCER_KEY, API_PATH);

export const RESULT_KEY = {
  TIME: 'time',
  VIEWED_RINGS: 'viewed_rings',
  ERRORS: 'errors',
  CROSS_OUT_RINGS: 'cross_out_rings',
  ERRORS_SUM: 'errors_sum',
  CROSS_OUT_RINGS_SUM: 'cross_out_rings_sum'
};

export const INTERPRETATION = {
  TIME: {
    LEVEL_1: 'Скорость обработки информации высокая',
    LEVEL_2: 'Скорость обработки информации выше средней',
    LEVEL_3: 'Скорость обработки информации средняя',
    LEVEL_4: 'Скорость обработки информации ниже средней',
    LEVEL_5: 'Скорость обработки информации низкая'
  },
  ACCURACY: {
    LEVEL_1: 'Высокий уровень точности',
    LEVEL_2: 'Уровень точности выше среднего',
    LEVEL_3: 'Средний уровень точности',
    LEVEL_4: 'Уровень точности ниже среднего',
    LEVEL_5: 'Низкий уровень точности'
  }
};
