import React, { useContext, useState } from "react";
import { UniversityContext } from "../context/UniversityContext";

const UniversityList = () => {
  const { universities, currentPage, perPage } = useContext(UniversityContext);

  // Calculate the range of universities to display on the current page
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const universitiesToShow = universities.slice(startIndex, endIndex);

  return (
    <div>
      {universitiesToShow.map((uni, index) => (
        <div key={index} className="bg-white p-4 mb-4 rounded-md shadow-md">
          <p className="text-lg font-semibold mb-2">
            <strong>Name:</strong> {uni.name}
          </p>
          {uni["state-province"] && (
            <p>
              <strong>State : </strong> {uni["state-province"]}
            </p>
          )}
          <p>
            <strong>Country : </strong> {uni.country}
          </p>
          <p>
            <strong>Link : </strong>
            <a
              href={uni.web_pages[0]}
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              {uni.name} Website
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default UniversityList;
