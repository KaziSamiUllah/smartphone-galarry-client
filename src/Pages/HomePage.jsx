import { useEffect, useState } from "react";
import Categories from "../Components/Categories";
import Filters from "../Components/Sorting";
import Products from "../Components/Products";
import Searchbar from "../Components/Searchbar";
import Sorting from "../Components/Sorting";

const HomePage = () => {
  const [phones, setPhones] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  useEffect(() => {
    const fetchPhones = () => {
      let url = `http://localhost:5000/phones?search=${search}&page=${page}&limit=10&sortBy=${sortBy}`;

      if (selectedBrand) {
        url += `&brand=${selectedBrand}`;
      }

      if (selectedType) {
        url += `&type=${selectedType}`;
      }

      if (selectedPrice) {
        url += `&price=${selectedPrice}`;
      }

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          let sortedPhones = [...data.phones];

          if (sortBy === "PriceToHigh") {
            sortedPhones.sort((a, b) => b.Price - a.Price);
          } else if (sortBy === "PriceToLow") {
            sortedPhones.sort((a, b) => a.Price - b.Price);
          } else if (sortBy === "Newest") {
            sortedPhones.sort((a, b) => a.CreationDate - b.CreationDate);
          }

          setPhones(sortedPhones);
          setTotalPages(Math.ceil(data.total / 10));
        });
    };

    fetchPhones();
  }, [sortBy, search, page, selectedBrand, selectedType, selectedPrice]);

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
    setPage(1); // Reset to first page when a new search is performed
  };

  return (
    <div>
      <div className="mx-16 my-10">
        <div className="grid grid-cols-2">
          <Searchbar handleSearch={handleSearch} />
          <Sorting setSortBy={setSortBy} sortBy={sortBy} />
        </div>
        <div>
          <Categories
            phones={phones}
            setSelectedBrand={setSelectedBrand}
            setSelectedType={setSelectedType}
            setSelectedPrice={setSelectedPrice}
            selectedBrand={selectedBrand}
            selectedType={selectedType}
            selectedPrice={selectedPrice}
          />
        </div>
        <div>
          <Products phones={phones} />
        </div>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setPage(index + 1)}
              className={index + 1 === page ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
