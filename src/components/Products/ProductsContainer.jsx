import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import styles from "./Products.module.css";
import Paginator from "../../ui-kit/Paginator/Paginator";
import ShowPerPage from "../../ui-kit/ShowPerPage/ShowPerPage";
import ProductsFiltersContainer from "./ProductsFilters/ProductsFiltersContainer";
import ProductsSelectors from "../../store/products/products-selectors";
import { getItems } from "../../store/products/products-async-actions";
import { setPortionNumber } from "../../store/products/products-slice";
import Products from "./Products";

const ProductsContainer = function ({
  isEditable,
  onDeleteClick,
  onProductItemButtonClick,
  productItemButtonName,
}) {
  const { totalItems, perPage, page, portionNumber, error, items, origins } =
    ProductsSelectors();
  const dispatch = useDispatch();

  const onPageClick = (pageNumber, portion) => {
    if (portion) {
      dispatch(setPortionNumber(portion));
    }
    dispatch(getItems({ page: pageNumber, perPage, isEditable }));
  };
  const updateData = (pageNumber, portion) => {
    onPageClick(pageNumber, portion);
    dispatch(getItems({ page: pageNumber, perPage, isEditable }));
  };
  const changePerPage = (event) => {
    onPageClick(1, 1);
    dispatch(getItems({ page: 1, perPage: event.target.value, isEditable }));
  };

  useEffect(() => {
    updateData(1, 1);
  }, []);

  return (
    <div className={styles.productsContent}>
      {error && new Error(error.message)}
      <div className={styles.productsContainer}>
        <div className={styles.filterContainer}>
          <ProductsFiltersContainer updateData={updateData} />
        </div>
        <div className={styles.products}>
          <Paginator
            isEditable={isEditable}
            portionNumber={portionNumber}
            totalItems={totalItems}
            perPage={perPage}
            currentPage={page}
            onPageClick={onPageClick}
          />
          <ShowPerPage perPage={perPage} changePerPage={changePerPage} />
          <Products
            updateData={updateData}
            isEditable={isEditable}
            onProductItemButtonClick={onProductItemButtonClick}
            currentPage={page}
            origins={origins}
            items={items}
            productItemButtonName={productItemButtonName}
            onDeleteClick={onDeleteClick}
          />
        </div>
      </div>
    </div>
  );
};

ProductsContainer.propTypes = {
  onDeleteClick: PropTypes.func,
  isEditable: PropTypes.bool,
  onProductItemButtonClick: PropTypes.func,
  productItemButtonName: PropTypes.string,
};
ProductsContainer.defaultProps = {
  onDeleteClick: undefined,
  isEditable: null,
  onProductItemButtonClick: () => {},
  productItemButtonName: "",
};
export default ProductsContainer;
