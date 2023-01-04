import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Rating from "../components/Rating";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductScreen() {
  const params = useParams();
  const { slug } = params;
  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, [slug]);

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="grid md:grid-cols-2 px-4 mt-10 sm:grid-cols-1 gap-10">
      <div>
        <img
          className="max-w-full and h-auto"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="grid grid-cols-2">
        <div className="px-3 ">
          <div className="text-2xl font-bold border-b-2 border-orange-500">
            {" "}
            {product.name}
          </div>
          <div className="border-b-2 border-orange-500">
            <Rating rating={product.rating} numReviews={product.numReviews} />
          </div>
          <div className="border-b-2 border-orange-500">
            Price: ${product.price}
          </div>
          <div className="border-b-2 border-orange-500">
            Description : {product.description}
          </div>
        </div>
        <div className="px-10 mt-4 ">
          <div>Price: ${product.price}</div>
          <div>status: {product.countInStock}</div>
          <button className="bg-orange-500 border-none text-white text-l py-2 px-4 mt-5 ">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductScreen;
