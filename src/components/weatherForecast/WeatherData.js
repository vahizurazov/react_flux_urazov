import React from 'react';
import PropTypes from 'prop-types';

function WeatherData(props) {
  let { weather } = props;
  if (!Object.keys(weather).length) {
    return null;
  }

  const objectWeatherData = weather.weather[0];
  const iconUrl =
    'http://openweathermap.org/img/w/' + objectWeatherData.icon + '.png';
  return (
    <div>
      <h1>
        {objectWeatherData.main} in {weather.name}
        <img src={iconUrl} alt={objectWeatherData.description} />
      </h1>
      <p>
        Current: {weather.main.temp}
        &#8451;
      </p>
      <p>
        High: {weather.main.temp_max}
        &#8451;
      </p>
      <p>
        Low: {weather.main.temp_min}
        &#8451;
      </p>
      <p>Wind Speed: {weather.wind.speed} mi/hr</p>
      {/* <p>{data}</p> */}
    </div>
  );
}

WeatherData.propTypes = {
  weather: PropTypes.object,
};
export default WeatherData;
