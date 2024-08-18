import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Searchbar = ({ handleSearch }) => {
  const [input, setInput] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch(input);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex gap-4 items-center">
        <input
          className="bg-gray-200 p-5 rounded-full w-96"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for phones..."
        />
        <button className="-translate-x-14  text-3xl" type="submit">
          <FaSearch />
        </button>
      </div>
    </form>
  );
};

export default Searchbar;
