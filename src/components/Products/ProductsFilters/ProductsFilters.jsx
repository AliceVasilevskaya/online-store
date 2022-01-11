import React from "react";
import * as PropTypes from "prop-types";
import OriginFilter from "./OriginFilter/OriginFilter";
import PriceFilter from "./PriceFilter/PriceFilter";
import s from "./ProductsFilters.module.css";
import Button from "../../../ui-kit/Button/Button";

const ProductsFilters = function ({
  minPrice,
  maxPrice,
  onMaxPriceChange,
  onMinPriceChange,
  onFilterChange,
  origins,
  onOriginChange,
  selectedOrigins,
  onFilterClear,
}) {
  return (
    <div>
      <PriceFilter
        minPrice={minPrice}
        maxPrice={maxPrice}
        onMaxPriceChange={onMaxPriceChange}
        onMinPriceChange={onMinPriceChange}
        onFilterChange={onFilterChange}
      />
      <OriginFilter
        onFilterChange={onFilterChange}
        origins={origins}
        onOriginChange={onOriginChange}
        selectedOrigins={selectedOrigins}
      />

      <Button child="Apply filter" onClick={onFilterChange} />
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
  origins: PropTypes.instanceOf(Array),
  onOriginChange: PropTypes.func,
  selectedOrigins: PropTypes.instanceOf(Array),
  onFilterChange: PropTypes.func,
  minPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onMaxPriceChange: PropTypes.func,
  onMinPriceChange: PropTypes.func,
  onFilterClear: PropTypes.func,
};
ProductsFilters.defaultProps = {
  origins: PropTypes.instanceOf(Array),
  onOriginChange: PropTypes.func,
  selectedOrigins: PropTypes.instanceOf(Array),
  onFilterChange: PropTypes.func,
  minPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onMaxPriceChange: PropTypes.func,
  onMinPriceChange: PropTypes.func,
  onFilterClear: PropTypes.func,
};
export default ProductsFilters;
