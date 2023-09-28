import React, { useState } from "react";

const UniversityList = ({ universities }) => {
  return (
    <div>
      {universities.map((uni, index) => (
        <div key={index}>
          <p>
            <strong>Name:</strong> {uni.name}
          </p>
          {uni["state-province"] && (
            <p>
              <strong>State:</strong> {uni["state-province"]}
            </p>
          )}
          <p>
            <strong>Country:</strong> {uni.country}
          </p>
          <p>
            <strong>Link:</strong>
            <a href={uni.web_pages[0]} target="_blank">
              {uni.name} Website
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default UniversityList;
