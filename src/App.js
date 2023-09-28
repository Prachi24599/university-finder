import CountryDropdown from "./components/CountryDropdown";
import UniversityList from "./components/UniversityList";
import Pagination from "./components/Pagination";

function App() {
  return (
    <div className="App">
      <h1>University Finder</h1>
      <CountryDropdown
        countries={["Sweden", "Norway", "India", "United States"]}
      />
      <UniversityList />
      <Pagination />
    </div>
  );
}

export default App;
