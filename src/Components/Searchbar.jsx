import { useState } from "react";

const Searchbar = ({ handleSearch }) => {
  const [input, setInput] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch(input);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for phones..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Searchbar;