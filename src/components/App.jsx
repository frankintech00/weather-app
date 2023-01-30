import { useState } from "react";
import Search from "./Search";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
import Weather from "./Weather";
import Forecast from "./Forecast";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(", ");
    console.log(searchData.value);

    const WeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const ForecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([WeatherFetch, ForecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((error) => {
        onrejected: console.log(error);
      });
  };

  return (
    <div className=" h-full w-3/5 mx-auto font-inter bg-indigo-300 overflow-y p-5">
      <h1 className="font-semibold text-5xl text-white text-center p-5">
        Weather App
      </h1>
      <Search onSearchChange={handleOnSearchChange} />
      {weather && <Weather data={weather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
