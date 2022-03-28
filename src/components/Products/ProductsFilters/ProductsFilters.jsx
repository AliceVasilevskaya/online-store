import React from "react";
import * as PropTypes from "prop-types";
import OriginFilter from "./OriginFilter/OriginFilter";
import PriceFilter from "./PriceFilter/PriceFilter";
import s from "./ProductsFilters.module.css";
import Button from "../../../ui-kit/Button/Button";
import { maxFilterValue, minFilterValue } from "../../../utils/constants";

const ProductsFilters = function ({
  minPrice,
  maxPrice,
  onMaxPriceChange,
  onMinPriceChange,
  updateData,
  origins,
  onOriginChange,
  selectedOrigins,
  onFilterClear,
  onApplyFilterClick,
}) {
  return (
    <div>
      <PriceFilter
        onApplyFilterClick={onApplyFilterClick}
        minPrice={minPrice}
        maxPrice={maxPrice}
        onMaxPriceChange={onMaxPriceChange}
        onMinPriceChange={onMinPriceChange}
        updateData={updateData}
      />
      <OriginFilter
        updateData={updateData}
        origins={origins}
        onOriginChange={onOriginChange}
        selectedOrigins={selectedOrigins}
      />
      <Button child="Apply filter" onClick={() => onApplyFilterClick()} />
      <button
        className={s.clearAllFilters}
        type="button"
        onClick={onFilterClear}
      >
        clear all
      </button>
    </div>
  );
};
ProductsFilters.propTypes = {
  onApplyFilterClick: PropTypes.func,
  origins: PropTypes.arrayOf(
    PropTypes.shape({
      displayName: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  onOriginChange: PropTypes.func,
  selectedOrigins: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  minPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onMaxPriceChange: PropTypes.func,
  onMinPriceChange: PropTypes.func,
  onFilterClear: PropTypes.func,
  updateData: PropTypes.func,
};
ProductsFilters.defaultProps = {
  origins: [],
  onOriginChange: () => {},
  selectedOrigins: [],
  minPrice: minFilterValue,
  maxPrice: maxFilterValue,
  onMaxPriceChange: () => {},
  onMinPriceChange: () => {},
  onFilterClear: () => {},
  updateData: () => {},
  onApplyFilterClick: () => {},
};
export default ProductsFilters;
