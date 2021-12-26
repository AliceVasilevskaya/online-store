import {
  setCurrentPage,
  setPerPage,
  setPortionNumber,
  setProduct,
  setProducts,
  setTotalItems,
  toggleIsFetching,
} from "./product-action-types";
import productsApi from "../../api/products-api";

const initialState = {
  products: [],
  product: {},
  isFetching: true,
  totalItems: 0,
  page: 1,
  perPage: 10,
  portionNumber: 1,
};

export const productsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case setProducts:
      return { ...state, products: action.payload.products };
    case setProduct: {
      return {
        ...state,
        product: action.payload.product,
      };
    }
    case toggleIsFetching:
      return { ...state, isFetching: action.payload.isFetching };
    case setTotalItems:
      return { ...state, totalItems: action.payload.totalItems };
    case setCurrentPage:
      return { ...state, page: action.payload.page };
    case setPortionNumber:
      return { ...state, portionNumber: action.payload.portionNumber };
    case setPerPage:
      return { ...state, perPage: action.payload.perPage };
    default:
      return state;
  }
};
export const actions = {
  setProducts: (products) => ({
    type: setProducts,
    payload: { products },
  }),
  setProduct: (product) => ({
    type: setProduct,
    payload: { product },
  }),
  toggleIsFetching: (isFetching) => ({
    type: toggleIsFetching,
    payload: { isFetching },
  }),
  setTotalItems: (totalItems) => ({
    type: setTotalItems,
    payload: { totalItems },
  }),
  setCurrentPage: (page) => ({
    type: setCurrentPage,
    payload: { page },
  }),
  setPortionNumber: (portionNumber) => ({
    type: setPortionNumber,
    payload: { portionNumber },
  }),
  setPerPage: (perPage) => ({
    type: setPerPage,
    payload: { perPage },
  }),
};
export const getItems = (page, perPage) => async (dispatch) => {
  try {
    dispatch(actions.toggleIsFetching(true));
    dispatch(actions.setCurrentPage(page));
    dispatch(actions.setPerPage(perPage));
    const data = await productsApi.getProductsList(page, perPage);
    dispatch(actions.setProducts(data.items));
    dispatch(actions.setTotalItems(data.totalItems));
  } catch (error) {
    throw new Error(error);
  } finally {
    dispatch(actions.toggleIsFetching(false));
  }
};
