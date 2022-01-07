import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Products.module.css";
import Products from "./Products";
import Preloader from "../../ui-kit/Preloader/Preloader";
import {
  getCurrentPage,
  getIsFetching,
  getPageSize,
  getPortionNumber,
  getProducts,
  getTotalItems,
} from "../../store/products/products-selectors";
import Paginator from "../../ui-kit/Paginator/Paginator";
import ShowPerPage from "../../ui-kit/ShowPerPage/ShowPerPage";
import {
  getItems,
  getProductsOrigins,
} from "../../store/products/products-slice";
import ProductsFiltersContainer from "./ProductsFilters/ProductsFiltersContainer";
import { setPortionNumber } from "../../store/products/products-actions";

const ProductsContainer = function () {
  const totalItems = useSelector(getTotalItems);
  const perPage = useSelector(getPageSize);
  const page = useSelector(getCurrentPage);
  const dispatch = useDispatch();
  const items = useSelector(getProducts);
  const isFetching = useSelector(getIsFetching);
  const portionNumber = useSelector(getPortionNumber);
  useEffect(() => {
    dispatch(getProductsOrigins());
    dispatch(getItems({ page: 1, perPage }));
  }, []);
  const onPageClick = (currentPage, number) => {
    number && dispatch(setPortionNumber(number));
    dispatch(getItems({ page: currentPage, perPage }));
  };
  const changePerPage = (event) => {
    onPageClick(1, 1);
    dispatch(getItems({ page: 1, perPage: event.target.value }));
  };
  return (
    <div>
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
