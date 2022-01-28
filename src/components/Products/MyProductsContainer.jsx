import React from "react";
import { useDispatch } from "react-redux";
import ProductsContainer from "./ProductsContainer";
import { setOpen, setValues } from "../../store/products/products-slice";
import { deleteProduct } from "../../store/products/products-async-actions";

const MyProductsContainer = function () {
  const dispatch = useDispatch();

  const onEditProductClick = ({ val }) => {
    dispatch(setOpen([true, false]));
    dispatch(setValues(val));
  };
  const onDeleteClick = ({ id }) => {
    dispatch(deleteProduct({ id }));
  };
  return (
    <ProductsContainer
      isEditable
      productItemButtonName="edit product"
      onDeleteClick={onDeleteClick}
      onProductItemButtonClick={onEditProductClick}
    />
  );
};
export default MyProductsContainer;
