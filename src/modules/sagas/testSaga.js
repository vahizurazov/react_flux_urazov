import { saveStoreWeather } from '../todo/actions';
import { put, takeEvery } from 'redux-saga/effects';

export default function* testSagaWeather() {
  yield takeEvery('START_SAGA_WEATHER', mySaga);
}

function* mySaga() {
  // const cart = yield select(({ todo }) => todo.weather);
  // if (Object.keys(cart).length) return;
  try {
    const user = yield fetch(
      'http://api.openweathermap.org/data/2.5/weather?appid=3b2dce7c397645e8583f51b27d0279dc&q=Kharkiv&units=metric',
    ).then(response => response.json());
    yield put(saveStoreWeather(user));
  } catch (e) {
    yield put();
  }
}
