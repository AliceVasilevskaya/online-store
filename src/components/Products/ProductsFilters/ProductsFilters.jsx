import React from "react";
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
export default ProductsFilters;
