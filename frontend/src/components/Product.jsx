import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
// import Rating from "./Rating";

function Product(props, index) {
  const { product } = props;
  return (
    <div
      key={index}
      className="border shadow-2xl rounded-lg hover:scale-105 duration-300"
    >
      <Link to={`/product/${product.slug}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[200px] object-cover rounded-t-lg"
        />
      </Link>
      <div className="flex justify-between px-2 py-4">
        <Link to={`/product/${product.slug}`}>
          <p className="font-bold mr-1">{product.name}</p>
        </Link>
        <div>
          <div className="flex gap-1">
            <span className="bg-orange-500 text-white p-1 rounded-full ">
              ${product.price}
            </span>
            <div className="bg-orange-500 text-white p-2 rounded-full text-xs text-center pt-2">
              <BsFillCartFill />
            </div>
            {/* <Rating rating={product.rating} numReviews={product.numReviews} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
