import React from "react";
import { useParams } from "react-router-dom";

function ProductScreen() {
  const params = useParams();
  const { slug } = params;
  return (
    <div>
      {" "}
      <h1 className="text-orange-600 font-bold text-4xl text-left px-4 mb-10">
        {slug}
      </h1>
    </div>
  );
}
export default ProductScreen;
