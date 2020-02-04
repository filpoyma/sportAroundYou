/**
 * Create the store with dynamic reducers
 */

import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogicMiddleware } from 'redux-logic';

import request from '@/utils/request';

import createReducer from './reducers';

export default function configureStore(initialState = {}, history) {
  let composeEnhancers = compose;
  const logicMiddleware = createLogicMiddleware([], { request });
  // Use individual middleware for test to replace the old logics, because we handle only one test at the time
  const testsLogicMiddleware = createLogicMiddleware([], { request });

  // If Redux Dev Tools is installed, enable it
  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    /* eslint-disable no-underscore-dangle */
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  }

  // Create the store with middlewares:
  // 1. logicMiddleware: enables redux-logic
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [logicMiddleware, testsLogicMiddleware, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(createReducer(), initialState, composeEnhancers(...enhancers));

  // Extensions
  store.logicMiddleware = logicMiddleware;
  store.testsLogicMiddleware = testsLogicMiddleware;
  store.injectedReducers = {}; // Reducer registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}
