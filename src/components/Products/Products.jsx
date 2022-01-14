import React from "react";
import * as PropTypes from "prop-types";
import ProductItemContainer from "./ProductItem/ProductItemContainer";
import { productItem, productItemDefault } from "../../utils/constants";

const Products = function ({ products }) {
  return (
    <div>
      {products.map((item) => (
        <ProductItemContainer key={item.id} item={item} />
      ))}
    </div>
  );
};
const ProductPropType = PropTypes.shape(productItem);
Products.propTypes = {
  products: PropTypes.arrayOf(ProductPropType),
};
Products.defaultProps = {
  products: [productItemDefault],
};

export default Products;
