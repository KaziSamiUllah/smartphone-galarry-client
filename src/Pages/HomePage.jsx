import { useEffect, useState } from "react";
import Categories from "../Components/Categories";
import Filters from "../Components/Sorting";
import Products from "../Components/Products";
import Searchbar from "../Components/Searchbar";
import Sorting from "../Components/Sorting";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

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
      let url = `https://search-and-sort-server.vercel.app/phones?search=${search}&page=${page}&limit=10&sortBy=${sortBy}`;

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
      <NavBar></NavBar>
      <div className="mx-16 my-10">
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:justify-between">
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
        <div className="pagination text-3xl my-10 mx-5 space-x-5 text-center">
          <button
            onClick={() => setPage(page - 1)}
            className="bg-blue-200 rounded-lg p-2 w-40"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setPage(index + 1)}
              className={
                index + 1 === page
                  ? "font-bold text-4xl bg-blue-300 p-2 rounded-lg"
                  : ""
              }
            >
              {index + 1}
            </button>
          ))}
           <button
            onClick={() => setPage(page + 1)}
            className="bg-blue-200 rounded-lg p-2 w-40"
          >
            Next
          </button>
        </div>

        <div>
          <Products phones={phones} />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
