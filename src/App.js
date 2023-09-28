import { useEffect, useState } from "react";
import CountryDropdown from "./components/CountryDropdown";
import UniversityList from "./components/UniversityList";
import Pagination from "./components/Pagination";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("Sweden");
  const [universities, setUniversities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchUniversities = async (country) => {
    try {
      const response = await fetch(
        `http://universities.hipolabs.com/search?country=${country}`
      );
      const data = await response.json();
      console.log(data);
      setUniversities(data);
      setTotalPages(Math.ceil(data.length / 20));
    } catch (error) {
      console.error("Error fetching universities:", error);
    }
  };

  useEffect(() => {
    fetchUniversities(selectedCountry);
  }, [selectedCountry, currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="App">
      <h1>University Finder</h1>
      <CountryDropdown
        countries={["Sweden", "Norway", "India", "United States"]}
        setSelectedCountry={setSelectedCountry}
      />
      <UniversityList universities={universities} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
