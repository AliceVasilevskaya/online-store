import React from "react";
import * as PropTypes from "prop-types";
import OriginFilter from "./OriginFilter/OriginFilter";
import PriceFilter from "./PriceFilter/PriceFilter";
import s from "./ProductsFilters.module.css";
import Button from "../../../ui-kit/Button/Button";
import { firstPage } from "../../../utils/constants";

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
}) {
  return (
    <div>
      <PriceFilter
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

      <Button child="Apply filter" onClick={() => updateData(firstPage)} />
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
  minPrice: 0,
  maxPrice: 10000,
  onMaxPriceChange: () => {},
  onMinPriceChange: () => {},
  onFilterClear: () => {},
  updateData: () => {},
};
export default ProductsFilters;
