import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { css } from 'styled-components';

import Box from '@/components/Box';
import Button from '@/components/Button';
import Dropdown from '@/components/Dropdown';
import injectLogic from '@/utils/injectLogic';
import injectStyles from '@/utils/injectStyles';
import { SPACE_SIZE } from '@/utils/styleConstants';

import { LABELS, RESULT_KEY } from '../FMS/constants';
import { saveForm } from './actions';
import logic from './logic';

const arrayToDropdown = array =>
  array.map((value, index) => ({
    id: index,
    label: value,
    value
  }));

const DROPDOWN_VALUES = arrayToDropdown([0, 1, 2, 3]);

class FMSInputForm extends Component {
  state = {};

  componentDidMount() {
    const inputValues = {};

    const keys = Object.keys(RESULT_KEY);
    for (let i = 0; i < keys.length; i += 1) {
      const key = RESULT_KEY[keys[i]];
      inputValues[key] = 0;
    }

    this.setState({ inputValues });
  }

  handleSave = () => {
    const { dispatch } = this.props;
    const { inputValues } = this.state;

    dispatch(saveForm(inputValues));
  };

  handleChangeDropdown = key => value => {
    const { inputValues } = this.state;
    const newInputValues = { ...inputValues };
    newInputValues[key] = value;
    this.setState({ inputValues: newInputValues });
  };

  render() {
    const { className } = this.props;

    return (
      <Box title="Оценка выполнения движений" className={className}>
        {Object.keys(RESULT_KEY).map(key => (
          <Dropdown
            items={DROPDOWN_VALUES}
            initialIndex={0}
            label={`${LABELS[RESULT_KEY[key]]}`}
            onChange={this.handleChangeDropdown(`${RESULT_KEY[key]}`)}
            width="65px"
          />
        ))}
        <Button onClick={this.handleSave} size="big">
          Сохранить и закончить
        </Button>
      </Box>
    );
  }
}

FMSInputForm.propTypes = {
  className: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

FMSInputForm.defaultProps = {};

FMSInputForm.displayName = 'FMSInputFormComponent';

const withConnect = connect();
const withLogic = injectLogic({ logic, type: 'test' });

const styles = css`
  & > ${Button} {
    margin-top: ${SPACE_SIZE.S};
  }

  label {
    display: inline-block;
    width: 290px;
  }
`;

export default compose(
  withConnect,
  withLogic
)(injectStyles(FMSInputForm, styles));
