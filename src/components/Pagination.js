import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Pagination = ({ totalPages = 5, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (page) => {
    setCurrentPage(page);
    onPageChange && onPageChange(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handleClick(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handleClick(currentPage + 1);
    }
  };

  return (
    <div className="bg-white hidden rounded-full mx-auto py-2 px-3 border-[1px] border-[#DFDFDF] sm:flex items-center justify-between mt-20 sm:w-[500px]">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`page-arrows transition cursor-pointer flex w-[35px] h-[35px] items-center border-[1px] border-gray-400 rounded-[50%] justify-center ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-red-500"
        }`}
      >
        <FaAngleLeft className="text-gray-400" />
      </button>

      <ul className="flex items-center gap-5 text-[#B4B4B4]">
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;
          return (
            <li
              key={page}
              onClick={() => handleClick(page)}
              className={`w-8 h-8 rounded-full text-center flex items-center justify-center cursor-pointer ${
                currentPage === page
                  ? "bg-[#DA0025] text-white"
                  : "hover:bg-[#DA0025] hover:text-white"
              }`}
            >
              {page}
            </li>
          );
        })}
      </ul>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`page-arrows transition cursor-pointer flex w-[35px] h-[35px] items-center border-[1px] border-gray-400 rounded-[50%] justify-center ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-red-500"
        }`}
      >
        <FaAngleRight className="text-gray-400" />
      </button>
    </div>
  );
};

export default Pagination;
