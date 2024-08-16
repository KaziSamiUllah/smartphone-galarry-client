import React from "react";
import { IoIosPricetags } from "react-icons/io";

const ProductCard = ({ phone }) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img className="aspect-[3/2] object-contain"
            src={phone?.ProductImage}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{phone?.ProductName}</h2>
          <p>{phone?.Description?.slice(0, 100)}...</p>
          <h1>Release date: {phone?.CreationDate}</h1>
          <div className="flex justify-between">
            <h1 className="flex justify-center items-center gap-2 text-xl">
              <IoIosPricetags className="text-green-500" />
              {phone?.Price}
            </h1>
            <h1>Rating: {phone?.Ratings}</h1>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-ghost text-xl font-bold underline">
              Oder now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
