import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Box from '@/components/Box';
import Form, { INPUT_TYPE } from '@/containers/Form';
import injectLogic from '@/utils/injectLogic';
import injectStyles from '@/utils/injectStyles';
import { COLORS } from '@/utils/styleConstants';

import { saveForm } from './actions';
import TimeInput from './elements/timeInput';
import { STATUS } from './elements/timeInput/constants';
import logic from './logic';
import styles from './styles';

class VisualAttentionInputForm extends Component {
  state = {
    timeStatus: STATUS.NOT_COMPLETED,
    fullMinutes: null,
    seconds: null
  };

  handleSaveForm = inputs => {
    const { dispatch } = this.props;
    const { timeStatus, fullMinutes, seconds } = this.state;
    if (timeStatus !== STATUS.OK) {
      this.setState({ timeStatus: STATUS.ERROR });
      return;
    }

    const correctTime = `0${fullMinutes}:${seconds}`;
    const values = { ...inputs, time: correctTime };
    dispatch(saveForm(values));
  };

  handleTime = timeObject => {
    this.setState(timeObject);
  };

  formInputs = () => {
    const { fullMinutes, timeStatus } = this.state;

    const theEndOfTest = [
      {
        id: 'allCompassesForTest',
        label: 'Количество просмотренных за тест',
        type: INPUT_TYPE.INT
      },
      {
        id: 'errorsForTest',
        label: 'Количество ошибок за тест',
        type: INPUT_TYPE.INT
      }
    ];

    if (timeStatus !== STATUS.OK || !fullMinutes) return theEndOfTest;
    const inputArray = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < fullMinutes; i++) {
      inputArray.push(
        {
          id: `reviewerCicles_${i + 1}`,
          label: `Количество просмотренных компасов, [${i + 1}] мин`,
          type: INPUT_TYPE.INT,
          validation: false
        },
        {
          id: `errorsPerMinute_${i + 1}`,
          label: `Количество ошибок, [${i + 1}] мин`,
          type: INPUT_TYPE.INT,
          validation: false
        }
      );
    }

    inputArray.push(...theEndOfTest);
    return inputArray;
  };

  render() {
    const { className } = this.props;
    const { timeStatus } = this.state;

    return (
      <Box title="Данные тестирования" className={className}>
        <div>
          <p>Время выполнения теста</p>
          <div>
            <TimeInput
              handleTime={this.handleTime}
              style={{
                border:
                  timeStatus === STATUS.ERROR
                    ? `1px solid ${COLORS.INPUT.DANGER}`
                    : `1px solid ${COLORS.INPUT.BORDER}`
              }}
            />
            <p style={{ visibility: timeStatus === STATUS.ERROR ? 'visible' : 'hidden' }}>
              Неверное время!
            </p>
          </div>
        </div>

        <Form inputs={this.formInputs()} labelWidth="320px" onSave={this.handleSaveForm} />
      </Box>
    );
  }
}

VisualAttentionInputForm.propTypes = {
  className: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

VisualAttentionInputForm.defaultProps = {};

VisualAttentionInputForm.displayName = 'VisualAttentionInputFormComponent';

const withConnect = connect();
const withLogic = injectLogic({ logic, type: 'test' });

export default compose(
  withConnect,
  withLogic
)(injectStyles(VisualAttentionInputForm, styles));
