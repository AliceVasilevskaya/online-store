// Change logic according to HM#4

// import { useDispatch } from "react-redux";
// import React from "react";
// import PropTypes from "prop-types";
// import ProductsFilters from "./ProductsFilters";
// import ProductsSelectors from "../../../store/products/products-selectors";
// import {
//   setMaxPrice,
//   setMinPrice,
//   setSelectedOrigins,
// } from "../../../store/products/products-slice";
// import { firstPage } from "../../../utils/constants";
//
// const ProductsFiltersContainer = function ({ updateData }) {
//   const { origins, maxPrice, minPrice, selectedOrigins } = ProductsSelectors();
//   const dispatch = useDispatch();
//   const onOriginChange = (e) => {
//     if (
//       e.some((el) => {
//         return el.label === "All";
//       })
//     ) {
//       dispatch(setSelectedOrigins([]));
//     } else {
//       dispatch(setSelectedOrigins(e));
//     }
//     updateData(firstPage);
//   };
//   const onMinPriceChange = (e) => {
//     let min = e;
//     if (Number(e) > maxPrice) {
//       min = maxPrice - 1;
//     }
//     dispatch(setMinPrice(min));
//   };
//   const onMaxPriceChange = (e) => {
//     dispatch(setMaxPrice(e));
//   };
//   const onFilterClear = () => {
//     dispatch(setSelectedOrigins([]));
//     dispatch(setMinPrice(0));
//     dispatch(setMaxPrice(10000000));
//     updateData(firstPage);
//   };
//   return (
//     <div>
//       <ProductsFilters
//         minPrice={minPrice}
//         maxPrice={maxPrice}
//         onMaxPriceChange={onMaxPriceChange}
//         onMinPriceChange={onMinPriceChange}
//         updateData={updateData}
//         onFilterClear={onFilterClear}
//         origins={origins}
//         onOriginChange={onOriginChange}
//         selectedOrigins={selectedOrigins}
//       />
//     </div>
//   );
// };
// ProductsFiltersContainer.propTypes = {
//   updateData: PropTypes.func,
// };
// ProductsFiltersContainer.defaultProps = {
//   updateData: () => {},
// };
// export default ProductsFiltersContainer;
