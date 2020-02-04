import { LABELS, RESULT_KEY } from '@/athleteTests/CompetitiveAnxiety/constants';

export const INPUTS = [
  {
    id: RESULT_KEY.DURATION,
    label: LABELS[RESULT_KEY.DURATION]
  }
];

export const DESCRIPTION =
  'Выберите значение из приведенной шкалы, которое лучше всего характеризует ваше восприятие уровня нагрузки на прошедшей тренировке. ' +
  'Попытайтесь оценить ваше ощущение как можно более честно, не думая о том, какой на самом деле является реальная физическая нагрузка.';

export const QUESTIONS = [
  {
    id: 0,
    title: 'Я беспокоюсь из-за этих соревнований'
  },
  {
    id: 1,
    title: 'Я нервничаю'
  },
  {
    id: 2,
    title: 'Я чувствую себя расслабленно / непринужденно'
  },
  {
    id: 3,
    title: 'Я чувствую сомнение в своих силах'
  },
  {
    id: 4,
    title: 'Мне тревожно'
  },
  {
    id: 5,
    title: 'Мне комфортно / спокойно'
  },
  {
    id: 6,
    title: 'Я волнуюсь, что не смогу выступить так хорошо, как хотел бы'
  },
  {
    id: 7,
    title: 'Мое тело напряжено'
  },
  {
    id: 8,
    title: 'Я уверен в себе'
  },
  {
    id: 9,
    title: 'Я волнуюсь, что проиграю'
  },
  {
    id: 10,
    title: 'У меня сердце ушло в пятки'
  },
  {
    id: 11,
    title: 'Я чувствую себя в безопасности'
  },
  {
    id: 12,
    title: 'Я обеспокоен тем, что проиграю'
  },
  {
    id: 13,
    title: 'Мое тело расслабленно'
  },
  {
    id: 14,
    title: 'Я уверен, что выдержу это испытание'
  },
  {
    id: 15,
    title: 'Меня беспокоит, что я недостаточно хорошо выступлю'
  },
  {
    id: 16,
    title: 'Мое сердце бешено бьется'
  },
  {
    id: 17,
    title: 'Я уверен, что выступлю хорошо'
  },
  {
    id: 18,
    title: 'Я беспокоюсь, достигну ли своей цели'
  },
  {
    id: 19,
    title: 'Я чувствую, что у меня перехватило дыхание'
  },
  {
    id: 20,
    title: 'Я чувствую душевный покой'
  },
  {
    id: 21,
    title: 'Меня беспокоит, что другие будут разочарованы моим выступлением'
  },
  {
    id: 22,
    title: 'У меня влажные ладони'
  },
  {
    id: 23,
    title: 'Я уверен в себе, так как мысленно представляю, что уже достиг цели'
  },
  {
    id: 24,
    title: 'Я волнуюсь, что не смогу сосредоточиться'
  },
  {
    id: 25,
    title: 'Я чувствую напряжение во всем теле'
  },
  {
    id: 26,
    title: 'Я уверен, что справлюсь со стрессом'
  }
];

export const COMPETITEVE_ANXIETY_SAVE = `athleteTests/CompetitiveAnxietyQuiz/COMPETITEVE_ANXIETY_SAVE`;
export const COMPETITEVE_ANXIETY_SAVE_ERROR = `athleteTests/CompetitiveAnxietyQuiz/COMPETITEVE_ANXIETY_SAVE_ERROR`;
export const COMPETITEVE_ANXIETY_SAVE_SUCCESS = `athleteTests/CompetitiveAnxietyQuiz/COMPETITEVE_ANXIETY_SAVE_SUCCESS`;
