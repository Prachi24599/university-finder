import { useEffect, useState } from "react";
import CountryDropdown from "./components/CountryDropdown";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("Sweden");

  const fetchUniversities = async (country) => {
    try {
      const response = await fetch(
        `http://universities.hipolabs.com/search?country=${country}`
      );
      const data = await response.json();
      console.log(data);
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
    </div>
  );
}

export default App;
