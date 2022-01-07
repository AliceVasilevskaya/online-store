import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React from "react";
import s from "../ProductsFilters.module.css";

const PriceFilter = function ({
  minPrice,
  maxPrice,
  onMaxPriceChange,
  onMinPriceChange,
  onFilterChange,
}) {
  return (
    <div className={s.priceFilter}>
      <input
        value={minPrice}
        onChange={(e) => onMinPriceChange(e.target.value)}
        onBlur={onFilterChange}
      />
      &nbsp;-&nbsp;
      <input
        value={maxPrice}
        onChange={(e) => onMaxPriceChange(e.target.value)}
        onBlur={onFilterChange}
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
export default PriceFilter;
