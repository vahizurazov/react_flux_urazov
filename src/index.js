import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import store from './modules/todo/store';
import createBrowserHistory from 'history/createBrowserHistory';
import ComponetToRender from './container/ComponentToRender';

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ComponetToRender />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
