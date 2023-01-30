import React from "react";

const Weather = ({ data }) => {
  return (
    <div>
      <h1>Current Weather</h1>
      <p>{data.city}</p>
      <p>{data.weather[0].description}</p>
      <p>{data.weather[0].icon}</p>
      <img
        alt="weatr"
        className="weather-icon"
        src={`src/assets/icons/${data.weather[0].icon}.png`}
      />
      <p>{Math.round(data.main.temp)}°C</p>
      <p>{Math.round(data.main.feels_like)}°C</p>
      <p>{data.wind.speed} m/s</p>
      <p>{data.main.humidity}%</p>
      <p>{data.main.pressure} hPa</p>
    </div>
  );
};

export default Weather;
