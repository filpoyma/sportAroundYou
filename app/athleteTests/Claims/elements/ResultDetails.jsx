import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import SpeedometerChart from '@/components/SpeedometerChart';
import injectStyles from '@/utils/injectStyles';
import { COLORS, SPACE_SIZE } from '@/utils/styleConstants';

const ResultDetails = ({ className }) => (
  <div className={className}>
    <div>
      <div>
        <SpeedometerChart
          minValue={-27}
          minValueLabel="-27"
          maxValue={27}
          maxValueLabel="27"
          value={20}
          valueLabel="20"
          markers={[{ value: -9, label: '-1.5' }, { value: 9, label: '5' }]}
        />
      </div>
      <div>
        <h3>Целевое отклонение</h3>

        <p key="recovery_interpretation_1">Исходный уровень притязаний высокий.</p>
        <p key="recovery_interpretation_1">
          Уровень притязаний высокий. Люди с высоким, но реалистичным уровнем притязаний стремятся
          постоянно к улучшению своих достижений, к самосовершенствованию, к решению все более и
          более сложных задач, к достижению трудных целей. Высокий реалистичный уровень притязаний
          сочетается с уверенностью в ценности собственных действий, со стремлением к
          самоутверждению, ответственностью, коррекцией неудач за счет собственных усилий, с
          наличием устойчивых жизненных планов.
        </p>
      </div>
    </div>
  </div>
);

ResultDetails.propTypes = {
  className: PropTypes.string.isRequired
};

ResultDetails.defaultProps = {};

ResultDetails.displayName = 'ClaimsTestResultDetailsElement';

const styles = css`
  padding: ${SPACE_SIZE.M} 0;

  & > div {
    display: flex;
    justify-content: space-between;
    color: ${COLORS.TEXT.PRIMARY};

    & > *:first-child {
      flex: 1;
      margin-right: ${SPACE_SIZE.M};
    }

    & > *:last-child {
      width: 404px;
    }

    h3 {
      margin: 0 0 ${SPACE_SIZE.XXS};
      font: 700 15px/20px var(--ff);
    }

    & > p {
      font: 14px/16px var(--dff);
    }

    & + div {
      margin-top: 40px;
    }
  }
`;

export default injectStyles(ResultDetails, styles);
