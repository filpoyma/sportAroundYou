export const DESCRIPTION =
  'Ниже Вы найдете список выражений, которые описывают различные аспекты Вашего текущего состояния восстановления. Пожалуйста, оцените, как Вы чувствуете себя прямо сейчас относительно Вашего лучшего состояния восстановления.';

export const QUESTIONS = {
  RECOVERY: [
    {
      id: 0,
      title:
        'Физическая работоспособность (я чувствую себя сильным, энергичным, в хорошей физической форме, полным сил)'
    },
    {
      id: 1,
      title:
        'Умственная работоспособность (я невнимательный, восприимчив к новым идеям и предложениям, наблюдателен, сконцентрирован)'
    },
    {
      id: 2,
      title:
        'Эмоциональный баланс (я довольный, в хорошем настроении, эмоционально стабилен, чувствую, что все под контролем)'
    },
    {
      id: 3,
      title:
        'Общее восстановление (я чувствую, что я хорошо восстановленный, отдохнувший, физически расслабленный)'
    }
  ],
  STRESS: [
    {
      id: 4,
      title:
        'Стресс для мускулатуры (ощущаю мышечное истощение, мышечную усталость, боли в мышцах, забитость мышц)'
    },
    {
      id: 5,
      title:
        'Нехватка мотивации (я не мотивированный, вялый, апатичный, незаинтересованный, чувствую, что не хватает энергии)'
    },
    {
      id: 6,
      title:
        'Негативное эмоциональное состояние (я чувствую себя разбитым, нахожусь в состоянии стресса, раздражительный, вспыльчивый)'
    },
    {
      id: 7,
      title: 'Общий стресс (я уставший, измученный, перегружен, физически истощен)'
    }
  ]
};

export const API_PATH = 'stressAndRecovery';

export const STRESS_AND_RECOVERY_SAVE_INTERPRETATION = `athleteTests/StressAndRecoveryQuiz/STRESS_AND_RECOVERY_SAVE_INTERPRETATION`;
export const STRESS_AND_RECOVERY_SAVE_INTERPRETATION_ERROR = `athleteTests/StressAndRecoveryQuiz/STRESS_AND_RECOVERY_SAVE_INTERPRETATION_ERROR`;
export const STRESS_AND_RECOVERY_SAVE_INTERPRETATION_SUCCESS = `athleteTests/StressAndRecoveryQuiz/STRESS_AND_RECOVERY_SAVE_INTERPRETATION_SUCCESS`;
