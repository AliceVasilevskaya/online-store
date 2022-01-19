import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import Header from "./Header";
import CartSelectors from "../../store/cart/cart-selectors";
import { setOpen } from "../../store/products/products-slice";
import ModalFormContainer from "../Products/ProductForm/ModalFormContainer";
import { getProductsOrigins } from "../../store/products/products-async-actions";

const HeaderContainer = function () {
  const { totalPrice } = CartSelectors();
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(getProductsOrigins());
  }, []);
  const onAddProductClick = () => {
    dispatch(setOpen([false, true]));
  };
  return (
    <div>
      <Header
        totalPrice={totalPrice}
        pathname={params.pathname}
        onAddProductClick={onAddProductClick}
      />
      <ModalFormContainer />
    </div>
  );
};

export default HeaderContainer;
