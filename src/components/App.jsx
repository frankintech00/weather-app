import Forecast from "./Forecast";
import Search from "./Search";
import Weather from "./Weather";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="h-screen font-inter bg-background p-5">
      <div className="w-1/2 bg-cyan-900 rounded-md shadow-md opacity-80 flex flex-wrap align-content-space-between align-items-center justify-content-center flex-col p-5 mx-auto">
        <h1 className="font-semibold text-6xl text-white text-center p-5">
          Weather App
        </h1>
        <Search onSearchChange={handleOnSearchChange} />
        <Weather />
        <Forecast />
      </div>
    </div>
  );
}

export default App;
