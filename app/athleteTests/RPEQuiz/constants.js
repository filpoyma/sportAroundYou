import { LABELS, RESULT_KEY } from '@/athleteTests/RPE/constants';

export const INPUTS = [
  {
    id: RESULT_KEY.DURATION,
    label: LABELS[RESULT_KEY.DURATION]
  }
];

export const DESCRIPTION =
  'Выберите значение из приведенной шкалы, которое лучше всего характеризует ваше восприятие уровня нагрузки на прошедшей тренировке. ' +
  'Попытайтесь оценить ваше ощущение как можно более честно, не думая о том, какой на самом деле является реальная физическая нагрузка.';

export const QUESTIONS = {
  RPE: [
    {
      id: 0,
      title: DESCRIPTION
    }
  ]
};

export const RPE_QUIZ_SAVE = `athleteTests/RPETestQuiz/RPE_QUIZ_SAVE`;
export const RPE_QUIZ_SAVE_ERROR = `athleteTests/RPETestQuiz/RPE_QUIZ_SAVE_ERROR`;
export const RPE_QUIZ_SAVE_SUCCESS = `athleteTests/RPETestQuiz/RPE_QUIZ_SAVE_SUCCESS`;
