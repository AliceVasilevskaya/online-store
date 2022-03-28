import React, { useCallback, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useDispatch } from "react-redux";
import Preloader from "../../../ui-kit/Preloader/Preloader";
import {
  setIsEditable,
  setProduct,
} from "../../../store/products/products-actions";
import ProductsSelectors from "../../../store/products/products-selectors";
import {
  deleteProduct,
  getProduct,
} from "../../../store/products/products-async-actions";
import { addProductToCart } from "../../../store/cart/cart-async-actions";
import ProductItem from "./ProductItem";
import styles from "./ProductItem.module.css";
import { setOpen, setValues } from "../../../store/products/products-slice";
import ROUTES from "../../../routes/pathsOfRoutes";
import { oneItem } from "../../../utils/constants";

const ProductInfoContainer = function () {
  const { isFetching, item, origins, error, isEditable } = ProductsSelectors();
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();
  const { productId } = params;
  useEffect(() => {
    dispatch(getProduct({ productId }));
    return () => {
      dispatch(setProduct({}));
      dispatch(setIsEditable(null));
    };
  }, []);
  const onDeleteClick = ({ id }) => {
    dispatch(deleteProduct({ id }));
    history.push(ROUTES.MY_PRODUCTS);
  };
  const onButtonClick = useCallback(({ val, product }) => {
    if (isEditable) {
      dispatch(setOpen([true, false]));
      dispatch(setValues(val));
    } else if (isEditable === false || item === undefined) {
      dispatch(addProductToCart(product, oneItem));
    }
  }, []);
  const buttonName = useCallback(() => {
    if (item && item.isEditable) {
      return "Edit product";
    }
    if (item && item.isEditable === false) {
      return "Add product to cart";
    }
    return undefined;
  }, [item]);

  return (
    <div>
      {error && new Error(error.message)}
      {isFetching ? (
        <Preloader />
      ) : (
        <div className={styles.productInfo}>
          {item && (
            <ProductItem
              product={item}
              origins={origins}
              isEditable={item.isEditable}
              onButtonClick={onButtonClick}
              buttonName={buttonName()}
              onDeleteClick={onDeleteClick}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ProductInfoContainer;
