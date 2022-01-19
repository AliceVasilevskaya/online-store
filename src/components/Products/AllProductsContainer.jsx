import React from "react";
import { useDispatch } from "react-redux";
import ProductsContainer from "./ProductsContainer";
import { addProductToCart } from "../../store/cart/cart-async-actions";

const AllProductsContainer = function () {
  const dispatch = useDispatch();
  const addProductToMyCart = ({ product, quantity }) => {
    dispatch(addProductToCart(product, quantity));
  };

  return (
    <ProductsContainer
      onProductItemButtonClick={addProductToMyCart}
      isEditable={false}
      productItemButtonName="add product to cart"
    />
  );
};
export default AllProductsContainer;
