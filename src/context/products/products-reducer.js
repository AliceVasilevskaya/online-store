import {
  setProduct,
  setProducts,
  toggleIsFetching,
} from "./product-action-types";

export const productsReducer = (state, action) => {
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
      return { ...state, isFetching: action.isFetching };
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
};
