import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Array of week days
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
  // Get the current day of the week
  const dayInAWeek = new Date().getDay();

  // Arrange week days in the order starting from the current day
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <div className="p-5">
      {/* Displays the label "Daily Forecast" */}
      <label className="text-white">Daily Forecast</label>
      <Accordion allowZeroExpanded>
        {/* Splices the first 7 items from the data list and maps through each item to render an AccordionItem component */}
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              {/* Renders the AccordionItemButton component that displays the daily forecast information */}
              <AccordionItemButton>
                <div className="bg-gray-200 rounded-lg h-11 my-2 cursor-pointer flex items-center font-medium text-sm py-2 px-5">
                  {/* Displays the weather icon */}
                  <img
                    src={`src/assets/icons/${item.weather[0].icon}.png`}
                    className="w-11 h-11 cursor-pointer"
                    alt="weather"
                  />
                  {/* Displays the day of the forecast */}
                  <label className="text-gray-900 flex-1 font-bold ml-3 cursor-pointer">
                    {forecastDays[idx]}
                  </label>
                  {/* Displays the description of the weather */}
                  <label className="text-gray-900 flex-1 font-bold mr-5 text-right cursor-pointer">
                    {item.weather[0].description}
                  </label>
                  {/* Displays the temperature range */}
                  <label className="cursor-pointer">
                    {Math.round(item.main.temp_max)}°C /
                    {Math.round(item.main.temp_min)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {/* Wrapper for accordion item panel */}
              <div className="flex-1 grid gap-0 grid-col-15 grid-template-cols-auto-auto p-5">
                {/* Flexbox container for the weather information */}
                <div className="flex items-center h-30 justify-start">
                  {/* Pressure label and value */}
                  <label className="mr-2 text-gray-700">Pressure:</label>
                  <label className="text-gray-900">{item.main.pressure}</label>
                </div>
                <div className="flex items-center h-30 justify-start">
                  {/* Humidity label and value */}
                  <label className="mr-2 text-gray-700">Humidity:</label>
                  <label className="text-gray-900">{item.main.humidity}</label>
                </div>
                <div className="flex items-center h-30 justify-start">
                  {/* Clouds label and value */}
                  <label className="mr-2 text-gray-700">Clouds:</label>
                  <label className="text-gray-900">{item.clouds.all}%</label>
                </div>
                <div className="flex items-center h-30 justify-start">
                  {/* Wind speed label and value */}
                  <label className="mr-2 text-gray-700">Wind speed:</label>
                  <label className="text-gray-900">{item.wind.speed} m/s</label>
                </div>
                <div className="flex items-center h-30 justify-start">
                  {/* Sea level label and value */}
                  <label className="mr-2 text-gray-700">Sea level:</label>
                  <label className="text-gray-900">
                    {item.main.sea_level}m
                  </label>
                </div>
                <div className="flex items-center h-30 justify-start">
                  {/* Feels like label and value */}
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
