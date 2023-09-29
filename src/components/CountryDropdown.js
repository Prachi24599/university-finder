import React, { useContext } from "react";
import { UniversityContext } from "../context/UniversityContext";

const CountryDropdown = ({ countries }) => {
  // Get country-dropdown related state or functions from the context
  const { setSelectedCountry } = useContext(UniversityContext);

  return (
    <div className="mb-4">
      <label
        htmlFor="country-select"
        className="block text-sm font-medium text-gray-700"
      >
        Select a Country:
      </label>
      <select
        id="country-select"
        onChange={(e) => setSelectedCountry(e.target.value)}
        className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" // Highlight the current page
      >
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryDropdown;
