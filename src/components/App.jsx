import Search from "./Search";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="h-screen bg-slate-500 flex justify-center items-center font-inter">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
