import React from "react";
import { useDispatch } from "react-redux";
import * as PropTypes from "prop-types";
import ProductItem from "./ProductItem";
import { addProductToCart } from "../../../store/cart/cart-async-actions";
import { productItem, productItemDefault } from "../../../utils/constants";

const ProductItemContainer = function ({ item }) {
  const dispatch = useDispatch();
  const addProduct = (product, quantity) => {
    dispatch(addProductToCart(product, quantity));
  };
  return <ProductItem item={item} addProductToCart={addProduct} />;
};
ProductItemContainer.propTypes = {
  item: PropTypes.shape(productItem),
};
ProductItemContainer.defaultProps = {
  item: productItemDefault,
};
export default ProductItemContainer;
