## Removing `reselect`

To remove `reselect`, remove it from your dependencies in `package.json` and then write
your `mapStateToProps` functions like you normally would!

You'll also need to hook up the history directly to the store. Make changes to `app/app.js`.

1.  Remove statement `import { makeSelectLocationState } from 'containers/App/selectors'`
2.  Make necessary changes to `history` as follows:

```js
const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return state => {
    const routingState = state.get('router'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: makeSelectLocationState(),
});
```
