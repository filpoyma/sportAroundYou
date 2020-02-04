import PropTypes from 'prop-types';
import React from 'react';

import Box from '@/components/Box';
import Spinner from '@/components/Spinner';
import { REQUEST_STATUS } from '@/utils/constants';

const Error = () => <Box title="Ошибка">Не удалось получить результаты тестирования</Box>;
const Loader = () => <Spinner position="relative" size="big" />;

const TestResults = props => {
  const { children, status } = props;

  if (status === REQUEST_STATUS.ERROR) {
    return <Error />;
  }

  if (status === REQUEST_STATUS.LOADING) {
    return <Loader />;
  }

  return children;
};

TestResults.propTypes = {
  children: PropTypes.node,
  status: PropTypes.string.isRequired
};

TestResults.defaultProps = {
  children: null
};

TestResults.displayName = 'TestResultsContainer';

// TestResults.whyDidYouRender = true;

export default TestResults;
