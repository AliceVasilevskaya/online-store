import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import * as PropTypes from "prop-types";
import styles from "./ProductItem.module.css";
import Button from "../../../ui-kit/Button/Button";
import ROUTES from "../../../routes/pathsOfRoutes";
import { productItem, productItemDefault } from "../../../utils/constants";

const ProductItem = function ({ item, addProductToCart }) {
  const { id, name, origin, createdAt, updatedAt, price } = item;
  return (
    <div className={styles.productInfoContainer}>
      <div className={styles.left}>
        <Link to={`${ROUTES.PRODUCTS}/${id}`}>
          <div className={styles.name}>{name}</div>
        </Link>
        <div className={styles.origin}>Origin: {origin.toUpperCase()}</div>
        <div className={styles.date}>
          <div>{`Created at ${moment(createdAt).format("MMMM Do YYYY")}`}</div>
          <div>{`Updated at ${moment(updatedAt).format("MMMM Do YYYY")}`}</div>
        </div>
      </div>
      <div className={styles.right}>
        <div>Price: ${price}</div>
        <Button child="Add to Cart" onClick={() => addProductToCart(item, 1)} />
      </div>
    </div>
  );
};
ProductItem.propTypes = {
  item: PropTypes.shape(productItem),
  addProductToCart: PropTypes.func,
};
ProductItem.defaultProps = {
  item: productItemDefault,
  addProductToCart: () => {},
};
export default ProductItem;
