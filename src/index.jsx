import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import rootReducer from './store/reducers/combiner';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

render(
  <Provider store={store}>
    <App sagaMiddleware={sagaMiddleware} />
  </Provider>,
  document.getElementById('root'),
);
