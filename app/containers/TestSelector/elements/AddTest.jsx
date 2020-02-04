import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'styled-components';

import Button, { SIZE, THEME } from '@/components/Button';
import LinkButton from '@/components/LinkButton';
import { ROUTE } from '@/pages/Root/constants';
import { replaceTest } from '@/pages/TestPage/actions';
import injectStyles from '@/utils/injectStyles';
import { SPACE_SIZE } from '@/utils/styleConstants';

import TestCategory from './TestCategory';

const checkCurrentCategory = (keys, currentKey) => keys.some(key => key === currentKey);

const getCategories = testKey => [
  {
    current: checkCurrentCategory(
      [ROUTE.TEST.MAM_SKI_EGROMETER_INPUT_FORM],

      testKey
    ),
    id: 'anaerobic',
    title: 'Анаэробные',
    tests: [
      {
        current: testKey === ROUTE.TEST.MAM_SKI_EGROMETER_INPUT_FORM,
        key: ROUTE.TEST.MAM_SKI_EGROMETER_INPUT_FORM,
        title: 'МАМ-тест. Лыжный эргометр'
      }
    ]
  },

  {
    current: checkCurrentCategory(
      [ROUTE.TEST.FMS_INPUT_FORM],

      testKey
    ),
    id: 'FMS_input_form',
    title: 'Восстановление',
    tests: [
      {
        current: testKey === ROUTE.TEST.FMS_INPUT_FORM,
        key: ROUTE.TEST.FMS_INPUT_FORM,
        title: 'FMS'
      }
    ]
  },

  {
    current: checkCurrentCategory(
      [
        ROUTE.TEST.EXPLOSIVE_THROW_INPUT_FORM,
        ROUTE.TEST.EXPLOSIVE_JUMP_INPUT_FORM,
        ROUTE.TEST.FLEXIBILITY_SHOULDERS_INPUT_FORM,
        ROUTE.TEST.FLEXIBILITY_BACK_INPUT_FORM,
        ROUTE.TEST.BACK_FORWARD_RUN_INPUT_FORM,
        ROUTE.TEST.COORDINATION_JUMPS_DIFF_HORIZONTAL_INPUT_FORM,
        ROUTE.TEST.COORDINATION_TENNIS_INPUT_FORM,
        ROUTE.TEST.BEEP_INPUT_FORM
      ],
      testKey
    ),
    id: 'currentReadiness',
    title: 'Текущая подготовленность',
    tests: [
      {
        current: testKey === ROUTE.TEST.BEEP_INPUT_FORM,
        key: ROUTE.TEST.BEEP_INPUT_FORM,
        title: 'Веер'
      },
      {
        current: testKey === ROUTE.TEST.EXPLOSIVE_THROW_INPUT_FORM,
        key: ROUTE.TEST.EXPLOSIVE_THROW_INPUT_FORM,
        title: 'Взрывная сила. Метание'
      },
      {
        current: testKey === ROUTE.TEST.EXPLOSIVE_JUMP_INPUT_FORM,
        key: ROUTE.TEST.EXPLOSIVE_JUMP_INPUT_FORM,
        title: 'Взрывная сила. Прыжки'
      },
      {
        current: testKey === ROUTE.TEST.FLEXIBILITY_SHOULDERS_INPUT_FORM,
        key: ROUTE.TEST.FLEXIBILITY_SHOULDERS_INPUT_FORM,
        title: 'Гибкость. Плечевые суставы'
      },
      {
        current: testKey === ROUTE.TEST.FLEXIBILITY_BACK_INPUT_FORM,
        key: ROUTE.TEST.FLEXIBILITY_BACK_INPUT_FORM,
        title: 'Гибкость. Позвоночный столб'
      },
      {
        current: testKey === ROUTE.TEST.COORDINATION_TENNIS_INPUT_FORM,
        key: ROUTE.TEST.COORDINATION_TENNIS_INPUT_FORM,
        title: 'Координация: теннис'
      },
      {
        current: testKey === ROUTE.TEST.COORDINATION_JUMPS_DIFF_HORIZONTAL_INPUT_FORM,
        key: ROUTE.TEST.COORDINATION_JUMPS_DIFF_HORIZONTAL_INPUT_FORM,
        title: 'Координация: вертикальные прыжки'
      },
      {
        current: testKey === ROUTE.TEST.BACK_FORWARD_RUN_INPUT_FORM,
        key: ROUTE.TEST.BACK_FORWARD_RUN_INPUT_FORM,
        title: 'Челнок'
      }
    ]
  },
  {
    current: checkCurrentCategory(
      [
        ROUTE.TEST.ANTHROPOMETRY_INPUT_FORM,
        ROUTE.TEST.CALIPEROMETRY_INPUT_FORM,
        ROUTE.TEST.CALIPER_BODY_COMPOSITION_INPUT_FORM
      ],

      testKey
    ),
    id: 'morphology',
    title: 'Морфология',
    tests: [
      {
        current: testKey === ROUTE.TEST.CALIPEROMETRY_INPUT_FORM,
        key: ROUTE.TEST.CALIPEROMETRY_INPUT_FORM,
        title: 'Калипер: толщина складок'
      },
      {
        current: testKey === ROUTE.TEST.ANTHROPOMETRY_INPUT_FORM,
        key: ROUTE.TEST.ANTHROPOMETRY_INPUT_FORM,
        title: 'Антропометрия'
      },
      {
        current: testKey === ROUTE.TEST.CALIPER_BODY_COMPOSITION_INPUT_FORM,
        key: ROUTE.TEST.CALIPER_BODY_COMPOSITION_INPUT_FORM,
        title: 'Калипер: состав тела'
      }
    ]
  },
  {
    current: checkCurrentCategory(
      [ROUTE.TEST.MOTILITY_JUMPS_DIFF_HORIZONTAL_INPUT_FORM, ROUTE.TEST.TREMOR_INPUT_FORM],
      testKey
    ),
    id: 'motility',
    title: 'Моторика',
    tests: [
      {
        current: testKey === ROUTE.TEST.MOTILITY_JUMPS_DIFF_HORIZONTAL_INPUT_FORM,
        key: ROUTE.TEST.MOTILITY_JUMPS_DIFF_HORIZONTAL_INPUT_FORM,
        title: 'Дифференциация: вертикальные прыжки'
      },
      {
        current: testKey === ROUTE.TEST.TREMOR_INPUT_FORM,
        key: ROUTE.TEST.TREMOR_INPUT_FORM,
        title: 'Тремор. Динамический'
      }
    ]
  },
  {
    current: checkCurrentCategory([ROUTE.TEST.HEMOGLOBIN_MASS_INPUT_FORM], testKey),
    id: 'hypoxia',
    title: 'Гипоксия',
    tests: [
      {
        current: testKey === ROUTE.TEST.HEMOGLOBIN_MASS_INPUT_FORM,
        key: ROUTE.TEST.HEMOGLOBIN_MASS_INPUT_FORM,
        title: 'Гемоглобиновая масса'
      }
    ]
  },
  {
    current: checkCurrentCategory(
      [
        ROUTE.TEST.COPING_STRATEGIES_QUIZ,
        ROUTE.TEST.SPORT_MOTIVATION_SCALE_QUIZ,
        ROUTE.TEST.SPORT_MOTIVATION_QUIZ,
        ROUTE.TEST.STRESS_AND_RECOVERY_QUIZ,
        ROUTE.TEST.STRESS_FACTORS_QUIZ,
        ROUTE.TEST.VISUAL_ATTENTION_INPUT_FORM,
        ROUTE.TEST.SPATIAL_INTELLECTION_INPUT_FROM,
        ROUTE.TEST.ANXIETY_QUIZ,
        ROUTE.TEST.COMPETITIVE_ANXIETY_QUIZ,
        ROUTE.TEST.CLAIMS_INPUT_FORM
      ],
      testKey
    ),
    id: 'psychology',
    title: 'Психология',
    tests: [
      {
        current: testKey === ROUTE.TEST.SPORT_MOTIVATION_QUIZ,
        key: ROUTE.TEST.SPORT_MOTIVATION_QUIZ,
        title: 'Мотивы занятия спортом'
      },
      {
        current: testKey === ROUTE.TEST.SPORT_MOTIVATION_SCALE_QUIZ,
        key: ROUTE.TEST.SPORT_MOTIVATION_SCALE_QUIZ,
        title: 'SMS'
      },
      {
        current: testKey === ROUTE.TEST.STRESS_FACTORS_QUIZ,
        key: ROUTE.TEST.STRESS_FACTORS_QUIZ,
        title: 'Влияние стресса'
      },
      {
        current: testKey === ROUTE.TEST.COPING_STRATEGIES_QUIZ,
        key: ROUTE.TEST.COPING_STRATEGIES_QUIZ,
        title: 'Преодоление стресса'
      },
      {
        current: testKey === ROUTE.TEST.VISUAL_ATTENTION_INPUT_FORM,
        key: ROUTE.TEST.VISUAL_ATTENTION_INPUT_FORM,
        title: 'Зрительное внимание'
      },
      {
        current: testKey === ROUTE.TEST.SPATIAL_INTELLECTION_INPUT_FROM,
        key: ROUTE.TEST.SPATIAL_INTELLECTION_INPUT_FROM,
        title: 'Пространственное мышление'
      },
      {
        current: testKey === ROUTE.TEST.ANXIETY_QUIZ,
        key: ROUTE.TEST.ANXIETY_QUIZ,
        title: 'Тревожность'
      },
      {
        current: testKey === ROUTE.TEST.COMPETITIVE_ANXIETY_QUIZ,
        key: ROUTE.TEST.COMPETITIVE_ANXIETY_QUIZ,
        title: 'Соревновательная тревожность'
      },
      {
        current: testKey === ROUTE.TEST.CLAIMS_INPUT_FORM,
        key: ROUTE.TEST.CLAIMS_INPUT_FORM,
        title: 'Притязания'
      },
      {
        current: testKey === ROUTE.TEST.RAM,
        key: ROUTE.TEST.RAM,
        title: 'Оперативная память'
      }
    ]
  },
  {
    current: checkCurrentCategory(
      [
        ROUTE.TEST.ACCELERATION_DIRECT_STANCE_INPUT_FORM,
        ROUTE.TEST.ACCELERATION_SIDE_STANCE_INPUT_FORM
      ],
      testKey
    ),
    id: '3',
    title: 'Скоростно-силовые',
    tests: [
      {
        current: testKey === ROUTE.TEST.ACCELERATION_DIRECT_STANCE_INPUT_FORM,
        key: ROUTE.TEST.ACCELERATION_DIRECT_STANCE_INPUT_FORM,
        title: 'Ускорение. Прямая стойка'
      },
      {
        current: testKey === ROUTE.TEST.ACCELERATION_SIDE_STANCE_INPUT_FORM,
        key: ROUTE.TEST.ACCELERATION_SIDE_STANCE_INPUT_FORM,
        title: 'Ускорение. Боковая стойка'
      }
    ]
  },
  {
    current: checkCurrentCategory([ROUTE.TEST.RPE_QUIZ], testKey),
    id: 'loudsControl',
    title: 'Контроль нагрузок',
    tests: [
      {
        current: testKey === ROUTE.TEST.RPE_QUIZ,
        key: ROUTE.TEST.RPE_QUIZ,
        title: 'RPE'
      }
    ]
  }
];

