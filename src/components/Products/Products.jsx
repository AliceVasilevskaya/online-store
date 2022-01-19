import React from "react";
import PropTypes from "prop-types";
import ProductItem from "./ProductItem/ProductItem";
import { productItem } from "../../utils/constants";

const Products = function ({
  updateData,
  items,
  origins,
  productItemButtonName,
  onDeleteClick,
  onProductItemButtonClick,
  currentPage,
  isEditable,
}) {
  return (
    <div>
      {items.map((product) => {
        return (
          <ProductItem
            isEditable={isEditable}
            key={product.id}
            product={product}
            origins={origins}
            updateData={updateData}
            buttonName={productItemButtonName}
            onDeleteClick={onDeleteClick}
            onButtonClick={onProductItemButtonClick}
            currentPage={currentPage}
          />
        );
      })}
    </div>
  );
};

const ProductPropType = PropTypes.shape(productItem);
Products.propTypes = {
  onDeleteClick: PropTypes.func,
  origins: PropTypes.instanceOf(Array),
  updateData: PropTypes.func,
  currentPage: PropTypes.number,
  items: PropTypes.arrayOf(ProductPropType),
  onProductItemButtonClick: PropTypes.func,
  productItemButtonName: PropTypes.string,
  isEditable: PropTypes.bool,
};
Products.defaultProps = {
  isEditable: null,
  onDeleteClick: undefined,
  origins: [],
  updateData: () => {},
  currentPage: 1,
  items: [],
  onProductItemButtonClick: () => {},
  productItemButtonName: "",
};
export default Products;
