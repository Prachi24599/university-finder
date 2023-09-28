import { useEffect, useState } from "react";
import CountryDropdown from "./components/CountryDropdown";
import UniversityList from "./components/UniversityList";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("Sweden");
  const [universities, setUniversities] = useState([]);

  const fetchUniversities = async (country) => {
    try {
      const response = await fetch(
        `http://universities.hipolabs.com/search?country=${country}`
      );
      const data = await response.json();
      console.log(data);
      setUniversities(data);
    } catch (error) {
      console.error("Error fetching universities:", error);
    }
  };

  useEffect(() => {
    fetchUniversities(selectedCountry);
  }, [selectedCountry]);

  return (
    <div className="App">
      <h1>University Finder</h1>
      <CountryDropdown
        countries={["Sweden", "Norway", "India", "United States"]}
        setSelectedCountry={setSelectedCountry}
      />
      <UniversityList universities={universities} />
    </div>
  );
}

export default App;
