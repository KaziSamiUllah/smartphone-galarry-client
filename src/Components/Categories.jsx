import { useEffect, useState } from "react";

const Categories = ({phones}) => {
  // State for selected buttons
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  console.log(selectedBrand, selectedPrice, selectedType);

  // Function to handle button selection
  const handleSelection = (category, value) => {
    switch (category) {
      case "brand":
        setSelectedBrand(value);
        break;
      case "type":
        setSelectedType(value);
        break;
      case "price":
        setSelectedPrice(value);
        break;
      default:
        break;
    }
  };


  const brands = [
    "Brand 1",
    "Brand 2",
    "Brand 3",
    "Brand 4",
    "Brand 5",
    "Brand 6",
    "Brand 7",
  ];
  const types = [
    "Type 1",
    "Type 2",
    "Type 3",
    "Type 4",
    "Type 5",
    "Type 6",
    "Type 7",
  ];

  const priceRange = [
    "10,000 - 15,000",
    "15,000 - 20,000",
    "20,000 - 25,000",
    "25,000 - 30,000",
    "30,000 - 35,000",
    "35,000 - 40,000",
    "40,000 - 45,000",
  ]

  return (
    <div>
      <h1 className="text-3xl mb-5">Categories</h1>
      <div>
        <h1 className="text-xl font-bold mt-5 mb-2">Select brand</h1>
        <div className="flex gap-5">
          {brands.map((brand, index) => (
            <button
              key={index}
              className={`btn btn-outline ${
                selectedBrand === brand
                  ? "bg-blue-500 text-white"
                  : "bg-blue-50"
              }`}
              onClick={() => handleSelection("brand", brand)}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-xl font-bold mt-5 mb-2 ">Phone Type</h1>
        <div className="flex gap-5">
          {types.map((type, index) => (
            <button
              key={index}
              className={`btn btn-outline ${
                selectedType === type ? "bg-blue-500 text-white" : "bg-blue-50"
              }`}
              onClick={() => handleSelection("type", type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-xl font-bold mt-5 mb-2">Price Range</h1>
        <div className="flex gap-5">
          {priceRange.map((price, index) => (
            <button
              key={index}
              className={`btn btn-outline ${
                selectedPrice === price
                  ? "bg-blue-500 text-white"
                  : "bg-blue-50"
              }`}
              onClick={() => handleSelection("price", price)}
            >
              {price}
            </button>
          ))}
        </div>
      </div>
      <button className="btn my-5 w-1/5">Search</button>
    </div>
  );
};

export default Categories;
