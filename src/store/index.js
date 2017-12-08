import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { logger } from 'redux-logger';

import DevTools from '../components/shared/DevTools';
import ProgressReducer from '../reducers/progress';

const combinedReducers = combineReducers({
  progress: ProgressReducer,
});

const enhancer = compose(
  applyMiddleware(logger),
  DevTools.instrument(),
);

export default function configureStore(initialState) {
  const store = createStore(combinedReducers, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers/progress', () =>
      store.replaceReducer(ProgressReducer),
    );
  }

  return store;
}
