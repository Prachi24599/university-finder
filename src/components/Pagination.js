import React, { useContext } from "react";
import { UniversityContext } from "../context/UniversityContext";

const Pagination = () => {
  const { currentPage, totalPages, handlePageChange } =
    useContext(UniversityContext);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="mr-2 px-4 py-2 bg-indigo-500 text-white rounded-md disabled:opacity-50"
      >
        Previous
      </button>
      <div className="page-numbers space-x-2">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            // className={currentPage === pageNumber ? "active" : ""}
            className={`px-3 py-2 mb-2 rounded-md focus:outline-none ${
              currentPage === pageNumber
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-600"
            }`}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="ml-2 px-4 py-2 bg-indigo-500 text-white rounded-md disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
