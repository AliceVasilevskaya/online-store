import React from "react";
import * as PropTypes from "prop-types";
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
Products.propTypes = {
  products: PropTypes.instanceOf(Array),
};
Products.defaultProps = {
  products: PropTypes.instanceOf(Array),
};

export default Products;
