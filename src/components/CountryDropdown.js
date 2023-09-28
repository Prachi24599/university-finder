import React from "react";

const CountryDropdown = ({ countries, setSelectedCountry }) => {
  return (
    <div>
      <label htmlFor="country-select">Select a Country:</label>
      <select
        id="country-select"
        onChange={(e) => setSelectedCountry(e.target.value)}
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
