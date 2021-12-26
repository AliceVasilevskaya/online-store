import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "./Products";
import Preloader from "../../ui-kit/Preloader/Preloader";

import {
  getCurrentPage,
  getIsFetching,
  getPageSize,
  getPortionNumber,
  getProducts,
  getTotalItems,
} from "../../context/products/products-selectors";
import { actions, getItems } from "../../context/products/products-reducer";
import Paginator from "../../ui-kit/Paginator/Paginator";
import ShowPerPage from "../../ui-kit/ShowPerPage/ShowPerPage";

const ProductsContainer = function () {
  const totalItems = useSelector(getTotalItems);
  const perPage = useSelector(getPageSize);
  const page = useSelector(getCurrentPage);
  const dispatch = useDispatch();
  const items = useSelector(getProducts);
  const isFetching = useSelector(getIsFetching);
  const portionNumber = useSelector(getPortionNumber);
  useEffect(() => {
    dispatch(getItems(page, perPage));
  }, []);

  const onPageClick = (currentPage, number) => {
    number && dispatch(actions.setPortionNumber(number));
    dispatch(getItems(currentPage, perPage));
  };
  const handleChange = (event) => {
    dispatch(getItems(page, event.target.value));
  };
  return (
    <div>
      {isFetching ? (
        <Preloader />
      ) : (
        <div>
          <Paginator
            portionNumber={portionNumber}
            onPageClick={onPageClick}
            totalItems={totalItems}
            perPage={perPage}
            currentPage={page}
          />
          <ShowPerPage perPage={perPage} handleChange={handleChange} />
          <Products products={items} />
        </div>
      )}
    </div>
  );
};
export default ProductsContainer;
