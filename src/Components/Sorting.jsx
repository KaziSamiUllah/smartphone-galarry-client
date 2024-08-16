import { useState } from "react";
import { FaFilter } from "react-icons/fa";

const Sorting = ({setSortBy},{sortBy}) => {
  

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="flex justify-end  items-center">
      <label htmlFor="filter-select" className="btn m-1"><FaFilter />
      </label>
      <select
        id="filter-select"
        className="select bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        value={sortBy}
        onChange={handleChange}
      >
        <option value="" disabled>Select an option</option>
        <option value="PriceToHigh">Price - Low to High</option>
        <option value="PriceToLow">Price - Hight to Low</option>
        <option value="Newest">Newest First</option>
      </select>
    </div>
  );
};

export default Sorting;
