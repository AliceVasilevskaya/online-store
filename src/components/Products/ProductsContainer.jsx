import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { useHistory, useLocation } from "react-router";
import styles from "./Products.module.css";
import Paginator from "../../ui-kit/Paginator/Paginator";
import ShowPerPage from "../../ui-kit/ShowPerPage/ShowPerPage";
import ProductsFiltersContainer from "./ProductsFilters/ProductsFiltersContainer";
import ProductsSelectors from "../../store/products/products-selectors";
import { getItems } from "../../store/products/products-async-actions";
import Products from "./Products";
import {
  firstPage,
  maxFilterValue,
  minFilterValue,
} from "../../utils/constants";
import {
  setMaxPrice,
  setMinPrice,
  setSelectedOrigins,
} from "../../store/products/products-slice";
import {
  setCurrentPage,
  setIsEditable,
} from "../../store/products/products-actions";
import ROUTES from "../../routes/pathsOfRoutes";

const ProductsContainer = function ({
  isEditable,
  onDeleteClick,
  onProductItemButtonClick,
  productItemButtonName,
}) {
  const {
    totalItems,
    perPage,
    error,
    items,
    allOrigins,
    minPriceFromState,
    maxPriceFromState,
    selectedOrigins,
  } = ProductsSelectors();
  const dispatch = useDispatch();
  const history = useHistory();
  const pageFromUrl = new URLSearchParams(useLocation().search).get("page");
  let minPriceFromURL = new URLSearchParams(useLocation().search).get(
    "minPrice"
  );
  let maxPriceFromURL = new URLSearchParams(useLocation().search).get(
    "maxPrice"
  );
  let perPageFromURL = new URLSearchParams(useLocation().search).get("perPage");
  let selectedOriginsFromURL = new URLSearchParams(useLocation().search).get(
    "origins"
  );
  const selectedOriginsForURL = selectedOrigins.map((el) => el.value).join();

  const onPageClick = (pageNumber, min, max, origins, p) => {
    if (max) {
      minPriceFromURL = min;
      maxPriceFromURL = max;
      perPageFromURL = p;
      selectedOriginsFromURL = origins;
    } else if (!max) {
      minPriceFromURL = minPriceFromState;
      maxPriceFromURL = maxPriceFromState;
      perPageFromURL = perPage;
      selectedOriginsFromURL = selectedOriginsForURL;
    }
    history.push(
      `${window.location.pathname}?page=${pageNumber}&perPage=${perPageFromURL}&origins=${selectedOriginsFromURL}&minPrice=${minPriceFromURL}&maxPrice=${maxPriceFromURL}`
    );
    dispatch(
      getItems({
        page: pageNumber,
        perPage: perPageFromURL,
        origins: selectedOriginsFromURL,
        minPrice: minPriceFromURL,
        maxPrice: maxPriceFromURL,
        isEditable,
      })
    );
  };
  const updateData = (pageNumber, min, max, origins, p) => {
    if (pageNumber) {
      onPageClick(pageNumber, min, max, origins, p);
    } else if (!pageNumber || !min || !max || !origins || !p) {
      onPageClick(
        firstPage,
        minPriceFromState,
        maxPriceFromState,
        selectedOriginsForURL,
        perPage
      );
    }
  };
  const changePerPage = (event) => {
    onPageClick(firstPage);
    dispatch(
      getItems({
        page: firstPage,
        perPage: event.target.value,
        origins: selectedOriginsFromURL,
        minPrice: minPriceFromState,
        maxPrice: maxPriceFromState,
        isEditable,
      })
    );
    history.push(
      `${window.location.pathname}?page=${firstPage}&perPage=${event.target.value}&origins=${selectedOriginsForURL}&minPrice=${minPriceFromState}&maxPrice=${maxPriceFromState}`
    );
  };
  useEffect(() => {
    if (minPriceFromURL && maxPriceFromURL) {
      dispatch(setMinPrice(minPriceFromURL));
      dispatch(setMaxPrice(maxPriceFromURL));
    }
    history.push(
      `${window.location.pathname}?page=${pageFromUrl}&perPage=${perPageFromURL}&origins=${selectedOriginsFromURL}&minPrice=${minPriceFromURL}&maxPrice=${maxPriceFromURL}`
    );
    return () => {
      history.push(`${window.location.pathname}${ROUTES.DEFAULT_FILTERS}`);
      dispatch(setMinPrice(minFilterValue));
      dispatch(setMaxPrice(maxFilterValue));
      dispatch(setSelectedOrigins([]));
      dispatch(setCurrentPage(firstPage));
      dispatch(setIsEditable(null));
    };
  }, []);
  useEffect(() => {
    history.push(
      `${window.location.pathname}?page=${firstPage}&perPage=${perPage}&origins=${selectedOriginsForURL}&minPrice=${minPriceFromState}&maxPrice=${maxPriceFromState}`
    );
    updateData(
      pageFromUrl,
      minPriceFromURL,
      maxPriceFromURL,
      selectedOriginsFromURL,
      perPageFromURL
    );
  }, [
    minPriceFromState,
    maxPriceFromState,
    window.location.pathname,
    perPage,
    selectedOriginsForURL,
  ]);

  return (
    <div className={styles.productsContent}>
      {error && new Error(error.message)}
      <div className={styles.productsContainer}>
        <div className={styles.filterContainer}>
          <ProductsFiltersContainer updateData={updateData} />
        </div>
        <div className={styles.products}>
          <Paginator
            totalItems={totalItems}
            perPage={perPage}
            currentPage={Number(pageFromUrl)}
            onPageClick={onPageClick}
          />
          <ShowPerPage perPage={perPage} changePerPage={changePerPage} />
          <Products
            updateData={updateData}
            isEditable={isEditable}
            onProductItemButtonClick={onProductItemButtonClick}
            currentPage={Number(pageFromUrl)}
            origins={allOrigins}
            items={items}
            productItemButtonName={productItemButtonName}
            onDeleteClick={onDeleteClick}
          />
        </div>
      </div>
    </div>
  );
};

ProductsContainer.propTypes = {
  onDeleteClick: PropTypes.func,
  isEditable: PropTypes.bool,
  onProductItemButtonClick: PropTypes.func,
  productItemButtonName: PropTypes.string,
};
ProductsContainer.defaultProps = {
  onDeleteClick: undefined,
  isEditable: null,
  onProductItemButtonClick: () => {},
  productItemButtonName: "",
};
export default ProductsContainer;
