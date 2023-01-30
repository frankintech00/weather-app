import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <div className="p-5">
      <label className="text-white">Daily Forecast</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="bg-gray-200 rounded-lg h-11 my-2 cursor-pointer flex items-center font-medium text-sm py-2 px-5">
                  <img
                    src={`src/assets/icons/${item.weather[0].icon}.png`}
                    className="w-11 h-11 cursor-pointer"
                    alt="weather"
                  />
                  <label className="text-gray-900 flex-1 font-bold ml-3 cursor-pointer">
                    {forecastDays[idx]}
                  </label>
                  <label className="text-gray-900 flex-1 font-bold mr-5 text-right cursor-pointer">
                    {item.weather[0].description}
                  </label>
                  <label className="cursor-pointer">
                    {Math.round(item.main.temp_max)}°C /
                    {Math.round(item.main.temp_min)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="flex-1 grid gap-0 grid-col-15 grid-template-cols-auto-auto p-5">
                <div className="flex items-center h-30 justify-start">
                  <label className="mr-2 text-gray-700">Pressure:</label>
                  <label className="text-gray-900">{item.main.pressure}</label>
                </div>
                <div className="flex items-center h-30 justify-start">
                  <label className="mr-2 text-gray-700">Humidity:</label>
                  <label className="text-gray-900">{item.main.humidity}</label>
                </div>
                <div className="flex items-center h-30 justify-start">
                  <label className="mr-2 text-gray-700">Clouds:</label>
                  <label className="text-gray-900">{item.clouds.all}%</label>
                </div>
                <div className="flex items-center h-30 justify-start">
                  <label className="mr-2 text-gray-700">Wind speed:</label>
                  <label className="text-gray-900">{item.wind.speed} m/s</label>
                </div>
                <div className="flex items-center h-30 justify-start">
                  <label className="mr-2 text-gray-700">Sea level:</label>
                  <label className="text-gray-900">
                    {item.main.sea_level}m
                  </label>
                </div>
                <div className="flex items-center h-30 justify-start">
                  <label className="mr-2 text-gray-700">Feels like:</label>
                  <label className="text-gray-900">
                    {item.main.feels_like}°C
                  </label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Forecast;
