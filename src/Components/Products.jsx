import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [phones, setPhones] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/phones")
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, []);

  console.log(phones);
  return (
    <div className="grid grid-cols-4 gap-10">
      {phones?.map((phone, idx) => (
        <ProductCard key={idx} phone={phone}></ProductCard>
      ))}
      <ProductCard></ProductCard>
    </div>
  );
};

export default Products;
