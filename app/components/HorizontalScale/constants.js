export const TYPE = {
  OMG: 'omg',
  OCK: 'ock',
  MAN: 'man',
  WOMAN: 'woman'
};

export const LEVELS = {
  LEVEL_1: 'нетренированные',
  LEVEL_2: 'любительский уровень',
  LEVEL_3: 'региональный уровень',
  LEVEL_4: 'национальный уровень',
  LEVEL_5: 'международный уровень',
  LEVEL_6: 'наибольшие значения'
};

export const INTERVALS = {
  [TYPE.OMG]: {
    [TYPE.MAN]: {
      [LEVELS.LEVEL_1]: [9.5, 10.5],
      [LEVELS.LEVEL_2]: [10.5, 12.0],
      [LEVELS.LEVEL_3]: [12.0, 13.5],
      [LEVELS.LEVEL_4]: [13.5, 14.5],
      [LEVELS.LEVEL_5]: [14.5, 16.5],
      [LEVELS.LEVEL_6]: [16.5, 20.1]
    },
    [TYPE.WOMAN]: {
      [LEVELS.LEVEL_1]: [8.5, 9.5],
      [LEVELS.LEVEL_2]: [9.5, 10.5],
      [LEVELS.LEVEL_3]: [10.5, 11.5],
      [LEVELS.LEVEL_4]: [11.5, 12.5],
      [LEVELS.LEVEL_5]: [12.5, 13.5],
      [LEVELS.LEVEL_6]: [13.5, 14.5]
    }
  },
  [TYPE.OCK]: {
    [TYPE.MAN]: {
      [LEVELS.LEVEL_1]: [65, 75],
      [LEVELS.LEVEL_2]: [75, 85],
      [LEVELS.LEVEL_3]: [85, 95],
      [LEVELS.LEVEL_4]: [95, 105],
      [LEVELS.LEVEL_5]: [105, 120],
      [LEVELS.LEVEL_6]: [120, 135]
    },
    [TYPE.WOMAN]: {
      [LEVELS.LEVEL_1]: [60, 70],
      [LEVELS.LEVEL_2]: [70, 77],
      [LEVELS.LEVEL_3]: [77, 87],
      [LEVELS.LEVEL_4]: [87, 95],
      [LEVELS.LEVEL_5]: [95, 106],
      [LEVELS.LEVEL_6]: [106, 110]
    }
  }
};
