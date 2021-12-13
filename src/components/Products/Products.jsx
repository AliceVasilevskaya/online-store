import React from "react";
import ProductItemContainer from "./ProductItem/ProductItemContainer";
import Preloader from "../../common/preloader/Preloader";

const Products = function ({ products }) {
  return (
    <div>
      {!products[0] ? <Preloader /> : null}
      {products.map((item) => (
        <ProductItemContainer key={item.id} item={item} />
      ))}
    </div>
  );
};
export default Products;