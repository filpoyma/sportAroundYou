import { LABELS, RESULT_KEY } from '@/athleteTests/Tremor/constants';

export const INPUTS = [
  {
    id: 1,
    label: 'Время до нагрузки, с'
  },
  {
    id: 2,
    label: 'Кол-во касаний до нагрузки'
  },
  {
    id: 3,
    label: 'Время ч/з 30 с, с'
  },
  {
    id: 4,
    label: 'Кол-во касаний ч/з 30 с'
  },
  {
    id: 5,
    label: 'ЧСС нач. ч/з 30 с, уд./мин'
  },
  {
    id: 6,
    label: 'ЧСС оконч. ч/з 30 с, уд./мин'
  },
  {
    id: 7,
    label: 'Время ч/з 2:30, с'
  },
  {
    id: 8,
    label: 'Кол-во касаний ч/з 2:30'
  },
  {
    id: 9,
    label: 'ЧСС нач. ч/з 2:30, уд./мин'
  },
  {
    id: 10,
    label: 'ЧСС оконч. ч/з 2:30, уд./мин'
  },
  {
    id: 11,
    label: 'Среднее время касания, мс'
  }
];

export const DESCRIPTION = 'Описание';

export const TREMOR_SAVE = `athleteTests/TremorInputForm/TREMOR_SAVE`;
export const TREMOR_SAVE_ERROR = `athleteTests/TremorInputForm/TREMOR_SAVE_ERROR`;
export const TREMOR_SAVE_SUCCESS = `athleteTests/TremorInputForm/TREMOR_SAVE_SUCCESS`;
