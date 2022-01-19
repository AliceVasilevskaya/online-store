import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import * as PropTypes from "prop-types";
import styles from "./ProductItem.module.css";
import ROUTES from "../../../routes/pathsOfRoutes";
import { productItem } from "../../../utils/constants";

const ProductItem = function ({
  product,
  onDeleteClick,
  origins,
  buttonName,
  onButtonClick,
  updateData,
  currentPage,
  isEditable,
}) {
  const { id, name, price, createdAt, updatedAt, origin } = product;
  const originWithLabel = origins.filter((e) => {
    if (origin) {
      return e.value === origin;
    }
    return undefined;
  });
  const values = {
    id,
    name,
    price,
    origin: originWithLabel[0],
  };
  return (
    <div className={styles.productItemContainer} key={id}>
      <div className={styles.left}>
        <Link to={`${ROUTES.PRODUCTS}/${id}`}>
          <div className={styles.name}>{name}</div>
        </Link>
        Origin:<span className={styles.origin}> {origin}</span>
        <div className={styles.date}>
          <div>{`Created at ${moment(createdAt).format("MMMM Do YYYY")}`}</div>
          <div>{`Updated at ${moment(updatedAt).format("MMMM Do YYYY")}`}</div>
          <div>Price: ${price}</div>
        </div>
      </div>
      <div className={styles.buttons}>
        <div>
          <button
            className={`${styles.editButton} ${styles.button}`}
            type="button"
            onClick={() => {
              onButtonClick({
                val: values,
                product,
                quantity: 1,
                editable: isEditable,
              });
            }}
          >
            {buttonName}
          </button>
          {isEditable && (
            <div>
              <button
                type="button"
                className={`${styles.deleteButton} ${styles.button}`}
                onClick={() => {
                  onDeleteClick({ id });
                  updateData(currentPage);
                }}
              >
                Delete product
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
ProductItem.propTypes = {
  onDeleteClick: PropTypes.func,
  origins: PropTypes.instanceOf(Array),
  buttonName: PropTypes.string,
  onButtonClick: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  updateData: PropTypes.func,
  isEditable: PropTypes.bool,
  currentPage: PropTypes.number,
  product: PropTypes.shape(productItem),
};
ProductItem.defaultProps = {
  product: {},
  onDeleteClick: () => {},
  origins: [],
  buttonName: "",
  onButtonClick: () => {},
  updateData: () => {},
  isEditable: null,
  currentPage: 1,
};
export default ProductItem;
