import { useDispatch } from "react-redux";
import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";
import ProductsFilters from "./ProductsFilters";
import ProductsSelectors from "../../../store/products/products-selectors";
import {
  setMaxPrice,
  setMinPrice,
  setSelectedOrigins,
} from "../../../store/products/products-slice";
import {
  firstPage,
  maxFilterValue,
  minFilterValue,
} from "../../../utils/constants";
import useDebounce from "../../../utils/useDebounce";
import ROUTES from "../../../routes/pathsOfRoutes";

const ProductsFiltersContainer = function ({ updateData }) {
  const history = useHistory();
  const {
    allOrigins,
    maxPriceFromState,
    minPriceFromState,
    selectedOrigins,
    perPage,
    currentPage,
  } = ProductsSelectors();
  const dispatch = useDispatch();
  const onApplyFilterClick = useDebounce(() => {
    updateData(
      firstPage,
      minPriceFromState,
      maxPriceFromState,
      selectedOrigins.map((el) => el.value).join(),
      perPage
    );
    history.push(
      `${
        window.location.pathname
      }?page=${firstPage}&perPage=${perPage}&origins=${selectedOrigins
        .map((el) => el.value)
        .join()}&minPrice=${minPriceFromState}&maxPrice=${maxPriceFromState}`
    );
  }, 1000);
  const onOriginChange = (e) => {
    if (
      e.some((el) => {
        return el.label === "All";
      })
    ) {
      dispatch(setSelectedOrigins([]));
    } else {
      dispatch(setSelectedOrigins(e));
    }
    onApplyFilterClick();
  };
  const onMinPriceChange = (e) => {
    let min = e;
    if (Number(e) > maxPriceFromState) {
      min = maxPriceFromState - 1;
    }
    dispatch(setMinPrice(min));
    onApplyFilterClick();
  };
  const onMaxPriceChange = (e) => {
    dispatch(setMaxPrice(e));
    onApplyFilterClick();
  };
  const onFilterClear = () => {
    dispatch(setSelectedOrigins([]));
    dispatch(setMinPrice(minFilterValue));
    dispatch(setMaxPrice(maxFilterValue));
    updateData(firstPage, minPriceFromState, maxPriceFromState);
    history.push(`${window.location.pathname}${ROUTES.DEFAULT_FILTERS}`);
  };
  return (
    <div>
      <ProductsFilters
        onApplyFilterClick={onApplyFilterClick}
        perPage={perPage}
        currentPage={currentPage}
        minPrice={minPriceFromState}
        maxPrice={maxPriceFromState}
        onMaxPriceChange={onMaxPriceChange}
        onMinPriceChange={onMinPriceChange}
        updateData={updateData}
        onFilterClear={onFilterClear}
        origins={allOrigins}
        onOriginChange={onOriginChange}
        selectedOrigins={selectedOrigins}
      />
    </div>
  );
};
ProductsFiltersContainer.propTypes = {
  updateData: PropTypes.func,
};
ProductsFiltersContainer.defaultProps = {
  updateData: () => {},
};
export default ProductsFiltersContainer;
