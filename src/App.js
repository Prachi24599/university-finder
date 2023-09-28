import { useEffect, useState } from "react";
import CountryDropdown from "./components/CountryDropdown";
import UniversityList from "./components/UniversityList";
import Pagination from "./components/Pagination";

function App() {
  // Calculate the range of universities to display on the current page
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const universitiesToShow = universities.slice(startIndex, endIndex);

  return (
    <div className="App">
      <h1>University Finder</h1>
      <CountryDropdown
        countries={["Sweden", "Norway", "India", "United States"]}
        setSelectedCountry={setSelectedCountry}
      />
      <UniversityList universities={universitiesToShow} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
