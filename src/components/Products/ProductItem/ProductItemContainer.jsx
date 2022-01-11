import React from "react";
import { useDispatch } from "react-redux";
import ProductItem from "./ProductItem";
import { addProductToCart } from "../../../store/cart/cart-async-actions";

const ProductItemContainer = function ({ item }) {
  const dispatch = useDispatch();
  const addProduct = (productItem, quantity) => {
    dispatch(addProductToCart(productItem, quantity));
  };
  return <ProductItem item={item} addProductToCart={addProduct} />;
};
export default ProductItemContainer;
