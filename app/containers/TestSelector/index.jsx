import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Box from '@/components/Box';
import Button, { SIZE, THEME } from '@/components/Button';
import ModalHOC from '@/containers/ModalHoc';
import { ROUTE } from '@/pages/Root/constants';
import { makeSelectCurrentTestKey } from '@/pages/TestPage/selectors';
import { ICONS_SVG } from '@/utils/iconsSvg';
import injectStyles from '@/utils/injectStyles';

import AddTest from './elements/AddTest';
import TestCategory from './elements/TestCategory';
import styles from './styles';

const checkCurrentCategory = (keys, currentKey) => keys.some(key => key === currentKey);

const getCategories = (matchUrl, testKey) => [
  {
    current: testKey === ROUTE.TEST.STRESS_AND_RECOVERY_QUIZ,
    id: 'dailyQuiz',
    title: 'Ежедневный опросник',
    tests: [
      {
        current: testKey === ROUTE.TEST.STRESS_AND_RECOVERY_QUIZ,
        key: ROUTE.TEST.STRESS_AND_RECOVERY_QUIZ,
        title: 'Уровень стресса и восстановления',
        url: `${matchUrl}/${ROUTE.TEST.STRESS_AND_RECOVERY_QUIZ}`
      }
    ]
  },
  {
    current: testKey === ROUTE.TEST.FMS,
    id: 'FMS',
    title: 'Восстановление',
    tests: [
      {
        current: testKey === ROUTE.TEST.FMS,
        key: ROUTE.TEST.FMS,
        title: 'FMS',
        url: `${matchUrl}/${ROUTE.TEST.FMS}`
      }
    ]
  },
  {
    current: testKey === ROUTE.TEST.SPIROERGOMETRY,
    id: 'aerobic',
    title: 'Аэробные',
    tests: [
      {
        current: testKey === ROUTE.TEST.SPIROERGOMETRY,
        key: ROUTE.TEST.SPIROERGOMETRY,
        title: 'Газоанализ',
        url: `${matchUrl}/${ROUTE.TEST.SPIROERGOMETRY}`
      },
      // 01.05
      {
        current: testKey === ROUTE.TEST.SPIROERGOMETRY_01051,
        key: ROUTE.TEST.SPIROERGOMETRY_01051,
        title: 'Газоанализ 1.05.1',
        url: `${matchUrl}/${ROUTE.TEST.SPIROERGOMETRY_01051}`
      },
      {
        current: testKey === ROUTE.TEST.SPIROERGOMETRY_01052,
        key: ROUTE.TEST.SPIROERGOMETRY_01052,
        title: 'Газоанализ 1.05.2',
        url: `${matchUrl}/${ROUTE.TEST.SPIROERGOMETRY_01052}`
      },
      // 01.06
      {
        current: testKey === ROUTE.TEST.SPIROERGOMETRY_01061,
        key: ROUTE.TEST.SPIROERGOMETRY_01061,
        title: 'Газоанализ 1.06.1',
        url: `${matchUrl}/${ROUTE.TEST.SPIROERGOMETRY_01061}`
      },
      {
        current: testKey === ROUTE.TEST.SPIROERGOMETRY_01062,
        key: ROUTE.TEST.SPIROERGOMETRY_01062,
        title: 'Газоанализ 1.06.2',
        url: `${matchUrl}/${ROUTE.TEST.SPIROERGOMETRY_01062}`
      },
      // 01.07
      {
        current: testKey === ROUTE.TEST.SPIROERGOMETRY_01071,
        key: ROUTE.TEST.SPIROERGOMETRY_01071,
        title: 'Газоанализ 1.07.1',
        url: `${matchUrl}/${ROUTE.TEST.SPIROERGOMETRY_01071}`
      },
      {
        current: testKey === ROUTE.TEST.SPIROERGOMETRY_01072,
        key: ROUTE.TEST.SPIROERGOMETRY_01072,
        title: 'Газоанализ 1.07.2',
        url: `${matchUrl}/${ROUTE.TEST.SPIROERGOMETRY_01072}`
      },
      // 01.08
      {
        current: testKey === ROUTE.TEST.SPIROERGOMETRY_01081,
        key: ROUTE.TEST.SPIROERGOMETRY_01081,
        title: 'Газоанализ 1.08.1',
        url: `${matchUrl}/${ROUTE.TEST.SPIROERGOMETRY_01081}`
      },
      {
        current: testKey === ROUTE.TEST.SPIROERGOMETRY_01082,
        key: ROUTE.TEST.SPIROERGOMETRY_01082,
        title: 'Газоанализ 1.08.2',
        url: `${matchUrl}/${ROUTE.TEST.SPIROERGOMETRY_01082}`
      }
    ]
  },
  {
    current: checkCurrentCategory([
      ROUTE.TEST.MAM,
      ROUTE.TEST.MAM_RELATIVE,
      ROUTE.TEST.MAM_SKI_EGROMETER
    ]),
    id: 'anaerobic',
    title: 'Анаэробные',
    tests: [
      {
        current: testKey === ROUTE.TEST.MAM,
        key: ROUTE.TEST.MAM,
        title: 'МАМ-тест. Велоэргометр: стандартный набор',
        url: `${matchUrl}/${ROUTE.TEST.MAM}`
      },
      {
        current: testKey === ROUTE.TEST.MAM_RELATIVE,
        key: ROUTE.TEST.MAM_RELATIVE,
        title: 'МАМ-тест. Велоэргометр: % от веса',
        url: `${matchUrl}/${ROUTE.TEST.MAM_RELATIVE}`
      },
      {
        current: testKey === ROUTE.TEST.MAM_SKI_EGROMETER,
        key: ROUTE.TEST.MAM_SKI_EGROMETER,
        title: 'МАМ-тест. Лыжный эргометр',
        url: `${matchUrl}/${ROUTE.TEST.MAM_SKI_EGROMETER}`
      }
    ]
  },
  {
    current: checkCurrentCategory([
      ROUTE.TEST.CADENCE,
      ROUTE.TEST.JUMPS_FATIGUE,
      ROUTE.TEST.SPEED_AND_POWER_THREE_JUMPS,
      ROUTE.TEST.ACCELERATION_DIRECT_STANCE,
      ROUTE.TEST.ACCELERATION_SIDE_STANCE
    ]),
    id: 'speedAndPower',
    title: 'Скоростно-силовые',
    tests: [
      {
        current: testKey === ROUTE.TEST.SPEED_AND_POWER_THREE_JUMPS,
        key: ROUTE.TEST.SPEED_AND_POWER_THREE_JUMPS,
        title: '3 прыжка',
        url: `${matchUrl}/${ROUTE.TEST.SPEED_AND_POWER_THREE_JUMPS}`
      },
      {
        current: testKey === ROUTE.TEST.CADENCE,
        key: ROUTE.TEST.CADENCE,
        title: 'Каденс',
        url: `${matchUrl}/${ROUTE.TEST.CADENCE}`
      },
      {
        current: testKey === ROUTE.TEST.JUMPS_FATIGUE,
        key: ROUTE.TEST.JUMPS_FATIGUE,
        title: 'Прыжки: утомление',
        url: `${matchUrl}/${ROUTE.TEST.JUMPS_FATIGUE}`
      },
      {
        current: testKey === ROUTE.TEST.ACCELERATION_DIRECT_STANCE,
        key: ROUTE.TEST.ACCELERATION_DIRECT_STANCE,
        title: 'Ускорение. Прямая стойка',
        url: `${matchUrl}/${ROUTE.TEST.ACCELERATION_DIRECT_STANCE}`
      },
      {
        current: testKey === ROUTE.TEST.ACCELERATION_SIDE_STANCE,
        key: ROUTE.TEST.ACCELERATION_SIDE_STANCE,
        title: 'Ускорение. Боковая стойка',
        url: `${matchUrl}/${ROUTE.TEST.ACCELERATION_SIDE_STANCE}`
      }
    ]
  },
  {
    current: checkCurrentCategory([
      ROUTE.TEST.ISOMED_HIP,
      ROUTE.TEST.ISOMED_KNEE,
      ROUTE.TEST.ISOMED_SHOULDER,
      ROUTE.TEST.ISOMED_ELBOW,
      ROUTE.TEST.ISOMED_ANKLE
    ]),
    id: 'power',
    title: 'Силовые',
    tests: [
      {
        current: testKey === ROUTE.TEST.ISOMED_HIP,
        key: ROUTE.TEST.ISOMED_HIP,
        title: 'Сила + мощность. Тазобердренный сустав',
        url: `${matchUrl}/${ROUTE.TEST.ISOMED_HIP}`
      },
      {
        current: testKey === ROUTE.TEST.ISOMED_KNEE,
        key: ROUTE.TEST.ISOMED_KNEE,
        title: 'Сила + мощность. Коленный сустав',
        url: `${matchUrl}/${ROUTE.TEST.ISOMED_KNEE}`
      },
      {
        current: testKey === ROUTE.TEST.ISOMED_SHOULDER,
        key: ROUTE.TEST.ISOMED_SHOULDER,
        title: 'Сила + мощность. Плечевой сустав',
        url: `${matchUrl}/${ROUTE.TEST.ISOMED_SHOULDER}`
      },
      {
        current: testKey === ROUTE.TEST.ISOMED_ELBOW,
        key: ROUTE.TEST.ISOMED_ELBOW,
        title: 'Сила + мощность. Локтевой сустав',
        url: `${matchUrl}/${ROUTE.TEST.ISOMED_ELBOW}`
      },
      {
        current: testKey === ROUTE.TEST.ISOMED_ANKLE,
        key: ROUTE.TEST.ISOMED_ANKLE,
        title: 'Сила + мощность. Голеностопный сустав',
        url: `${matchUrl}/${ROUTE.TEST.ISOMED_ANKLE}`
      }
    ]
  },
  {
    current: checkCurrentCategory([
      ROUTE.TEST.EXPLOSIVE_THROW,
      ROUTE.TEST.EXPLOSIVE_JUMP,
      ROUTE.TEST.FLEXIBILITY_SHOULDERS,
      ROUTE.TEST.FLEXIBILITY_BACK,
      ROUTE.TEST.BACK_FORWARD_RUN,
      ROUTE.TEST.COORDINATION_JUMPS_DIFF_VERTICAL,
      ROUTE.TEST.COORDINATION_JUMPS_DIFF_HORIZONTAL,
      ROUTE.TEST.COORDINATION_TENNIS,
      ROUTE.TEST.BEEP
    ]),
    id: 'currentReadiness',
    title: 'Текущая подготовленность',
    tests: [
      {
        current: testKey === ROUTE.TEST.BEEP,
        key: ROUTE.TEST.BEEP,
        title: 'Веер',
        url: `${matchUrl}/${ROUTE.TEST.BEEP}`
      },
      {
        current: testKey === ROUTE.TEST.EXPLOSIVE_THROW,
        key: ROUTE.TEST.EXPLOSIVE_THROW,
        title: 'Взрывная сила. Метание',
        url: `${matchUrl}/${ROUTE.TEST.EXPLOSIVE_THROW}`
      },
      {
        current: testKey === ROUTE.TEST.EXPLOSIVE_JUMP,
        key: ROUTE.TEST.EXPLOSIVE_JUMP,
        title: 'Взрывная сила. Прыжки',
        url: `${matchUrl}/${ROUTE.TEST.EXPLOSIVE_JUMP}`
      },
      {
        current: testKey === ROUTE.TEST.FLEXIBILITY_SHOULDERS,
        key: ROUTE.TEST.FLEXIBILITY_SHOULDERS,
        title: 'Гибкость. Плечевые суставы',
        url: `${matchUrl}/${ROUTE.TEST.FLEXIBILITY_SHOULDERS}`
      },
      {
        current: testKey === ROUTE.TEST.FLEXIBILITY_BACK,
        key: ROUTE.TEST.FLEXIBILITY_BACK,
        title: 'Гибкость. Позвоночный столб',
        url: `${matchUrl}/${ROUTE.TEST.FLEXIBILITY_BACK}`
      },
      {
        current: testKey === ROUTE.TEST.COORDINATION_TENNIS,
        key: ROUTE.TEST.COORDINATION_TENNIS,
        title: 'Координация. Теннис',
        url: `${matchUrl}/${ROUTE.TEST.COORDINATION_TENNIS}`
      },
      {
        current: testKey === ROUTE.TEST.COORDINATION_JUMPS_DIFF_VERTICAL,
        key: ROUTE.TEST.COORDINATION_JUMPS_DIFF_VERTICAL,
        title: 'Координация. Вертикальные прыжки',
        url: `${matchUrl}/${ROUTE.TEST.COORDINATION_JUMPS_DIFF_VERTICAL}`
      },
      {
        current: testKey === ROUTE.TEST.COORDINATION_JUMPS_DIFF_HORIZONTAL,
        key: ROUTE.TEST.COORDINATION_JUMPS_DIFF_HORIZONTAL,
        title: 'Координация. Горизонтальные прыжки',
        url: `${matchUrl}/${ROUTE.TEST.COORDINATION_JUMPS_DIFF_HORIZONTAL}`
      },
      {
        current: testKey === ROUTE.TEST.BACK_FORWARD_RUN,
        key: ROUTE.TEST.BACK_FORWARD_RUN,
        title: 'Челнок',
        url: `${matchUrl}/${ROUTE.TEST.BACK_FORWARD_RUN}`
      }
    ]
  },
  {
    current: checkCurrentCategory([
      ROUTE.TEST.INBODY,
      ROUTE.TEST.ANTHROPOMETRY,
      ROUTE.TEST.CALIPEROMETRY,
      ROUTE.TEST.CALIPER_BODY_COMPOSITION
    ]),
    id: 'morphology',
    title: 'Морфология',
    tests: [
      {
        current: testKey === ROUTE.TEST.CALIPEROMETRY,
        key: ROUTE.TEST.CALIPEROMETRY,
        title: 'Калипер: толщина складок',
        url: `${matchUrl}/${ROUTE.TEST.CALIPEROMETRY}`
      },
      {
        current: testKey === ROUTE.TEST.ANTHROPOMETRY,
        key: ROUTE.TEST.ANTHROPOMETRY,
        title: 'Антропометрия',
        url: `${matchUrl}/${ROUTE.TEST.ANTHROPOMETRY}`
      },
      {
        current: testKey === ROUTE.TEST.INBODY,
        key: ROUTE.TEST.INBODY,
        title: 'Биоимпедансометрия',
        url: `${matchUrl}/${ROUTE.TEST.INBODY}`
      },
      {
        current: testKey === ROUTE.TEST.CALIPER_BODY_COMPOSITION,
        key: ROUTE.TEST.CALIPER_BODY_COMPOSITION,
        title: 'Калипер: состав тела',
        url: `${matchUrl}/${ROUTE.TEST.CALIPER_BODY_COMPOSITION}`
      }
    ]
  },
  {
    current: checkCurrentCategory(
      [
        ROUTE.TEST.MOTILITY_JUMPS_DIFF_HORIZONTAL,
        ROUTE.TEST.MOTILITY_JUMPS_DIFF_VERTICAL,
        ROUTE.TEST.TREMOR
      ],
      testKey
    ),
    id: 'motility',
    title: 'Моторика',
    tests: [
      {
        current: testKey === ROUTE.TEST.MOTILITY_JUMPS_DIFF_VERTICAL,
        key: ROUTE.TEST.MOTILITY_JUMPS_DIFF_VERTICAL,
        title: 'Прыжки Дифференциация: Вертикальные',
        url: `${matchUrl}/${ROUTE.TEST.MOTILITY_JUMPS_DIFF_VERTICAL}`
      },
      {
        current: testKey === ROUTE.TEST.MOTILITY_JUMPS_DIFF_HORIZONTAL,
        key: ROUTE.TEST.MOTILITY_JUMPS_DIFF_HORIZONTAL,
        title: 'Прыжки Дифференциация: Горизонтальные',
        url: `${matchUrl}/${ROUTE.TEST.MOTILITY_JUMPS_DIFF_HORIZONTAL}`
      },
      {
        current: testKey === ROUTE.TEST.TREMOR,
        key: ROUTE.TEST.TREMOR,
        title: 'Тремор. Динамический',
        url: `${matchUrl}/${ROUTE.TEST.TREMOR}`
      }
    ]
  },
  {
    current: checkCurrentCategory([ROUTE.TEST.HEMOGLOBIN_MASS], testKey),
    id: 'hypoxia',
    title: 'Гипоксия',
    tests: [
      {
        current: testKey === ROUTE.TEST.HEMOGLOBIN_MASS,
        key: ROUTE.TEST.HEMOGLOBIN_MASS,
        title: 'Гемоглобиновая масса',
        url: `${matchUrl}/${ROUTE.TEST.HEMOGLOBIN_MASS}`
      }
    ]
  },
  {
    current: checkCurrentCategory(
      [
        ROUTE.TEST.COPING_STRATEGIES,
        ROUTE.TEST.SPORT_MOTIVATION_SCALE,
        ROUTE.TEST.SPORT_MOTIVATION,
        ROUTE.TEST.STRESS_AND_RECOVERY,
        ROUTE.TEST.STRESS_FACTORS,
        ROUTE.TEST.VISUAL_ATTENTION,
        ROUTE.TEST.SPATIAL_INTELLECTION,
        ROUTE.TEST.ANXIETY,
        ROUTE.TEST.COMPETITIVE_ANXIETY,
        ROUTE.TEST.CLAIMS
      ],
      testKey
    ),
    id: 'psychology',
    title: 'Психология',
    tests: [
      {
        current: testKey === ROUTE.TEST.STRESS_AND_RECOVERY,
        key: ROUTE.TEST.STRESS_AND_RECOVERY,
        title: 'Уровень стресса и восстановления',
        url: `${matchUrl}/${ROUTE.TEST.STRESS_AND_RECOVERY}`
      },
      {
        current: testKey === ROUTE.TEST.SPORT_MOTIVATION,
        key: ROUTE.TEST.SPORT_MOTIVATION,
        title: 'Мотивы занятия спортом',
        url: `${matchUrl}/${ROUTE.TEST.SPORT_MOTIVATION}`
      },
      {
        current: testKey === ROUTE.TEST.SPORT_MOTIVATION_SCALE,
        key: ROUTE.TEST.SPORT_MOTIVATION_SCALE,
        title: 'SMS',
        url: `${matchUrl}/${ROUTE.TEST.SPORT_MOTIVATION_SCALE}`
      },
      {
        current: testKey === ROUTE.TEST.ANXIETY,
        key: ROUTE.TEST.ANXIETY,
        title: 'Тревожность',
        url: `${matchUrl}/${ROUTE.TEST.ANXIETY}`
      },
      {
        current: testKey === ROUTE.TEST.COMPETITIVE_ANXIETY,
        key: ROUTE.TEST.COPING_STRATEGIES,
        title: 'Соревновательная тревожность',
        url: `${matchUrl}/${ROUTE.TEST.COMPETITIVE_ANXIETY}`
      },
      {
        current: testKey === ROUTE.TEST.CLAIMS,
        key: ROUTE.TEST.CLAIMS,
        title: 'Притязания',
        url: `${matchUrl}/${ROUTE.TEST.CLAIMS}`
      },
      {
        current: testKey === ROUTE.TEST.COPING_STRATEGIES,
        key: ROUTE.TEST.COPING_STRATEGIES,
        title: 'Преодоление стресса',
        url: `${matchUrl}/${ROUTE.TEST.COPING_STRATEGIES}`
      },
      {
        current: testKey === ROUTE.TEST.VISUAL_ATTENTION,
        key: ROUTE.TEST.VISUAL_ATTENTION,
        title: 'Зрительное внимание',
        url: `${matchUrl}/${ROUTE.TEST.VISUAL_ATTENTION}`
      },
      {
        current: testKey === ROUTE.TEST.SPATIAL_INTELLECTION,
        key: ROUTE.TEST.SPATIAL_INTELLECTION,
        title: 'Пространственное мышление',
        url: `${matchUrl}/${ROUTE.TEST.SPATIAL_INTELLECTION}`
      }
    ]
  },
  {
    current: checkCurrentCategory([ROUTE.TEST.RPE]),
    id: 'loudsControl',
    title: 'Контроль нагрузок',
    tests: [
      {
        current: testKey === ROUTE.TEST.RPE,
        key: ROUTE.TEST.RPE,
        title: 'RPE',
        url: `${matchUrl}/${ROUTE.TEST.RPE}`
      }
    ]
  }
];

