import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
import initSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware),
));

export default function configureStore() {
  sagaMiddleware.run(initSaga);
  return store;
}
