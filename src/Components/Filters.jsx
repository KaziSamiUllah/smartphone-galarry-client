import { useState } from "react";
import { FaFilter } from "react-icons/fa";

const Filters = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex justify-end  items-center">
      <label htmlFor="filter-select" className="btn m-1"><FaFilter />
      </label>
      <select
        id="filter-select"
        className="select bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        value={selectedOption}
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

export default Filters;
