import invariant from 'invariant';
import { isEmpty } from 'lodash';

import checkStore from './checkStore';

export function injectLogicFactory(store, isValid) {
  return function injectLogic(logic) {
    if (!isValid) checkStore(store);

    if (Array.isArray(logic)) {
      invariant(
        !isEmpty(logic),
        '(app/utils...) injectAsyncLogic: Received an empty `logic` array'
      );

      store.logicMiddleware.mergeNewLogic(logic);

      return;
    }

    const { logic: logicArr, type } = logic;

    invariant(
      Array.isArray(logicArr),
      '(app/utils...) injectAsyncLogic: Expected `logic` to be an array of logic objects'
    );

    invariant(
      !isEmpty(logicArr),
      '(app/utils...) injectAsyncLogic: Received an empty `logic` array'
    );

    if (type === 'test') {
      store.testsLogicMiddleware.replaceLogic(logicArr);

      return;
    }

    store.logicMiddleware.mergeNewLogic(logic);
  };
}

export default function getInjectors(store) {
  checkStore(store);

  return {
    injectLogic: injectLogicFactory(store, true)
  };
}
