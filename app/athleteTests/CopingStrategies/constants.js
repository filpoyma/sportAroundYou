export const STATE_KEY = {
  MAIN: 'CopingStrategiesTest',
  RESULTS: 'results',
  RESULTS_BY_RANGE: 'resultByRange'
};

export const API_PATH = 'coping';

export const STRATEGY_KEY = {
  SN: 'sn',
  OB: 'ob',
  KO: 'ko',
  US: 'us',
  PC: 'pc',
  DS: 'ds',
  NP: 'np'
};

export const RECOMMENDATIONS = {
  [STRATEGY_KEY.SN]:
    '<b>Совладание с неприятностями:</b> эта шкала измеряет, в какой мере спортсмен остается позитивным и сохраняет энтузиазм даже когда дела идут не очень хорошо, сохраняет спокойствие и самоконтроль, может быстро прийти в себя после допущенной ошибки или поражения',
  [STRATEGY_KEY.OB]:
    '<b>Обучаемость:</b> измеряет, в какой мере спортсмен открыт для обучения или инструкций и принимает конструктивную критику, не принимая ее близко к сердцу и не расстраиваясь',
  [STRATEGY_KEY.KO]:
    '<b>Концентрация:</b> эта шкала отражает, насколько легко спортсмен отвлекается или способен сосредоточиться на предстоящей тренировочной или соревновательной задаче, даже если возникают неприятные и неожиданные ситуации',
  [STRATEGY_KEY.US]:
    '<b>Уверенность в себе и мотивация достижения:</b> измеряет, в какой мере спортсмен уверен в себе и позитивно мотивирован, регулярно «выкладывается» на 100% во время тренировок и соревнований, усердно трудится над улучшением своих навыков',
  [STRATEGY_KEY.PC]:
    '<b>Постановка цели и психическая подготовка:</b> показывает, как спортсмен ставит конкретные цели и работает над их достижением, планирует и психологически готовится к выступлению, имеет ясное представление о предстоящей игре или о ходе выступления',
  [STRATEGY_KEY.DS]:
    '<b>Высшее достижение под действием стресса:</b> показывает, воспринимает ли спортсмен стрессовую ситуацию скорее как вызов, чем угрозу, и достигает ли хороших результатов в напряженных условиях',
  [STRATEGY_KEY.NP]:
    '<b>Свобода от негативных переживаний:</b> оценивает, испытывает ли спортсмен стресс, переживая за свое плохое выступление или допущенные ошибки; беспокоится ли о том, что будут думать другие, если он выступит неудачно'
};

export const COPING_STRATEGIES_LOAD_SUCCESS = `athleteTests/${STATE_KEY.MAIN}/COPING_STRATEGIES_LOAD_SUCCESS`;
export const COPING_STRATEGIES_LOAD_ERROR = `athleteTests/${STATE_KEY.MAIN}/COPING_STRATEGIES_LOAD_ERROR`;
export const COPING_STRATEGIES_BY_DATE_RANGE_LOAD_SUCCESS = `athleteTests/${STATE_KEY.MAIN}/COPING_STRATEGIES_BY_DATE_RANGE_LOAD_SUCCESS`;
export const COPING_STRATEGIES_BY_DATE_RANGE_LOAD_ERROR = `athleteTests/${STATE_KEY.MAIN}/COPING_STRATEGIES_BY_DATE_RANGE_LOAD_ERROR`;
