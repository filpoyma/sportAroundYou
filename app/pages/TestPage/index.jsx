import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route as RouterRoute, Switch } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Box from '@/components/Box';
import Button from '@/components/Button';
import NavigationBack from '@/components/NavigationBack';
import Spinner from '@/components/Spinner';
import Wrapper from '@/components/Wrapper';
import DateSelector from '@/containers/DateSelector';
import { makeSelectIsEmptyDates } from '@/containers/DateSelector/selectors';
import Interpretation from '@/containers/Interpretation';
import PageTitle from '@/containers/PageTitle';
import PersonCard from '@/containers/PersonCard';
import TestSelector from '@/containers/TestSelector';
import { ROUTE } from '@/pages/Root/constants';
import { REQUEST_STATUS } from '@/utils/constants';
import injectLogic from '@/utils/injectLogic';
import injectReducer from '@/utils/injectReducer';
import injectStyles from '@/utils/injectStyles';

import { changeTest, getAthleteById } from './actions';
import { TESTS_LIST } from './config';
import { STATE_KEY } from './constants';
import logic from './logic';
import reducer from './reducer';
import { makeSelectCurrentTestKey, makeSelectNextTestKey, makeSelectStatus } from './selectors';
import styles from './styles';

/* eslint-disable react/prop-types, default-case */
const Route = ({ currentTestKey, dispatch, isEmptyDates, matchUrl, ...rest }) => {
  const key = rest.computedMatch.params.testKey;
  const TestComponent = TESTS_LIST[key]?.component;

  if (!TestComponent) {
    return <Redirect to={`${matchUrl}/${ROUTE.TEST.INBODY}`} />;
  }

  if (key !== currentTestKey) {
    dispatch(changeTest(key));
  }

  if (isEmptyDates) {
    return <Empty />;
  }

  return <RouterRoute {...rest} render={routeProps => <TestComponent {...routeProps} />} />;
};
/* eslint-enable react/prop-types, default-case */

const getStaticTestProps = testKey => ({
  description: TESTS_LIST?.[testKey]?.description,
  showDateSelector: TESTS_LIST?.[testKey]?.showDateSelector ?? true,
  showInterpretation: TESTS_LIST?.[testKey]?.showInterpretation ?? true,
  title: TESTS_LIST?.[testKey]?.title
});

const Empty = () => (
  <Box title="Ошибка">
    Не удалось получить результат тестирования. Возможно, данный спорстмен не проходил выбранный
    тест
  </Box>
);
const Error = () => (
  <Wrapper>
    <Box title="Ошибка">Спортсмен не найден</Box>
  </Wrapper>
);
const Loader = () => <Spinner position="relative" size="big" />;

class TestPage extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(getAthleteById(match?.params?.athleteId));
  }

  componentDidUpdate(prevProps) {
    const {
      history,
      match: { url },
      nextTestKey
    } = this.props;

    if (prevProps.nextTestKey !== nextTestKey && nextTestKey) {
      history.push(`${url}/${nextTestKey}`);
    }
  }

  render() {
    const { className, currentTestKey, dispatch, isEmptyDates, match, status } = this.props;

    if (status === REQUEST_STATUS.LOADING) {
      return <Loader />;
    }

    if (status === REQUEST_STATUS.ERROR) {
      return <Error />;
    }

    const { description, showDateSelector, showInterpretation, title } = getStaticTestProps(
      currentTestKey
    );

    return (
      <Wrapper className={className}>
        <NavigationBack title="к списку спортсменов" />
        <PageTitle description={description} title={title} />
        <PersonCard />
        <div>
          {showDateSelector && (
            <>
              <DateSelector />
              {!isEmptyDates && <Button>Экспорт в PDF</Button>}
            </>
          )}
        </div>
        <TestSelector matchUrl={match.url} />
        <div>
          <Switch>
            <Route
              dispatch={dispatch}
              isEmptyDates={isEmptyDates}
              currentTestKey={currentTestKey}
              matchUrl={match.url}
              path={`${match.path}/:testKey`}
            />
            <Redirect to={`${match.url}/${ROUTE.TEST.INBODY}`} />
          </Switch>
          {showInterpretation && !isEmptyDates && <Interpretation />}
        </div>
      </Wrapper>
    );
  }
}

TestPage.propTypes = {
  className: PropTypes.string,
  currentTestKey: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  isEmptyDates: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  nextTestKey: PropTypes.string,
  status: PropTypes.string.isRequired
};

TestPage.defaultProps = {
  className: null,
  nextTestKey: ''
};

TestPage.displayName = 'TestPage';

// TestPage.whyDidYouRender = true;

const mapStateToProps = createStructuredSelector({
  currentTestKey: makeSelectCurrentTestKey(),
  isEmptyDates: makeSelectIsEmptyDates(),
  nextTestKey: makeSelectNextTestKey(),
  status: makeSelectStatus()
});

const withConnect = connect(mapStateToProps);
const withLogic = injectLogic(logic);
const withReducer = injectReducer({ key: STATE_KEY.MAIN, reducer });

export default compose(
  withConnect,
  withLogic,
  withReducer
)(injectStyles(TestPage, styles));
