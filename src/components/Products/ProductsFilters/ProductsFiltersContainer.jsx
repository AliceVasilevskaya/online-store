import { useDispatch, useSelector } from "react-redux";
import React from "react";
import {
  getMaxPrice,
  getMinPrice,
  getOrigins,
  getPageSize,
  getSelectedOrigins,
} from "../../../store/products/products-selectors";
import { getItems } from "../../../store/products/products-slice";
import ProductsFilters from "./ProductsFilters";
import {
  setMaxPrice,
  setMinPrice,
  setSelectedOrigins,
} from "../../../store/products/products-actions";

const ProductsFiltersContainer = function ({ onPageClick }) {
  const selectedOrigins = useSelector(getSelectedOrigins);
  const minPrice = useSelector(getMinPrice);
  const maxPrice = useSelector(getMaxPrice);
  const perPage = useSelector(getPageSize);
  const origins = useSelector(getOrigins);
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
    dispatch(setMinPrice(e));
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
export default ProductsFiltersContainer;
