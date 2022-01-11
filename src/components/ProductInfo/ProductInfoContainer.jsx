import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import ProductInfo from "./ProductInfo";
import Preloader from "../../ui-kit/Preloader/Preloader";
import { setProduct } from "../../store/products/products-actions";
import ProductsSelectors from "../../store/products/products-selectors";
import { getProduct } from "../../store/products/products-async-actions";
import { addProductToCart } from "../../store/cart/cart-async-actions";

const ProductInfoContainer = function () {
  const { isFetching, product, error } = ProductsSelectors();
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
      {error && new Error(error.message)}
      {isFetching ? (
        <Preloader />
      ) : (
        <ProductInfo product={product} addProductToCart={addProduct} />
      )}
    </div>
  );
};
export default ProductInfoContainer;
