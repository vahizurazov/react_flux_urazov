import React from 'react';
import PropTypes from 'prop-types';

function WeatherData(props) {
  let { weatherForecast, saveStoreWeather, weather } = props;
  console.log(weather);
  if (!Object.keys(weather).length) {
    return null;
  }
  const iconUrl =
    'http://openweathermap.org/img/w/' + weather.weather[0].icon + '.png';
  return (
    <div>
      <h1>
        {weather.weather[0].main} in {weather.name}
        <img src={iconUrl} alt={weather.weather[0].description} />
      </h1>
      <p>Current: {weather.main.temp}°</p>
      <p>High: {weather.main.temp_max}°</p>
      <p>Low: {weather.main.temp_min}°</p>
      <p>Wind Speed: {weather.wind.speed} mi/hr</p>
    </div>
  );
}

WeatherData.propTypes = {
  weatherForecast: PropTypes.func,
  saveStoreWeather: PropTypes.func,
};
export default WeatherData;
