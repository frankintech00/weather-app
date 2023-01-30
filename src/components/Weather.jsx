import React from "react";

const Weather = ({ data }) => {
  return (
    <div>
      <div className="flex justify-between px-5">
        <div className="flex flex-col justify-center">
          <p className="font-inter font-semibold text-5xl text-white py-1">
            {data.city}
          </p>
          <p className="font-inter font-semibold text-2xl text-white first-letter:capitalize">
            {data.weather[0].description}
          </p>
        </div>
        <img
          alt=" Weather Icon. "
          className="weather-icon"
          src={`src/assets/icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="flex justify-between p-5">
        <div>
          <p className="font-semibold text-8xl text-white first-letter:capitalize mr-5">
            {Math.round(data.main.temp)}°C
          </p>
        </div>
        <div className="min-w-0">
          <div className="flex justify-between">
            <p className="text-white whitespace-nowrap">Feels like</p>
            <p className="text-white whitespace-nowrap ml-10">
              {Math.round(data.main.feels_like)}°C
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-white whitespace-nowrap">Wind</p>
            <p className="text-white whitespace-nowrap ml-10">
              {data.wind.speed} m/s
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-white whitespace-nowrap">Humidity</p>
            <p className="text-white whitespace-nowrap ml-10">
              {data.main.humidity}%
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-white whitespace-nowrap">Pressure</p>
            <p className="text-white whitespace-nowrap ml-10">
              {data.main.pressure} hPa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
