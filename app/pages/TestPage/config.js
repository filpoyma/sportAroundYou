import AccelerationDirectStance from '@/athleteTests/AccelerationDirectStance';
import AccelerationDirectStanceInputForm from '@/athleteTests/AccelerationDirectStanceInputForm';
import AccelerationSideStance from '@/athleteTests/AccelerationSideStance';
import AccelerationSideStanceInputForm from '@/athleteTests/AccelerationSideStanceInputForm';
import Anthropometry from '@/athleteTests/Anthropometry';
import AnthropometryInputForm from '@/athleteTests/AnthropometryInputForm';
import Anxiety from '@/athleteTests/Anxiety';
import AnxietyQuiz from '@/athleteTests/AnxietyQuiz';
import BackForwardRun from '@/athleteTests/BackForwardRun';
import BackForwardRunInputForm from '@/athleteTests/BackForwardRunInputForm';
import Beep from '@/athleteTests/Beep';
import BeepInputForm from '@/athleteTests/BeepInputForm';
import Cadence from '@/athleteTests/Cadence';
import CaliperBodyComposition from '@/athleteTests/CaliperBodyComposition';
import CaliperBodyCompositionInputForm from '@/athleteTests/CaliperBodyCompositionInputForm';
import Caliperometry from '@/athleteTests/Caliperometry';
import CaliperometryInputForm from '@/athleteTests/CaliperometryInputForm';
import Claims from '@/athleteTests/Claims';
import ClaimsInputForm from '@/athleteTests/ClaimsInputForm';
import CompetitiveAnxiety from '@/athleteTests/CompetitiveAnxiety';
import CompetitiveAnxietyQuiz from '@/athleteTests/CompetitiveAnxietyQuiz';
import CoordinationJumpsDiffHorizontal from '@/athleteTests/CoordinationJumpsDiffHorizontal';
import CoordinationJumpsDiffHorizontalInputForm from '@/athleteTests/CoordinationJumpsDiffHorizontalInputForm';
import CoordinationJumpsDiffVertical from '@/athleteTests/CoordinationJumpsDiffVertical';
import CoordinationTennis from '@/athleteTests/CoordinationTennis';
import CoordinationTennisInputForm from '@/athleteTests/CoordinationTennisInputForm';
import CopingStrategies from '@/athleteTests/CopingStrategies';
import CopingStrategiesQuiz from '@/athleteTests/CopingStrategiesQuiz';
import ExplosiveJump from '@/athleteTests/ExplosiveJump';
import ExplosiveJumpInputForm from '@/athleteTests/ExplosiveJumpInputForm';
import ExplosiveThrow from '@/athleteTests/ExplosiveThrow';
import ExplosiveThrowInputForm from '@/athleteTests/ExplosiveThrowInputForm';
import FlexibilityBack from '@/athleteTests/FlexibilityBack';
import FlexibilityBackInputForm from '@/athleteTests/FlexibilityBackInputForm';
import FlexibilityShoulders from '@/athleteTests/FlexibilityShoulders';
import FlexibilityShouldersInputForm from '@/athleteTests/FlexibilityShouldersInputForm';
import FMS from '@/athleteTests/FMS';
import FMSInputForm from '@/athleteTests/FMSInputForm';
import HemoglobinMass from '@/athleteTests/HemoglobinMass';
import HemoglobinMassInputForm from '@/athleteTests/HemoglobinMassInputForm';
import InBody from '@/athleteTests/InBody';
import IsoMedAnkle from '@/athleteTests/IsoMedAnkle';
import IsoMedElbow from '@/athleteTests/IsoMedElbow';
import IsoMedHip from '@/athleteTests/IsoMedHip';
import IsoMedKnee from '@/athleteTests/IsoMedKnee';
import IsoMedShoulder from '@/athleteTests/IsoMedShoulder';
import JumpsFatigue from '@/athleteTests/JumpsFatigue';
import MAM from '@/athleteTests/MAM';
import MAMRelative from '@/athleteTests/MAMRelative';
import MAMSkiEgrometer from '@/athleteTests/MAMSkiEgrometer';
import MAMSkiEgrometerInputForm from '@/athleteTests/MAMSkiEgrometerInputForm';
import MotilityJumpsDiffHorizontal from '@/athleteTests/MotilityJumpsDiffHorizontal';
import MotilityJumpsDiffHorizontalInputForm from '@/athleteTests/MotilityJumpsDiffHorizontalInputForm';
import MotilityJumpsDiffVertical from '@/athleteTests/MotilityJumpsDiffVertical';
import Rpe from '@/athleteTests/RPE';
import RpeQuiz from '@/athleteTests/RPEQuiz';
import RamTest from '@/athleteTests/Ram';
import SpatialIntellection from '@/athleteTests/SpatialIntellection';
import SpatialIntellectionInputForm from '@/athleteTests/SpatialIntellectionInputForm';
import SpeedAndPowerThreeJumps from '@/athleteTests/SpeedAndPowerThreeJumps';
import Spiroergometry from '@/athleteTests/Spiroergometry';
import Spiroergometry0105 from '@/athleteTests/Spiroergometry 1.05';
import Spiroergometry0106 from '@/athleteTests/Spiroergometry 1.06';
import Spiroergometry0107 from '@/athleteTests/Spiroergometry 1.07';
import Spiroergometry0108 from '@/athleteTests/Spiroergometry 1.08';
import SportMotivation from '@/athleteTests/SportMotivation';
import SportMotivationQuiz from '@/athleteTests/SportMotivationQuiz';
import SportMotivationScale from '@/athleteTests/SportMotivationScale';
import SportMotivationScaleQuiz from '@/athleteTests/SportMotivationScaleQuiz';
import StressAndRecovery from '@/athleteTests/StressAndRecovery';
import StressAndRecoveryQuiz from '@/athleteTests/StressAndRecoveryQuiz';
import StressFactors from '@/athleteTests/StressFactors';
import StressFactorsQuiz from '@/athleteTests/StressFactorsQuiz';
import Tremor from '@/athleteTests/Tremor';
import TremorInputForm from '@/athleteTests/TremorInputForm';
import VisualAttention from '@/athleteTests/VisualAttention';
import VisualAttentionInputForm from '@/athleteTests/VisualAttentionInputForm';
import { ROUTE } from '@/pages/Root/constants';

