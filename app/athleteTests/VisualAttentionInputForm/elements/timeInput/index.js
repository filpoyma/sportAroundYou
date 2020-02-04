/* eslint-disable no-restricted-globals */
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { STATUS } from './constants';

class TimeInput extends Component {
  state = {
    inputValue: ''
  };

  onChangeTime = e => {
    const { handleTime } = this.props;
    const prevTime = this.state.inputValue;
    let time = e.target.value;

    if (time.length > 5) time = time.substr(0, 5);
    if (time[2] && time[2] !== ':') return;

    if (prevTime < time && time.length === 2) time += ':';
    else if (prevTime > time && time.length === 2) time = time.substr(0, 1);

    if (time[0] && isNaN(+time[0])) return;
    if (time[1] && isNaN(+time[1])) return;
    if (time[3] && isNaN(+time[3])) return;
    if (time[4] && isNaN(+time[4])) return;

    const returnObj = { inputValue: time };

    if (time.length === 5) {
      const minutes = +time.substr(0, 2);
      const seconds = +time.substr(3, 2);

      if (minutes === 8 && seconds === 0) {
        returnObj.timeStatus = STATUS.OK;
        returnObj.fullMinutes = 8;
        returnObj.seconds = '00';
      } else if (minutes < 8 && seconds < 60) {
        returnObj.timeStatus = STATUS.OK;
        returnObj.fullMinutes = minutes + (seconds > 0 ? 1 : 0);
        returnObj.seconds = seconds < 10 ? `0${seconds}` : seconds;
      } else {
        returnObj.timeStatus = STATUS.ERROR;
      }
    } else {
      returnObj.timeStatus = STATUS.NOT_COMPLETED;
    }

    this.setState(returnObj);
    handleTime(returnObj);
  };

  render() {
    const { inputValue } = this.state;
    const { style } = this.props;

    return (
      <input
        style={style}
        id="input_time"
        type="text"
        placeholder="мм:сс"
        onChange={this.onChangeTime}
        value={inputValue}
      />
    );
  }
}

TimeInput.propTypes = {
  handleTime: PropTypes.func.isRequired,
  style: PropTypes.object
};

TimeInput.defaultProps = {
  style: {}
};

TimeInput.displayName = 'TimeInputComponent';

export default TimeInput;
