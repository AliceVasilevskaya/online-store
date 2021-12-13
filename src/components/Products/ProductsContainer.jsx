import React, { useEffect } from "react";
import { actions } from "../../context/products/productsReducer";
import productsApi from "../../api/products-api";
import { useProducts } from "../../context/products/products-context";
import Products from "./Products";
import Preloader from "../../common/preloader/Preloader";

const ProductsContainer = function () {
  const { state, dispatch } = useProducts();
  useEffect(() => {
    (async function () {
      try {
        dispatch(actions.toggleIsFetching(true));
        const data = await productsApi.getProductsList();
        dispatch(actions.setProducts(data.items));
      } catch (error) {
        throw new Error(error);
      } finally {
        dispatch(actions.toggleIsFetching(false));
      }
    })();
  }, []);

  return (
    <div>
      {state.isFetching ? (
        <Preloader />
      ) : (
        <Products products={state.products} />
      )}
    </div>
  );
};
export default ProductsContainer;
