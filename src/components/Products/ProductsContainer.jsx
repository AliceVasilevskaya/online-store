import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./Products.module.css";
import Products from "./Products";
import Preloader from "../../ui-kit/Preloader/Preloader";

import Paginator from "../../ui-kit/Paginator/Paginator";
import ShowPerPage from "../../ui-kit/ShowPerPage/ShowPerPage";
import ProductsFiltersContainer from "./ProductsFilters/ProductsFiltersContainer";
import { setPortionNumber } from "../../store/products/products-actions";
import ProductsSelectors from "../../store/products/products-selectors";
import {
  getItems,
  getProductsOrigins,
} from "../../store/products/products-async-actions";

const ProductsContainer = function () {
  const { totalItems, perPage, page, items, isFetching, portionNumber, error } =
    ProductsSelectors();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsOrigins());
    dispatch(getItems({ page: 1, perPage }));
  }, []);
  const onPageClick = (currentPage, number) => {
    if (number) {
      dispatch(setPortionNumber(number));
    }
    dispatch(getItems({ page: currentPage, perPage }));
  };
  const changePerPage = (event) => {
    onPageClick(1, 1);
    dispatch(getItems({ page: 1, perPage: event.target.value }));
  };
  return (
    <div>
      {error && new Error(error.message)}
      {isFetching ? (
        <Preloader />
      ) : (
        <div className={styles.productsContainer}>
          <div className={styles.filterContainer}>
            <ProductsFiltersContainer onPageClick={onPageClick} />
          </div>
          <div className={styles.products}>
            <Paginator
              portionNumber={portionNumber}
              onPageClick={onPageClick}
              totalItems={totalItems}
              perPage={perPage}
              currentPage={page}
            />
            <ShowPerPage perPage={perPage} changePerPage={changePerPage} />
            <Products products={items} />
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductsContainer;
