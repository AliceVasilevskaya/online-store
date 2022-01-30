import Select from "react-select";
import React from "react";
import * as PropTypes from "prop-types";
import s from "../ProductsFilters.module.css";
import { firstPage } from "../../../../utils/constants";

const OriginFilter = function ({
  origins,
  onOriginChange,
  selectedOrigins,
  updateData,
}) {
  const originsWithAll = origins.filter((x) => x.label === "All");
  const options = selectedOrigins.some((el) => {
    return el.label === "All";
  })
    ? originsWithAll
    : origins;
  return (
    <Select
      closeMenuOnSelect={false}
      className={s.originFilter}
      value={selectedOrigins}
      options={options}
      defaultValue={selectedOrigins}
      isMulti
      onChange={(e) => onOriginChange(e)}
      onBlur={() => updateData(firstPage)}
    />
  );
};
OriginFilter.propTypes = {
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
  updateData: PropTypes.func,
};
OriginFilter.defaultProps = {
  origins: [],
  onOriginChange: () => {},
  selectedOrigins: [],
  updateData: () => {},
};
export default OriginFilter;
