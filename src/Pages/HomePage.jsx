import { useEffect, useState } from "react";
import Categories from "../Components/Categories";
import Filters from "../Components/Sorting";
import Products from "../Components/Products";
import Searchbar from "../Components/Searchbar";
import Sorting from "../Components/Sorting";

const HomePage = () => {
  const [phones, setPhones] = useState();
  const [sortBy, setSortBy] = useState("");
  console.log(sortBy);

  useEffect(() => {
    fetch("http://localhost:5000/phones")
      .then((res) => res.json())
      .then((data) => {
        let sortedPhones = [...data];

        if (sortBy === "PriceToHigh") {
          sortedPhones.sort((a, b) => b.Price - a.Price);
        } else if (sortBy === "PriceToLow") {
          sortedPhones.sort((a, b) => a.Price - b.Price);
        }
        else if (sortBy === "Newest") {
            sortedPhones.sort((a, b) => a.CreationDate - b.CreationDate);
          }

        setPhones(sortedPhones);
      });
  }, [sortBy])

  return (
    <div>
      <div className="mx-16 my-10">
        <div className="grid grid-cols-2">
          <Searchbar></Searchbar>
          <Sorting setSortBy={setSortBy} sortby={sortBy}></Sorting>
        </div>
        <div>
          <Categories phones={phones}></Categories>
        </div>
        <div>
          <Products phones={phones}></Products>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
