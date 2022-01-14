import Select from "react-select";
import React from "react";
import * as PropTypes from "prop-types";
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
OriginFilter.propTypes = {
  origins: PropTypes.instanceOf(Array),
  onOriginChange: PropTypes.func,
  selectedOrigins: PropTypes.instanceOf(Array),
  onFilterChange: PropTypes.func,
};
OriginFilter.defaultProps = {
  origins: [],
  onOriginChange: () => {},
  selectedOrigins: [],
  onFilterChange: () => {},
};
export default OriginFilter;
