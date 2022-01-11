import { useDispatch } from "react-redux";
import React from "react";
import * as PropTypes from "prop-types";
import ProductsFilters from "./ProductsFilters";
import ProductsSelectors from "../../../store/products/products-selectors";
import { getItems } from "../../../store/products/products-async-actions";
import {
  setMaxPrice,
  setMinPrice,
  setSelectedOrigins,
} from "../../../store/products/products-slice";

const ProductsFiltersContainer = function ({ onPageClick }) {
  const { origins, maxPrice, minPrice, selectedOrigins, perPage } =
    ProductsSelectors();
  const dispatch = useDispatch();
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
    onPageClick(1, 1);
    dispatch(getItems({ page: 1, perPage }));
  };
  const onMinPriceChange = (e) => {
    let min = e;
    if (Number(e) > maxPrice) {
      min = maxPrice - 1;
    }
    dispatch(setMinPrice(min));
  };
  const onMaxPriceChange = (e) => {
    dispatch(setMaxPrice(e));
  };
  const onFilterChange = () => {
    onPageClick(1, 1);
    dispatch(getItems({ page: 1, perPage }));
  };
  const onFilterClear = () => {
    dispatch(setSelectedOrigins([]));
    dispatch(setMinPrice(0));
    dispatch(setMaxPrice(10000));
    onPageClick(1, 1);
    dispatch(getItems({ page: 1, perPage }));
  };
  return (
    <div>
      <ProductsFilters
        minPrice={minPrice}
        maxPrice={maxPrice}
        onMaxPriceChange={onMaxPriceChange}
        onMinPriceChange={onMinPriceChange}
        onFilterChange={onFilterChange}
        onFilterClear={onFilterClear}
        origins={origins}
        onOriginChange={onOriginChange}
        selectedOrigins={selectedOrigins}
      />
    </div>
  );
};
ProductsFiltersContainer.propTypes = {
  onPageClick: PropTypes.func,
};
ProductsFiltersContainer.defaultProps = {
  onPageClick: PropTypes.func,
};
export default ProductsFiltersContainer;
