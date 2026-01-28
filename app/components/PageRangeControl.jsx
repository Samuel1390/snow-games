"use client";
import React, { useState } from "react";
import FilterContext from "./context/filterContext";
import { useContext } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
const PageRangeControl = () => {
  const { setPageRange, pageRange } = useContext(FilterContext);
  const [currentPage, setCurrentPage] = useState(1);

  const handleRange = (number) => {
    setCurrentPage((prev) => (number > 0 ? prev + 1 : prev - 1));
    const currentFrom = pageRange.from + number;
    const currenTo = pageRange.to + number;
    setPageRange({ from: currentFrom, to: currenTo });
  };
  return (
    <div className="flex w-full flex-col justify-center">
      <h2 className="text-center text-xl text-amber-300">Pages</h2>
      <div className="w-full my-10 justify-center range-buttons flex items-center gap-4">
        <button
          className="rounded-full hover:bg-gray-900 transition-colors p-2"
          onClick={() => handleRange(-50)}
        >
          <ArrowLeftIcon className="icon" />
        </button>
        {currentPage > 1 && (
          <span className="size-8 text-center border rounded text-neutral-600 p-1 border-neutral-500">
            {currentPage - 1}
          </span>
        )}
        <span className="rounded border size-10 grid place-content-center border-amber-300 text-xl text-amber-300">
          {currentPage}
        </span>
        <span className="size-8 text-center border rounded text-neutral-600 p-1 border-neutral-500">
          {currentPage + 1}
        </span>
        <button
          className="rounded-full hover:bg-gray-900 transition-colors p-2"
          onClick={() => handleRange(50)}
        >
          <ArrowRightIcon className="icon" />
        </button>
      </div>
    </div>
  );
};

export default PageRangeControl;
