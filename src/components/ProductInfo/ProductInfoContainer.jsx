import React, { useEffect } from "react";
import { useParams } from "react-router";
import productApi from "../../api/product-api";
import { useProducts } from "../../context/products/products-context";
import ProductInfo from "./ProductInfo";
import { actions } from "../../context/products/productsReducer";
import { useCart } from "../../context/cart/cart-context";
import Preloader from "../../common/preloader/Preloader";

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
