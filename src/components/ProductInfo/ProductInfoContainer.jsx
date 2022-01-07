import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import ProductInfo from "./ProductInfo";
import Preloader from "../../ui-kit/Preloader/Preloader";
import {
  getIsFetching,
  getProductSelector,
} from "../../store/products/products-selectors";
import { addProductToCart } from "../../store/cart/cart-slice";
import { setProduct } from "../../store/products/products-actions";
import { getProduct } from "../../store/products/products-slice";

const ProductInfoContainer = function () {
  const isFetching = useSelector(getIsFetching);
  const product = useSelector(getProductSelector);
  const dispatch = useDispatch();
  const params = useParams();
  const { productId } = params;

  useEffect(() => {
    dispatch(getProduct({ productId }));
    return () => {
      dispatch(setProduct({}));
    };
  }, []);
  const addProduct = (productItem, quantity) => {
    dispatch(addProductToCart(productItem, quantity));
  };
  return (
    <div>
      {isFetching ? (
        <Preloader />
      ) : (
        <ProductInfo product={product} addProductToCart={addProduct} />
      )}
    </div>
  );
};
export default ProductInfoContainer;