class AddTest extends Component {
  state = {
    selectedKey: null
  };

  handleAddTest = () => {
    const { dispatch, onCancel } = this.props;
    const { selectedKey } = this.state;

    if (!selectedKey) {
      return;
    }

    dispatch(replaceTest(selectedKey));
    onCancel();
  };

  handleSelectKey = key => {
    this.setState({ selectedKey: key });
  };

  render() {
    const { className, onCancel } = this.props;
    const { selectedKey } = this.state;

    return (
      <div className={className}>
        {getCategories(selectedKey).map(({ current, id, title, tests }) => (
          <TestCategory
            key={`test_category_${id}_${current}`}
            current={current}
            title={title}
            tests={tests}
            onSelect={this.handleSelectKey}
          />
        ))}
        <br />
        <Button
          disabled={!selectedKey}
          onClick={this.handleAddTest}
          size={SIZE.BIG}
          theme={THEME.BLUE}
        >
          Добавить тест
        </Button>
        <LinkButton onClick={onCancel}>Отмена</LinkButton>
      </div>
    );
  }
}

AddTest.propTypes = {
  className: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  onCancel: PropTypes.func
};

AddTest.defaultProps = {
  onCancel: undefined
};

AddTest.displayName = 'TestSelectorAddTestElement';

const styles = css`
  width: 716px;

  & > ${LinkButton} {
    margin-left: ${SPACE_SIZE.XL};
  }
`;

export default connect()(injectStyles(AddTest, styles));
