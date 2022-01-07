import Select from "react-select";
import React from "react";
import s from "../ProductsFilters.module.css";

const OriginFilter = function ({
  origins,
  onOriginChange,
  selectedOrigins,
  onFilterChange,
}) {
  const originsWithAll = origins.filter((x) => x.label === "All");
  const options = selectedOrigins.some((el) => {
    return el.label === "All";
  })
    ? originsWithAll
    : origins;
  return (
    <Select
      className={s.originFilter}
      value={selectedOrigins}
      options={options}
      defaultValue={selectedOrigins}
      isMulti
      onChange={(e) => onOriginChange(e)}
      onBlur={onFilterChange}
    />
  );
};

export default OriginFilter;
