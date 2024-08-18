import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = ({phones}) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {phones?.map((phone, idx) => (
        <ProductCard key={idx} phone={phone}></ProductCard>
      ))}
    
    </div>
  );
};

export default Products;
