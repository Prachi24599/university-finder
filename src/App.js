import CountryDropdown from "./components/CountryDropdown";
import UniversityList from "./components/UniversityList";
import Pagination from "./components/Pagination";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-4 w-3/5 mx-auto">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-4">
          University Finder
        </h1>
        <CountryDropdown
          countries={["Sweden", "Norway", "India", "United States"]}
        />
        <UniversityList />
        <Pagination />
      </div>
    </div>
  );
}

export default App;
