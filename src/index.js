import React from 'react';
import { Provider } from 'react-redux';

import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import store from './modules/todo/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
