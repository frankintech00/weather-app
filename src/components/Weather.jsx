import React from "react";

const Weather = ({ data }) => {
  return (
    <div>
      {/* Main container to display the weather information */}
      <div className="flex justify-between px-5">
        {/* Left side container to display city name and weather description */}
        <div className="flex flex-col justify-center">
          <p className="font-inter font-semibold text-5xl text-white py-1">
            {/* Display city name */}
            {data.city}
          </p>
          <p className="font-inter font-semibold text-2xl text-white first-letter:capitalize">
            {/* Display weather description */}
            {data.weather[0].description}
          </p>
        </div>
        {/* Right side container to display weather icon */}
        <img
          alt="Weather Icon."
          className="weather-icon"
          src={`../src/assets/icons/${data.weather[0].icon}.png`}
        />
      </div>
      {/* Lower container to display temperature, feels like, wind, humidity, and pressure information */}
      <div className="flex justify-between p-5">
        {/* Left side container to display temperature */}
        <div>
          <p className="font-semibold text-8xl text-white first-letter:capitalize mr-5">
            {/* Display temperature rounded to the nearest integer */}
            {Math.round(data.main.temp)}°C
          </p>
        </div>
        {/* Right side container to display feels like, wind, humidity, and pressure */}
        <div className="min-w-0">
          <div className="flex justify-between">
            <p className="text-white whitespace-nowrap">Feels like</p>
            <p className="text-white whitespace-nowrap ml-10">
              {/* Display feels like rounded to the nearest integer */}
              {Math.round(data.main.feels_like)}°C
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-white whitespace-nowrap">Wind</p>
            <p className="text-white whitespace-nowrap ml-10">
              {/* Display wind speed */}
              {data.wind.speed} m/s
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-white whitespace-nowrap">Humidity</p>
            <p className="text-white whitespace-nowrap ml-10">
              {/* Display humidity */}
              {data.main.humidity}%
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-white whitespace-nowrap">Pressure</p>
            <p className="text-white whitespace-nowrap ml-10">
              {/* Display pressure */}
              {data.main.pressure} hPa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
