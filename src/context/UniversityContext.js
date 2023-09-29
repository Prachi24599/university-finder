import { createContext, useState, useEffect } from "react";

export const UniversityContext = createContext();

export default function UniversityProvider({ children }) {
  // Define state variables for the context
  const [selectedCountry, setSelectedCountry] = useState("Sweden");
  const [universities, setUniversities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(20);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch universities when the selected country changes
  useEffect(() => {
    // Function to fetch universities based on the selected country
    const fetchUniversities = async (country) => {
      try {
        const response = await fetch(
          `http://universities.hipolabs.com/search?country=${country}`
        );
        const data = await response.json();
        console.log(data);
        setUniversities(data);
        setTotalPages(Math.ceil(data.length / perPage));
        setCurrentPage(1);
      } catch (error) {
        console.error("Error fetching universities:", error);
        setUniversities([]);
        setCurrentPage(1);
      }
    };

    fetchUniversities(selectedCountry);
  }, [selectedCountry, perPage]);

  // Function to handle page changes
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Provide state variables and functions through the context
  const value = {
    selectedCountry,
    setSelectedCountry,
    universities,
    currentPage,
    perPage,
    totalPages,
    handlePageChange,
  };

  return (
    <UniversityContext.Provider value={value}>
      {children}
    </UniversityContext.Provider>
  );
}
