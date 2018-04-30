import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../../modules/';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import testSagaWeather from '../sagas/testSaga';

const sagaMiddleware = createSagaMiddleware();

export default createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(testSagaWeather);
