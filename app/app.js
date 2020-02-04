// Import all the third party stuff
import 'sanitize.css/sanitize.css';
// Load the favicon
/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import 'dayjs/locale/ru';

import { ConnectedRouter } from 'connected-react-router';
import dayjs from 'dayjs';
import FontFaceObserver from 'fontfaceobserver';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Import root app
import Root from '@/pages/Root';
import history from '@/utils/history';

/* eslint-enable import/no-unresolved, import/extensions */
import configureStore from './configureStore';

// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Open Sans is loaded, change font family css variable
openSansObserver.load().then(() => {
  document.documentElement.style.setProperty(
    '--ff',
    `'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif`
  );
});

// Observe loading of Roboto Condensed (to remove Roboto Condensed, remove the <link> tag in
// the index.html file and this observer)
const robotoCondensedObserver = new FontFaceObserver('Roboto Condensed', {});

// When Open Sans is loaded, change font family css variable
robotoCondensedObserver.load().then(() => {
  document.documentElement.style.setProperty('--dff', `'Roboto Condensed', Arial, sans-serif`);
});

// Use Russian locale by default
dayjs.locale('ru');

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Root />
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['pages/Root'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}

if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render'); // eslint-disable-line global-require

  whyDidYouRender(React, {
    exclude: [/^with*/]
  });
}