export const TESTS_LIST = {
  [ROUTE.TEST.INBODY]: {
    component: InBody,
    title: 'A01. Анализ состава тела методом биоимпедансометрии',
    description:
      'В задачу данного тестирования входило определение основных антропометрических характеристик спортсмена, включающих различные массовые показатели (распределение по компонентам – мышцы, жир, жидкость, и частям тела – руки, ноги) и ряд производных коэффициентов (оценки степени ожирения - индексы массы тела и отношения талия-бедро, и метаболических процессов в тканях организма - интенсивность основного обмена, клеточная масса тела).Измерения различных компонент основаны на методике реактивного сопротивления тканей организма (биоимпедансометрия).'
  },
  [ROUTE.TEST.SPIROERGOMETRY]: {
    component: Spiroergometry,
    title: '01.04. Определение уровня аэробной подготовленности',
    description:
      'Уровень аэробной работоспособности определяется, в частности, функциональными возможностями сердечно-сосудистой и дыхательной систем. Количественными характеристиками этих возможностей являются ежеминутное потребление кислорода (V’02), углекислого газа (V’CO2), частота сердечных сокращений (ЧСС). При длительном выполнении циклической деятельности с повышающейся нагрузкой (например, постепенном увеличении мощности велоэргометра) происходит изменение этих характеристик – как плавное нарастание, так и пороговые реакции, свидетельствующие о «поворотных точках» в характере метаболизма организма, а также его предельных возможностях. Данное тестирование осуществляется с целью определения важнейших из таких «поворотных точек», порога анаэробного обмена (ПАНО) и максимального потребления кислорода (МПК), построении на их основе основных тренировочных зон (по ЧСС) и выявления изменений в характере энергообеспечения бега (углеводы/жиры).'
  },
  [ROUTE.TEST.ACCELERATION_DIRECT_STANCE]: {
    component: AccelerationDirectStance,
    title: '04.01.1 Ускорение из прямой стойки'
  },
  [ROUTE.TEST.ACCELERATION_DIRECT_STANCE_INPUT_FORM]: {
    component: AccelerationDirectStanceInputForm,
    title: '04.01.1 Ускорение из прямой стойки',
    showDateSelector: false,
    showInterpretation: false
  },
  [ROUTE.TEST.ACCELERATION_SIDE_STANCE]: {
    component: AccelerationSideStance,
    title: '04.01.2 Ускорение из боковой стойки'
  },
  [ROUTE.TEST.ACCELERATION_SIDE_STANCE_INPUT_FORM]: {
    component: AccelerationSideStanceInputForm,
    title: '04.01.2 Ускорение из боковой стойки',
    showDateSelector: false,
    showInterpretation: false
  },
  [ROUTE.TEST.SPIROERGOMETRY_01051]: {
    component: Spiroergometry0105,
    title:
      '01.05.1 Определение уровня аэробной подготовленности: максимальный тест с непрерывно возрастающей нагрузкой (Тест на тредмиле)',
    description:
      'Определение уровня аэробной подготовленности: максимальный тест с непрерывно возрастающей нагрузкой'
  },
  [ROUTE.TEST.SPIROERGOMETRY_01052]: {
    component: Spiroergometry0105,
    title:
      '01.05.2 Определение уровня аэробной подготовленности: максимальный тест с непрерывно возрастающей нагрузкой (Тест на велоэргометре)',
    description:
      'Определение уровня аэробной подготовленности: максимальный тест с непрерывно возрастающей нагрузкой'
  },
  [ROUTE.TEST.SPIROERGOMETRY_01061]: {
    component: Spiroergometry0106,
    title:
      '01.06.1 Определение уровня аэробной подготовленности: максимальный тест с непрерывно возрастающей нагрузкой с лактатом (Тест на тредмиле)',
    description:
      'Определение уровня аэробной подготовленности: максимальный тест с непрерывно возрастающей нагрузкой'
  },
  [ROUTE.TEST.SPIROERGOMETRY_01062]: {
    component: Spiroergometry0106,
    title:
      '01.06.2 Определение уровня аэробной подготовленности: максимальный тест с непрерывно возрастающей нагрузкой с лактатом (Тест на велоэргометре)',
    description:
      'Определение уровня аэробной подготовленности: максимальный тест с непрерывно возрастающей нагрузкой'
  },
  [ROUTE.TEST.SPIROERGOMETRY_01071]: {
    component: Spiroergometry0107,
    title:
      '01.07.1 Определение уровня аэробной подготовленности: субмаксимальный тест с непрерывно возрастающей нагрузкой (Тест на тредмиле)',
    description:
      'Определение уровня аэробной подготовленности: максимальный тест с непрерывно возрастающей нагрузкой'
  },
  [ROUTE.TEST.SPIROERGOMETRY_01072]: {
    component: Spiroergometry0107,
    title:
      '01.07.2 Определение уровня аэробной подготовленности: субмаксимальный тест с непрерывно возрастающей нагрузкой (Тест на велоэргометре)',
    description:
      'Определение уровня аэробной подготовленности: максимальный тест с непрерывно возрастающей нагрузкой'
  },
  [ROUTE.TEST.SPIROERGOMETRY_01081]: {
    component: Spiroergometry0108,
    title:
      '01.08.1 Определение уровня аэробной подготовленности: субмаксимальный тест с непрерывно возрастающей нагрузкой с лактатом (Тест на тредмиле)',
    description:
      'Определение уровня аэробной подготовленности: максимальный тест с непрерывно возрастающей нагрузкой'
  },
  [ROUTE.TEST.SPIROERGOMETRY_01082]: {
    component: Spiroergometry0108,
    title:
      '01.08.2 Определение уровня аэробной подготовленности: субмаксимальный тест с непрерывно возрастающей нагрузкой с лактатом (Тест на велоэргометре)',
    description:
      'Определение уровня аэробной подготовленности: максимальный тест с непрерывно возрастающей нагрузкой'
  },
  [ROUTE.TEST.STRESS_AND_RECOVERY]: {
    component: StressAndRecovery,
    title: '12.13. Определение психологического состояния: уровень стресса и восстановления',
    showInterpretation: false
  },
  [ROUTE.TEST.STRESS_AND_RECOVERY_QUIZ]: {
    component: StressAndRecoveryQuiz,
    title: '12.13. Определение психологического состояния: уровень стресса и восстановления',
    showDateSelector: false,
    showInterpretation: false
  },
  [ROUTE.TEST.SPORT_MOTIVATION]: {
    component: SportMotivation,
    title: '08.02.2 Оценка мотивационной сферы: мотивация и цели (Мотивы занятия спортом)',
    showInterpretation: false
  },
  [ROUTE.TEST.SPORT_MOTIVATION_QUIZ]: {
    component: SportMotivationQuiz,
    title: '08.02.2 Оценка мотивационной сферы: мотивация и цели (Мотивы занятия спортом)',
    showDateSelector: false,
    showInterpretation: false
  },
  [ROUTE.TEST.SPORT_MOTIVATION_SCALE]: {
    component: SportMotivationScale,
    title:
      '08.02.3 Оценка мотивационной сферы: мотивация и цели (Шкала спортивной мотивации - SMS)',
    showInterpretation: false
  },
  [ROUTE.TEST.SPORT_MOTIVATION_SCALE_QUIZ]: {
    component: SportMotivationScaleQuiz,
    title:
      '08.02.3 Оценка мотивационной сферы: мотивация и цели (Шкала спортивной мотивации - SMS)',
    showDateSelector: false,
    showInterpretation: false
  },
  [ROUTE.TEST.STRESS_FACTORS]: {
    component: StressFactors,
    title:
      '08.03.1 Оценка влияния различных стрессовых ситуаций в соревновательной деятельности (стресс-факторы)',
    showInterpretation: false
  },
  [ROUTE.TEST.STRESS_FACTORS_QUIZ]: {
    component: StressFactorsQuiz,
    title:
      '08.03.1 Оценка влияния различных стрессовых ситуаций в соревновательной деятельности (стресс-факторы)',
    showDateSelector: false,
    showInterpretation: false
  },
  [ROUTE.TEST.COPING_STRATEGIES]: {
    component: CopingStrategies,
    title:
      '08.03.1 Оценка влияния различных стрессовых ситуаций в соревновательной деятельности (копинг-стратегии)',
    showInterpretation: false
  },
  [ROUTE.TEST.COPING_STRATEGIES_QUIZ]: {
    component: CopingStrategiesQuiz,
    title:
      '08.03.1 Оценка влияния различных стрессовых ситуаций в соревновательной деятельности (копинг-стратегии)',
    showDateSelector: false,
    showInterpretation: false
  },
  [ROUTE.TEST.VISUAL_ATTENTION]: {
    component: VisualAttention,
    title: '08.04.1 Оценка когнитивных функций: концентрация внимания'
  },
  [ROUTE.TEST.VISUAL_ATTENTION_INPUT_FORM]: {
    component: VisualAttentionInputForm,
    title: '08.04.1 Оценка когнитивных функций: концентрация внимания'
  },
  [ROUTE.TEST.SPATIAL_INTELLECTION]: {
    component: SpatialIntellection,
    title: '08.04.2 Оценка когнитивных функций: пространственное мышление'
  },
  [ROUTE.TEST.SPATIAL_INTELLECTION_INPUT_FROM]: {
    component: SpatialIntellectionInputForm,
    title: '08.04.2 Оценка когнитивных функций: пространственное мышление'
  },
  [ROUTE.TEST.SPEED_AND_POWER_THREE_JUMPS]: {
    component: SpeedAndPowerThreeJumps,
    title: '04.05 Определение скоростно-силовой подготовленности: прыжковые тесты',
    description:
      'Оценка взрывной силы, упругих свойств мышц и суставно-связочного аппарата, согласованности работы рук и ног в прыжках (Squat Jump, CMJ-Arms Fixed, CMJ-Arm Swing).'
  },
  [ROUTE.TEST.MOTILITY_JUMPS_DIFF_VERTICAL]: {
    component: MotilityJumpsDiffVertical,
    title: '06.01.1 Дифференциация мышечных усилий в серии вертикальных прыжков'
  },
  [ROUTE.TEST.MOTILITY_JUMPS_DIFF_HORIZONTAL]: {
    component: MotilityJumpsDiffHorizontal,
    title: '06.01.1 Дифференциация мышечных усилий в серии горизонтальных прыжков'
  },
  [ROUTE.TEST.MOTILITY_JUMPS_DIFF_HORIZONTAL_INPUT_FORM]: {
    component: MotilityJumpsDiffHorizontalInputForm,
    title: '06.01.2 Дифференциация мышечных усилий в серии горизонтальных прыжков',
    showDateSelector: false,
    showInterpretation: false
  },
  [ROUTE.TEST.ANTHROPOMETRY]: {
    component: Anthropometry,
    title: '09.02 Определение антропометрических показателей костного скелета (длины и диаметры)'
  },
  [ROUTE.TEST.ANTHROPOMETRY_INPUT_FORM]: {
    component: AnthropometryInputForm,
    title: '09.02 Определение антропометрических показателей костного скелета (длины и диаметры)',
    showDateSelector: false,
    showInterpretation: false
  },
  [ROUTE.TEST.CALIPEROMETRY]: {
    component: Caliperometry,
    title: '09.01 Определение антропометрических показателей методом калиперометрии'
  },
  [ROUTE.TEST.CALIPEROMETRY_INPUT_FORM]: {
    component: CaliperometryInputForm,
    title: '09.01 Определение антропометрических показателей методом калиперометрии',
    showDateSelector: false,
    showInterpretation: false
  },
  [ROUTE.TEST.CALIPER_BODY_COMPOSITION]: {
    component: CaliperBodyComposition,
    title: '09.04 Анализ состава тела методом калиперометрии',
    showInterpretation: false
  },
  [ROUTE.TEST.CALIPER_BODY_COMPOSITION_INPUT_FORM]: {
    component: CaliperBodyCompositionInputForm,
    title: '09.04 Анализ состава тела методом калиперометрии',
    showDateSelector: false,
    showInterpretation: false
  },
  [ROUTE.TEST.JUMPS_FATIGUE]: {
    component: JumpsFatigue,
    title: '04.06 Определение скоростно-силовой подготовленности: утомляемость в прыжковых тестах'
  },
  [ROUTE.TEST.EXPLOSIVE_THROW]: {
    component: ExplosiveThrow,
    title: '13.02.2 Оценка скоростно-силовых способностей в тестах с медицинболом'
  },
  [ROUTE.TEST.EXPLOSIVE_THROW_INPUT_FORM]: {
    component: ExplosiveThrowInputForm,
    title: '13.02.2 Оценка скоростно-силовых способностей в тестах с медицинболом',
    showDateSelector: false,
    showInterpretation: false
  },
  [ROUTE.TEST.EXPLOSIVE_JUMP]: {
    component: ExplosiveJump,
    title: '13.02.1 Оценка скоростно-силовых способностей в прыжковых тестах'
  },
  [ROUTE.TEST.EXPLOSIVE_JUMP_INPUT_FORM]: {
    component: ExplosiveJumpInputForm,
    title: '13.02.1 Оценка скоростно-силовых способностей в прыжковых тестах',
    showDateSelector: false,
    showInterpretation: false
  },
  [ROUTE.TEST.COORDINATION_JUMPS_DIFF_VERTICAL]: {
    component: CoordinationJumpsDiffVertical,
    title: '03.3 Дифференциация мышечных усилий в прыжках вверх'
  },
  [ROUTE.TEST.COORDINATION_JUMPS_DIFF_HORIZONTAL]: {
    component: CoordinationJumpsDiffHorizontal,
    title: '13.03.2 Дифференциация мышечных усилий в прыжках вперед'
  },
  [ROUTE.TEST.COORDINATION_JUMPS_DIFF_HORIZONTAL_INPUT_FORM]: {
    component: CoordinationJumpsDiffHorizontalInputForm,
    title: '13.03.3 Дифференциация мышечных усилий в серии горизонтальных прыжков',
    showDateSelector: false,
    showInterpretation: false
  },
  [ROUTE.TEST.COORDINATION_TENNIS]: {
    component: CoordinationTennis,
    title: '13.03.1 Оценка координационных способностей в специфических для вида спорта действиях'
  },
  [ROUTE.TEST.COORDINATION_TENNIS_INPUT_FORM]: {
    component: CoordinationTennisInputForm,
    title: '13.03.1 Оценка координационных способностей в специфических для вида спорта действиях',
    showDateSelector: false,
    showInterpretation: false
  },
  [ROUTE.TEST.FLEXIBILITY_SHOULDERS]: {
    component: FlexibilityShoulders,
    title: '13.05.1 Оценка гибкости и подвижности в плечевых суставах'
  },
  [ROUTE.TEST.FLEXIBILITY_SHOULDERS_INPUT_FORM]: {
    component: FlexibilityShouldersInputForm,
    title: '13.05.1 Оценка гибкости и подвижности в плечевых суставах',
    showDateSelector: false,
    showInterpretation: false
  },
  [ROUTE.TEST.FLEXIBILITY_BACK]: {
    component: FlexibilityBack,
    title: '13.05.2 Оценка подвижности позвоночного столба'
  },
  [ROUTE.TEST.FLEXIBILITY_BACK_INPUT_FORM]: {
    component: FlexibilityBackInputForm,
    title: '13.05.2 Оценка подвижности позвоночного столба',
    showDateSelector: false,
    showInterpretation: false
  },
  [ROUTE.TEST.BACK_FORWARD_RUN]: {
    component: BackForwardRun,
    title: '13.04.1 Оценка анаэробной выносливости в беговом тесте "Челнок"'
  },
  [ROUTE.TEST.BACK_FORWARD_RUN_INPUT_FORM]: {
    component: BackForwardRunInputForm,
    title: '13.04.1 Оценка анаэробной выносливости в беговом тесте "Челнок"',
    showDateSelector: false,
    showInterpretation: false
  },
  [ROUTE.TEST.ISOMED_HIP]: {
    component: IsoMedHip,
    title:
      '05.04.1 Определение силовой подготовленности в динамическом режиме работы: односуставное движение (Тазобедренный сустав)'
  },
  [ROUTE.TEST.ISOMED_KNEE]: {
    component: IsoMedKnee,
    title:
      '05.04.2 Определение силовой подготовленности в динамическом режиме работы: односуставное движение (Коленный сустав)'
  },
  [ROUTE.TEST.ISOMED_SHOULDER]: {
    component: IsoMedShoulder,
    title:
      '05.04.3 Определение силовой подготовленности в динамическом режиме работы: односуставное движение (Плечевой сустав)'
  },
  [ROUTE.TEST.ISOMED_ELBOW]: {
    component: IsoMedElbow,
    title:
      '05.04.4 Определение силовой подготовленности в динамическом режиме работы: односуставное движение (Локтевой сустав)'
  },
  [ROUTE.TEST.ISOMED_ANKLE]: {
    component: IsoMedAnkle,
    title:
      '05.04.5 Определение силовой подготовленности в динамическом режиме работы: односуставное движение (Голеностопный сустав)'
  },
  [ROUTE.TEST.BEEP]: {
    component: Beep,
    title: '13.04.2 Оценка анаэробной выносливости в беговом тесте "Веер"'
  },
  [ROUTE.TEST.BEEP_INPUT_FORM]: {
    component: BeepInputForm,
    title: '13.04.2 Оценка анаэробной выносливости в беговом тесте "Веер"',
    showDateSelector: false,
    showInterpretation: false
  },
  [ROUTE.TEST.MAM]: {
    component: MAM,
    title: '02.03.2 Нагрузка со стандартным набором сопротивлений'
  },
  [ROUTE.TEST.MAM_RELATIVE]: {
    component: MAMRelative,
    title: '02.03.1 Нагрузка с сопротивлением, пропорциональным весу'
  },
  [ROUTE.TEST.CADENCE]: {
    component: Cadence,
    title: '04.03 Определение скоростной подготовленности: максимальная частота движений'
  },
  [ROUTE.TEST.HEMOGLOBIN_MASS]: {
    component: HemoglobinMass,
    title: '22.01 Определение общей гемоглобиновой массы (ОГМ, ОЦК)'
  },
  [ROUTE.TEST.HEMOGLOBIN_MASS_INPUT_FORM]: {
    component: HemoglobinMassInputForm,
    title: '22.01 Определение общей гемоглобиновой массы (ОГМ, ОЦК)',
    showDateSelector: false,
    showInterpretation: false
  },
  [ROUTE.TEST.RPE]: {
    component: Rpe,
    title: '11.05 Субъективная оценка тренировочной нагрузки (RPE)'
  },
  [ROUTE.TEST.RPE_QUIZ]: {
    component: RpeQuiz,
    title: '11.05 Субъективная оценка тренировочной нагрузки (RPE)',
    showDateSelector: false,
    showInterpretation: false
  },
  [ROUTE.TEST.ANXIETY]: {
    component: Anxiety,
    title: '08.05.2 Оценка психологической подготовленности: уровень тревожности'
  },
  [ROUTE.TEST.ANXIETY_QUIZ]: {
    component: AnxietyQuiz,
    title: '08.05.2 Оценка психологической подготовленности: уровень тревожности',
    showDateSelector: false,
    showInterpretation: false
  },
  [ROUTE.TEST.COMPETITIVE_ANXIETY]: {
    component: CompetitiveAnxiety,
    title: '08.03.3 Оценка стрессоустойчивости: оценка соревновательной тревожности'
  },
  [ROUTE.TEST.COMPETITIVE_ANXIETY_QUIZ]: {
    component: CompetitiveAnxietyQuiz,
    title: '08.03.3 Оценка стрессоустойчивости: оценка соревновательной тревожности',
    showDateSelector: false,
    showInterpretation: false
  },
  [ROUTE.TEST.CLAIMS]: {
    component: Claims,
    title: '08.02.1 Оценка мотивационной сферы: уровень притязаний'
  },
  [ROUTE.TEST.CLAIMS_INPUT_FORM]: {
    component: ClaimsInputForm,
    title: '08.02.1 Оценка мотивационной сферы: уровень притязаний',
    showDateSelector: false,
    showInterpretation: false
  },
  [ROUTE.TEST.MAM_SKI_EGROMETER]: {
    component: MAMSkiEgrometer,
    title: '02.04.2 Определение анаэробной подготовленности: МАМ тест (Тест на лыжном тренажёре)'
  },
  [ROUTE.TEST.MAM_SKI_EGROMETER_INPUT_FORM]: {
    component: MAMSkiEgrometerInputForm,
    title: '02.04.2 Определение анаэробной подготовленности: МАМ тест (Тест на лыжном тренажёре)',
    showDateSelector: false,
    showInterpretation: false
  },
  [ROUTE.TEST.TREMOR]: {
    component: Tremor,
    title: '06.09.2 Оценка сенсомоторных реакций: динамическая тремография'
  },
  [ROUTE.TEST.TREMOR_INPUT_FORM]: {
    component: TremorInputForm,
    title: '06.09.2 Оценка сенсомоторных реакций: динамическая тремография',
    showDateSelector: false,
    showInterpretation: false
  },
  [ROUTE.TEST.FMS]: {
    component: FMS,
    title: '12.11 Функциональный скрининг движений'
  },
  [ROUTE.TEST.FMS_INPUT_FORM]: {
    component: FMSInputForm,
    title: '12.11 Функциональный скрининг движений',
    showDateSelector: false,
    showInterpretation: false
  },
    [ROUTE.TEST.RAM]: {
  component: FMSInputForm,
    title: '08.04.3 Оценка когнитивных функций: оперативная память',
    showDateSelector: false,
    showInterpretation: false
 }

};
