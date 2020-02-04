export const COLOR_TYPE = {
  SATURATED: 'saturated', // насыщенный
  DIM: 'dim' // тусклый
};

export const SVG_COLORS = {
  ORANGE: {
    /**
     * #FAD89F
     */
    [COLOR_TYPE.DIM]: '#FAD89F',
    /**
     * #FF9F00
     */
    [COLOR_TYPE.SATURATED]: '#FF9F00'
  },

  GREY: {
    /**
     * #D8D8D8
     */
    [COLOR_TYPE.DIM]: '#D8D8D8',
    /**
     * #4D4F4F
     */
    [COLOR_TYPE.SATURATED]: '#4D4F4F'
  },

  BLUE: {
    /**
     * #D0EFFF
     */
    [COLOR_TYPE.DIM]: '#D0EFFF',
    /**
     * #2B8CEB
     */
    [COLOR_TYPE.SATURATED]: '#2B8CEB'
  }
};

export const TYPE = {
  NORMAL: 'normal',
  REVERSE: 'reverse',

  MAIN: 'main',
  RANGE: 'range'
};

export const THEME = {
  [TYPE.NORMAL]: [SVG_COLORS.GREY, SVG_COLORS.BLUE, SVG_COLORS.ORANGE],
  [TYPE.REVERSE]: [SVG_COLORS.ORANGE, SVG_COLORS.BLUE, SVG_COLORS.GREY],
  WITHOUT_MARKERS: [SVG_COLORS.BLUE]
};

export const SIZE = {
  RADIUS: 60,
  THICKNESS: 14
};
