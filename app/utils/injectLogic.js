import hoistNonReactStatics from 'hoist-non-react-statics';
import React from 'react';
import { ReactReduxContext } from 'react-redux';

import getInjectors from './logicInjectors';

/**
 * Dynamically injects logic
 */
export default logic => WrappedComponent => {
  class LogicInjector extends React.Component {
    static WrappedComponent = WrappedComponent;

    constructor(props, context) {
      super(props, context);

      getInjectors(context.store).injectLogic(logic);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  LogicInjector.contextType = ReactReduxContext;

  LogicInjector.displayName = `withLogic(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;

  return hoistNonReactStatics(LogicInjector, WrappedComponent);
};
