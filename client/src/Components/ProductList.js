import React from "react";
import Product from "./Product";

const ProductList = ({products}) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return(
          <Product {...product} key={product._id} />
        )
      })}
    </div>
  )
};

export default ProductList;