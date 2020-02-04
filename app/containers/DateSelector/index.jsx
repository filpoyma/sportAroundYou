import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Spinner from '@/components/Spinner';
import { REQUEST_STATUS } from '@/utils/constants';
import injectLogic from '@/utils/injectLogic';
import injectReducer from '@/utils/injectReducer';
import injectStyles from '@/utils/injectStyles';

import { changeDate, changeDateRange } from './actions';
import { STATE_KEY } from './constants';
import Arrow from './elements/Arrow';
import Date from './elements/Date';
import logic from './logic';
import reducer from './reducer';
import { makeSelectCurrentDate, makeSelectDatesData, makeSelectStatus } from './selectors';
import styles from './styles';

/* eslint-disable react/prop-types */
const Empty = ({ className }) => (
  <div className={className}>
    <span>Список дат пуст</span>
  </div>
);

const Error = ({ className }) => (
  <div className={className}>
    <span>Ошибка при получении дат</span>
  </div>
);

const Loading = ({ className }) => (
  <div className={className}>
    <Spinner size="small" />
  </div>
);
/* eslint-enable react/prop-types */

class DateSelector extends Component {
  handleChangeDate = id => () => {
    const { currentDate, dispatch } = this.props;

    if (id === currentDate) {
      return;
    }

    dispatch(changeDate(id));
  };

  handleChangeDateRange = direction => () => {
    this.props.dispatch(changeDateRange(direction));
  };

  render() {
    const {
      className,
      currentDate,
      data: { prevArrow, nextArrow, dates },
      status
    } = this.props;

    if (status === REQUEST_STATUS.ERROR) {
      return <Error className={className} />;
    }

    if (status === REQUEST_STATUS.LOADING) {
      return <Loading className={className} />;
    }

    if (isEmpty(dates)) {
      return <Empty className={className} />;
    }

    return (
      <div className={className}>
        <span>Дата:</span>
        {prevArrow && <Arrow onClick={this.handleChangeDateRange(1)} />}
        {dates.map(({ id, value }) => (
          <Date
            key={`date_selector_date_${id}`}
            selected={id === currentDate}
            onClick={this.handleChangeDate(id)}
          >
            {value}
          </Date>
        ))}
        {nextArrow && <Arrow onClick={this.handleChangeDateRange(-1)} />}
      </div>
    );
  }
}

DateSelector.propTypes = {
  currentDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string.isRequired,
  data: PropTypes.shape({
    prevArrow: PropTypes.bool.isRequired,
    nextArrow: PropTypes.bool.isRequired,
    dates: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired
      })
    )
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired
};

DateSelector.defaultProps = {
  currentDate: null
};

DateSelector.displayName = 'DateSelectorContainer';

const mapStateToProps = createStructuredSelector({
  currentDate: makeSelectCurrentDate(),
  data: makeSelectDatesData(),
  status: makeSelectStatus()
});

const withConnect = connect(mapStateToProps);
const withLogic = injectLogic(logic);
const withReducer = injectReducer({ key: STATE_KEY.MAIN, reducer });

export default compose(
  withConnect,
  withLogic,
  withReducer
)(injectStyles(DateSelector, styles));
