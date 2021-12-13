import React, { useEffect } from "react";
import { useParams } from "react-router";
import productApi from "./product-api";
import { useProducts } from "../Products/products-context";
import ProductInfo from "./ProductInfo";
import { actions } from "../Products/productsReducer";
import { useCart } from "../CartList/cart-context";
import Preloader from "../Preloader/Preloader";

const ProductInfoContainer = function () {
  const {
    state: { product, isFetching },
    dispatch,
  } = useProducts();
  const {
    state: { addProductToCart },
  } = useCart();
  const params = useParams();
  const { productId } = params;

  useEffect(() => {
    (async function () {
      try {
        dispatch(actions.toggleIsFetching(true));
        const data = await productApi.getProductItem(productId);
        dispatch(actions.setProduct(data));
      } catch (error) {
        throw new Error(error);
      } finally {
        dispatch(actions.toggleIsFetching(false));
      }
    })();
    return () => {
      dispatch(actions.setProduct({}));
    };
  }, []);

  return (
    <div>
      {isFetching ? (
        <Preloader />
      ) : (
        <ProductInfo product={product} addProductToCart={addProductToCart} />
      )}
    </div>
  );
};
export default ProductInfoContainer;
