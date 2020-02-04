import { css } from 'styled-components';
export const COLORS = {
  /**
   * #F2F2F2
   */
  BACKGROUND: '#F2F2F2',
  /**
   * #EEEFF4
   */
  BORDER: '#EEEFF4',
  BUTTON: {
    PRIMARY: {
      /**
       * #2789E8
       */
      ORDINARY: '#2789E8',
      /**
       * #3E9AF3
       */
      HOVER: '#3E9AF3',
      /**
       * #3E9AF3
       */
      ACTIVE: '#3E9AF3',
      /**
       * #3E9AF3
       */
      TEXT_COLOR: '#FFF'
    },
    WHITE: {
      /**
       * #2789E8
       */
      ORDINARY: '#FFFFFF',
      /**
       * #3E9AF3
       */
      HOVER: '#F4F5FA',
      /**
       * #3E9AF3
       */
      ACTIVE: '#F4F5FA',
      /**
       * #3E9AF3
       */
      TEXT_COLOR: '#4D4F4F'
    }
  },
  CHARTS: {
    /**
     * #45A9DF
     */
    PRIMARY: '#45A9DF',
    /**
     * #8B8B8B
     */
    TICK: '#8B8B8B',
    /**
     * #505050
     */
    LEGEND: '#505050',
    /**
     * #f0f0f0
     */
    STROKE: '#F0F0F0',
    /**
     * #290CEB
     */
    HISTOGRAM: {
      /**
       * #8C959E
       */
      GRAY: '#8C959E',
      /**
       * #4D4F4F
       */
      DARK_GRAY: '#4D4F4F',
      /**
       * #298CEB
       */
      BLUE: '#298CEB',
      /**
       * #5EAAF3
       */
      LIGHT_BLUE: '#5EAAF3'
    },
    BAR: {
      /**
       * #2789E8
       */
      BLUE: '#2789E8',
      /**
       * #A6A7A7
       */
      GRAY: '#A6A7A7',
      /**
       * #4D4F4F
       */
      DARK_GRAY: '#4D4F4F'
    },
    PARALLEL_COORDINATES: {
      /**
       * #45A9DF
       */
      LIGHT_BLUE: '#45A9DF',
      /**
       * #2789E8
       */
      BLUE: '#2789E8',
      /**
       * #8C959E
       */
      GREY: '#8C959E',
      /**
       * #4D4F4F
       */
      DARK_GRAY: '#4D4F4F'
    },
    PIE_CHART: {
      /**
       * #45A9DF
       */
      LIGHT_BLUE: '#45A9DF',
      /**
       * #2789E8
       */
      BLUE: '#2789E8',
      /**
       * #8C959E
       */
      GREY: '#8C959E',
      /**
       * #4D4F4F
       */
      DARK_GRAY: '#4D4F4F'
    }
  },
  /**
   * #E43E2C
   */
  ERROR: '#E43E2C',
  INPUT: {
    /**
     * #E43E2C
     */
    DANGER: '#E43E2C',
    /**
     * #D8D8D8
     */
    BORDER: '#D8D8D8',
    /**
     * #666666
     */
    TEXT: '#666666',
    /**
     * #F4F5FA
     */
    HOVER: '#F4F5FA'
  },
  /**
   * #2B8CEB
   */
  PRIMARY: '#2B8CEB',
  /**
   * #52B9E9
   */
  SECONDARY: '#52B9E9',
  SUNBURST: {
    /**
     * #52B9E9
     */
    CHILD: '#52B9E9',
    /**
     * #2B8CEB
     */
    FIRST: '#2B8CEB',
    /**
     * #4D4F4F
     */
    LAST: '#4D4F4F'
  },
  SPINNER: {
    PRIMARY: '#2B8CEB',
    SECONDARY: '#2B8CEB14'
  },
  TABLE: {
    HEADER: {
      /**
       * #D8D8D8
       */
      UNDERLINE: '#D8D8D8'
    },
    CELLS: {
      /**
       * #FFFFFF
       */
      NOTEVENCOLOR: '#FFFFFF',
      /**
       * #F4F5FA
       */
      EVENCOLOR: '#F4F5FA'
    }
  },
  TEXT: {
    /**
     * #4D4F4F
     */
    PRIMARY: '#4D4F4F',
    /**
     * #707A86
     */
    PRIMARY_LIGHT: '#707A86',
    /**
     * #2B8CEB
     */
    HOVER: '#2B8CEB',
    /**
     * #666666
     */
    PLACE_HOLDER: '#666666'
  },
  RADIO_BUTTON: {
    /**
     * #4D4F4F
     */
    PRIMARY: '#4D4F4F',
    /**
     * #D8D8D8
     */
    SECONDARY: '#D8D8D8',
    /**
     * #2B8CEB
     */
    SELECTED: '#2B8CEB',
    /**
     * #FFFFFF
     */
    NOT_SELECTED: '#FFFFFF'
  },
  QUIZ: {
    /**
     * #2B8CEB
     */
    PRIMARY: '#2B8CEB',
    /**
     * #FF9F00
     */
    SECONDARY: '#FF9F00'
  },
  /**
   * #333
   */
  TITLE: '#333',

  ZONES: {
    /**
     * #45A9DF
     */
    1: '#45A9DF',
    /**
     * #70AD47
     */
    2: '#70AD47',
    /**
     * #FFC000
     */

    3: '#FFC000',
    /**
     * #ED7D31
     */

    4: '#ED7D31',
    /**
     * #FF0000
     */

    5: '#FF0000'
  }
};

export const SPACE_SIZE = {
  /**
   * 5px
   */
  XXXS: '5px',
  /**
   * 10px
   */
  XXS: '10px',
  /**
   * 15px
   */
  XS: '15px',
  /**
   * 20px
   */
  S: '20px',
  /**
   * 25px
   */
  M: '25px',
  /**
   * 30px
   */
  L: '30px',
  /**
   * 35px
   */
  XL: '35px'
};

export const OTHER = {
  BORDER: {
    TOP: `border-top: 1px solid ${COLORS.BORDER};`,
    BOTTOM: `border-bottom: 1px solid ${COLORS.BORDER};`,
    FULLWIDTH: {
      TOP: css`
        &:before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          width: 100%;
          height: 1px;
          background: ${COLORS.BORDER};
        }
      `,
      BOTTOM: css`
        &:after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          width: 100%;
          height: 1px;
          background: ${COLORS.BORDER};
        }
      `
    }
  },
  BORDER_RADIUS: 'border-radius: 5px;',
  BOX_SHADOW: 'box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);',
  HOVER_DARKEN: '&:hover { filter: brightness(.7); }',
  HR: css`
    height: 1px;
    background: ${COLORS.BORDER};
    margin: ${SPACE_SIZE.XL} 0;
    border: none;
  `
};

export const NIVO_CHART_THEME = {
  axis: {
    domain: {
      line: {
        stroke: COLORS.CHARTS.TICK
      }
    },
    ticks: {
      text: {
        fill: COLORS.CHARTS.TICK,
        fontFamily: 'var(--dff)',
        fontSize: 11
      }
    },
    legend: {
      text: {
        fontSize: 14,
        fontWeight: '700',
        fontFamily: 'var(--ff)',
        lineHeight: '19px',
        fill: COLORS.CHARTS.LEGEND
      }
    }
  },
  grid: {
    line: {
      stroke: COLORS.CHARTS.STROKE,
      strokeDasharray: '4 3'
    }
  },
  labels: {
    text: {
      fontFamily: 'var(--dff)',
      fontSize: 12
    }
  },
  tooltip: {
    table: {
      fontSize: 11
    }
  }
};
