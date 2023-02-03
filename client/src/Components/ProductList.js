import React from "react";
import Product from "./Product";

const ProductList = ({ products, onDelete, onUpdate, onAddToCart }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return (
          <Product
            {...product}
            key={product._id}
            onDelete={onDelete}
            onUpdate={onUpdate}
            onAddToCart={onAddToCart}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
