import React from "react";
import moment from "moment";
import * as PropTypes from "prop-types";
import styles from "./ProductInfo.module.css";
import Button from "../../ui-kit/Button/Button";
import Preloader from "../../ui-kit/Preloader/Preloader";
import { productItem } from "../../utils/constants";

const ProductInfo = function ({ product, addProductToCart }) {
  const { name, origin, createdAt, updatedAt, price } = product;
  return (
    <div className={styles.productInfoContainer}>
      {!name ? (
        <Preloader />
      ) : (
        <div className={styles.productInfo}>
          <div className={styles.left}>
            <div>
              <div className={styles.name}>{name}</div>
              <div className={styles.origin}>
                Origin: {origin.toUpperCase()}
              </div>
              <div className={styles.date}>
                <div>
                  {`Created at ${moment(createdAt).format("MMMM Do YYYY")}`}
                </div>
                <div>
                  {`Updated at ${moment(updatedAt).format("MMMM Do YYYY")}`}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div>Price: ${price}</div>
            <Button
              child="Add to Cart"
              onClick={() => addProductToCart(product, 1)}
            />
          </div>
        </div>
      )}
    </div>
  );
};
ProductInfo.propTypes = {
  product: PropTypes.shape(productItem),
  addProductToCart: PropTypes.func,
};
ProductInfo.defaultProps = {
  product: PropTypes.shape(productItem),
  addProductToCart: PropTypes.func,
};
export default ProductInfo;
