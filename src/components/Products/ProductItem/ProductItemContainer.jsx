import React from "react";
import ProductItem from "./ProductItem";
import {useCart} from "../../../context/cart/cart-context";

const ProductItemContainer = function ({ item }) {
    const {state} = useCart()
    return (
      <ProductItem item = {item} addProductToCart = {state.addProductToCart}/>
    );
};
export default ProductItemContainer;