import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './WeatherData';

function WeatherForecast(props) {
  let { weather, startSagaWeather, closeWeather, isWeatherShow } = props;

  const viewWether = () => {
    if (!isWeatherShow) {
      console.log('2222', isWeatherShow);
      startSagaWeather();
    } else {
      console.log('3333', closeWeather);
      closeWeather();
    }
  };

  return (
    <div>
      <button onClick={viewWether}>Weather Forecast</button>
      {isWeatherShow ? <WeatherData weather={weather} /> : null}
      {/* {isWeatherShow && <WeatherData weather={weather} />} */}
    </div>
  );
}

WeatherForecast.propTypes = {
  weatherForecast: PropTypes.func,
  startSagaWeather: PropTypes.func,
};
export default WeatherForecast;
