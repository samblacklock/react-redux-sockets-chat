import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'babel-polyfill';
import App from './components/App';
import CreateStore from './store';

const store = CreateStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);
