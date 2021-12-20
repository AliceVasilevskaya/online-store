import React from "react";
import ProductItemContainer from "./ProductItem/ProductItemContainer";

const Products = function ({ products }) {
  return (
    <div>
      {products.map((item) => (
        <ProductItemContainer key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Products;
