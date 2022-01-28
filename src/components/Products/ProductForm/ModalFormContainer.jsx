import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import ModalComponent from "../../../ui-kit/Modal/Modal";
import ProductForm from "./ProductForm";
import ProductsSelectors from "../../../store/products/products-selectors";
import {
  addProduct,
  editProduct,
  getItems,
  getProduct,
} from "../../../store/products/products-async-actions";
import ROUTES from "../../../routes/pathsOfRoutes";

const ModalFormContainer = function () {
  const {
    origins,
    perPage,
    page,
    isFetching,
    values,
    openEdit,
    openAdd,
    item,
  } = ProductsSelectors();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const onPageClick = (pageNumber) => {
    dispatch(getItems({ page: pageNumber, perPage, isEditable: true }));
  };
  const updateData = (p) => {
    dispatch(getItems({ page: p, perPage, isEditable: true }));
    if (item) {
      dispatch(getProduct({ productId: item.id }));
    }
    onPageClick(p);
  };
  const onAddProductSubmitClick = ({ data }) => {
    dispatch(addProduct({ data }));
    if (location.pathname !== ROUTES.MY_PRODUCTS) {
      history.push(ROUTES.MY_PRODUCTS);
      updateData(1);
    } else {
      updateData(page);
    }
  };
  const onApplyChangesSubmitClick = ({ data, id }) => {
    dispatch(editProduct({ data, productId: id }));
    updateData(page);
  };
  return (
    <div>
      {openEdit === true && (
        <ModalComponent open>
          <ProductForm
            isFetching={isFetching}
            onSubmitButtonClick={onApplyChangesSubmitClick}
            values={values}
            origins={origins}
            submitName="apply changes"
          />
        </ModalComponent>
      )}
      {openAdd === true && (
        <ModalComponent open>
          <ProductForm
            isFetching={isFetching}
            onSubmitButtonClick={onAddProductSubmitClick}
            values={{
              id: "id",
              name: "",
              price: "",
              origin: undefined,
            }}
            origins={origins}
            submitName="add product"
          />
        </ModalComponent>
      )}
    </div>
  );
};
export default ModalFormContainer;
