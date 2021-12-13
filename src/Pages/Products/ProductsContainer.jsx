import React, { useEffect } from "react";
import { actions } from "./productsReducer";
import productsApi from "./products-api";
import { useProducts } from "./products-context";
import Products from "./Products";
import Preloader from "../Preloader/Preloader";

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
