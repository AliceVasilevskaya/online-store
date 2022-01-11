import React from "react";
import { useDispatch } from "react-redux";
import * as PropTypes from "prop-types";
import ProductItem from "./ProductItem";
import { addProductToCart } from "../../../store/cart/cart-async-actions";

const ProductItemContainer = function ({ item }) {
  const dispatch = useDispatch();
  const addProduct = (productItem, quantity) => {
    dispatch(addProductToCart(productItem, quantity));
  };
  return <ProductItem item={item} addProductToCart={addProduct} />;
};
ProductItemContainer.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    origin: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
  }),
};
ProductItemContainer.defaultProps = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    origin: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
  }),
};
export default ProductItemContainer;
