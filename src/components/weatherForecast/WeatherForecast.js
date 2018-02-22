import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './WeatherData';

function WeatherForecast(props) {
  let { weather, startSagaWeather } = props;

  return (
    <div>
      <button onClick={startSagaWeather}>Weather Forecast</button>
      <WeatherData weather={weather} />
    </div>
  );
}

WeatherForecast.propTypes = {
  weatherForecast: PropTypes.func,
  saveStoreWeather: PropTypes.func,
  startSagaWeather: PropTypes.func,
};
export default WeatherForecast;
