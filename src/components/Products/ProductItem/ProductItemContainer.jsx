import React from "react";
import ProductItem from "./ProductItem";
import { useCart } from "../../../context/cart/cart-context";

const ProductItemContainer = function ({ item }) {
  const { addProductToCart } = useCart();
  return <ProductItem item={item} addProductToCart={addProductToCart} />;
};
export default ProductItemContainer;
