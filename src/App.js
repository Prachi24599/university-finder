import { useEffect, useState } from "react";
import CountryDropdown from "./components/CountryDropdown";
import UniversityList from "./components/UniversityList";
import Pagination from "./components/Pagination";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("Sweden");
  const [universities, setUniversities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(20);
  const [totalPages, setTotalPages] = useState(1);

  const fetchUniversities = async (country) => {
    try {
      const response = await fetch(
        `http://universities.hipolabs.com/search?country=${country}`
      );
      const data = await response.json();
      console.log(data);
      setUniversities(data);
      setTotalPages(Math.ceil(data.length / perPage));
    } catch (error) {
      console.error("Error fetching universities:", error);
    }
  };

  useEffect(() => {
    fetchUniversities(selectedCountry);
  }, [selectedCountry]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

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