class TestSelector extends Component {
  state = {
    showModal: false
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  render() {
    const { className, matchUrl, testKey } = this.props;
    const { showModal } = this.state;

    return (
      <Box className={className}>
        <ModalHOC onClose={this.closeModal} show={showModal}>
          <Box title="Добавление нового теста">
            <AddTest onCancel={this.closeModal} />
          </Box>
        </ModalHOC>
        <Button
          onClick={this.openModal}
          prefixIcon={ICONS_SVG.PLUS}
          theme={THEME.WHITE}
          size={SIZE.RESPONSIVE}
          height="50px"
        >
          Добавить тест
        </Button>
        {getCategories(matchUrl, testKey).map(({ current, id, title, tests }) => (
          <TestCategory
            key={`test_category_${id}_${current}`}
            current={current}
            title={title}
            tests={tests}
          />
        ))}
      </Box>
    );
  }
}

TestSelector.propTypes = {
  className: PropTypes.string.isRequired,
  matchUrl: PropTypes.string.isRequired,
  testKey: PropTypes.string.isRequired
};

TestSelector.defaultProps = {};

TestSelector.displayName = 'TestSelectorContainer';

const mapStateToProps = createStructuredSelector({
  testKey: makeSelectCurrentTestKey()
});

const withConnect = connect(mapStateToProps);

export default withConnect(injectStyles(TestSelector, styles));
