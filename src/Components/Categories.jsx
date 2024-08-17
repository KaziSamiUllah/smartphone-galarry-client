// import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";

const Categories = ({
  setSelectedBrand,
  setSelectedType,
  setSelectedPrice,
  selectedBrand,
  selectedType,
  selectedPrice,
}) => {
  const [phonesData, setPhonesData] = useState([]);

  useEffect(() => {
    axios
      .get("https://search-and-sort-server.vercel.app/category")
      .then((res) => {
        setPhonesData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching phones data:", error);
      });
  }, []);

  const brandNames = [...new Set(phonesData?.map((phone) => phone.Brand))];
  const deviceType = [...new Set(phonesData?.map((phone) => phone.Category))];

  const priceRange = [
    "0 - 49.99",
    "50 - 99.99",
    "100 - 149.99",
    "150 - 199.99",
    "200 - 299.99",
    "300 - 399.99",
    "400 - 499.99",
    "500 - 599.99",
    "600 - 699.99",
    "700 - 799.99",
    "800 - 899.99",
    "900 - 999.99",
    "1000 - 1199.99",
    "1200 - 1399.99",
    "1400 - 1500",
  ];

  return (
    <div>
      <h1 className="text-3xl mb-5">Categories</h1>
      <div>
        <h1 className="text-xl font-bold mt-5 mb-2">Select brand</h1>
        <div className="flex-wrap space-x-2 space-y-3">
          {brandNames.map((brand, index) => (
  

            <button
              key={index}
              className={`btn btn-outline ${
                selectedBrand === brand ? "bg-blue-500 text-white" : "bg-blue-50"
              }`}
              onClick={() => setSelectedBrand(brand)}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-xl font-bold mt-5 mb-2 ">Phone Type</h1>
        <div className="flex-wrap space-x-2 space-y-3">
          {deviceType.map((type, index) => (
            // <button
            //   key={index}
            //   className="btn btn-outline"
            //   onClick={() => setSelectedType(type)}
            // >
            //   {type}
            // </button>

            <button
              key={index}
              className={`btn btn-outline ${
                selectedType === type ? "bg-blue-500 text-white" : "bg-blue-50"
              }`}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-xl font-bold mt-5 mb-2">Price Range</h1>
        <div className="flex-wrap space-x-2 space-y-3">
          {priceRange.map((price, index) => (
            // <button
            //   key={index}
            //   className="btn btn-outline"
            //   onClick={() => setSelectedPrice(price)}
            // >
            //   {price}
            // </button>
            <button
            key={index}
            className={`btn btn-outline ${
              selectedPrice === price ? "bg-blue-500 text-white" : "bg-blue-50"
            }`}
            onClick={() => setSelectedPrice(price)}
          >
            {price}
          </button>






          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
