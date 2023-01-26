import Forecast from "./Forecast";
import Search from "./Search";
import Weather from "./Weather";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="h-screen bg-slate-500 flex justify-center font-inter p-10 bg-background">
      <div className="w-2/5 min-w-min bg-slate-600 p-5 rounded-md shadow-md opacity-80">
        <Search onSearchChange={handleOnSearchChange} />
        <Weather />
        <Forecast />
      </div>
    </div>
  );
}

export default App;
