import React from "react";

const CountryDropdown = () => {
  return (
    <div>
      <label>Select a Country:</label>
      <select>
        <option value="sweden">Sweden</option>
        <option value="norway">Norway</option>
        <option value="india">India</option>
        <option value="us">United States</option>
      </select>
    </div>
  );
};

export default CountryDropdown;
