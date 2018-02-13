import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './WeatherData';

function WeatherForecast(props) {
  let { weatherForecast, saveStoreWeather, weather } = props;

  return (
    <div>
      <button onClick={weatherForecast}>Weather Forecast</button>
      <WeatherData
        weatherForecast={weatherForecast}
        saveStoreWeather={saveStoreWeather}
        weather={weather}
      />
    </div>
  );
}

WeatherForecast.propTypes = {
  weatherForecast: PropTypes.func,
  saveStoreWeather: PropTypes.func,
};
export default WeatherForecast;
