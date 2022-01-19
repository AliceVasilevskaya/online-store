import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React from "react";
import * as PropTypes from "prop-types";
import s from "../ProductsFilters.module.css";

const PriceFilter = function ({
  minPrice,
  maxPrice,
  onMaxPriceChange,
  onMinPriceChange,
  updateData,
}) {
  return (
    <div className={s.priceFilter}>
      <input
        value={Number(minPrice)}
        onChange={(e) => onMinPriceChange(e.target.value.replace(/\D+/g, ""))}
        onBlur={() => updateData(1, 1)}
      />
      &nbsp;-&nbsp;
      <input
        value={Number(maxPrice)}
        onChange={(e) => onMaxPriceChange(e.target.value.replace(/\D+/g, ""))}
        onBlur={() => updateData(1, 1)}
      />
      &nbsp;$&nbsp;
      <div className={s.slider}>
        <Box sx={{ width: 200 }}>
          <Slider
            min={0}
            max={10000}
            getAriaLabel={() => "Price range"}
            value={[Number(minPrice), Number(maxPrice)]}
            onChange={(e) => {
              onMinPriceChange(e.target.value[0]);
              onMaxPriceChange(e.target.value[1]);
            }}
            valueLabelDisplay="auto"
          />
        </Box>
      </div>
    </div>
  );
};
PriceFilter.propTypes = {
  minPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onMaxPriceChange: PropTypes.func,
  onMinPriceChange: PropTypes.func,
  updateData: PropTypes.func,
};
PriceFilter.defaultProps = {
  minPrice: 0,
  maxPrice: 10000,
  onMaxPriceChange: () => {},
  onMinPriceChange: () => {},
  updateData: () => {},
};
export default PriceFilter;
