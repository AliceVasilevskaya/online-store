export const productsReducer = (state, action) => {
  switch (action.type) {
    case "online-store/productsPage/SET_PRODUCTS":
      return { ...state, products: action.payload.products };
    case "online-store/productsPage/SET_PRODUCT": {
      return {
        ...state,
        product: action.payload.product,
      };
    }
    case "online-store/productsPage/TOGGLE_IS_FETCHING":
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};
export const actions = {
  setProducts: (products) => ({
    type: "online-store/productsPage/SET_PRODUCTS",
    payload: { products },
  }),
  setProduct: (product) => ({
    type: "online-store/productsPage/SET_PRODUCT",
    payload: { product },
  }),
  toggleIsFetching: (isFetching) => ({
    type: "online-store/productsPage/TOGGLE_IS_FETCHING",
    payload: { isFetching },
  }),
};
