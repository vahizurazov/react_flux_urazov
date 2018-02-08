import React from 'react';
import { Provider } from 'react-redux';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
// const initialState = {
//   counter: 0,
// };

// const initialLoginState = {
//   username: '',
//   password: '',
// };

// const counter = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREASE': {
//       const newState = {
//         ...state,
//         counter: state.counter + 1,
//       };
//       return newState;
//     }
//     case 'DECREASE': {
//       const newState = {
//         ...state,
//         counter: state.counter - 1,
//       };
//       return newState;
//     }
//     default:
//       return state;
//   }
// };

// const login = (state = initialLoginState, action) => {
//   switch (action.type) {
//     case 'SET_USERNAME': {
//       return {
//         ...state,
//         username: action.username,
//       };
//     }
//     case 'SET_PASSWORD': {
//       return {
//         ...state,
//         password: action.password,
//       };
//     }
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({ counterState: counter, login });
// const store = createStore(rootReducer);

// store.subscribe(() => console.log(store.getState()));

// store.dispatch({
//   type: 'INCREASE',
// });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
