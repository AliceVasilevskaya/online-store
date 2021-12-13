const cartReducer = (state, action) => {
  switch (action.type) {
    case "online-store/cartPage/ADD_PRODUCT_TO_CART": {
      let cartList = [];
      const itemIndex = state.items.findIndex(
        (value) => value.id === action.payload.item.id
      );
      if (itemIndex < 0) {
        const addedItem = {
          ...action.payload.item,
          quantity: action.payload.quantity,
        };
        cartList = [...state.items, addedItem];
      } else {
        const addedItem = {
          ...state.items[itemIndex],
          quantity: state.items[itemIndex].quantity + action.payload.quantity,
        };
        cartList = [...state.items];
        cartList.splice(itemIndex, 1, addedItem);
      }
      return {
        ...state,
        items: cartList,
      };
    }
    case "online-store/cartPage/SET_TOTAL_PRICE": {
      const totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      return {
        ...state,
        totalPrice,
      };
    }
    default:
      return state;
  }
};
export const actions = {
  addProductToCart: (item, quantity) => ({
    type: "online-store/cartPage/ADD_PRODUCT_TO_CART",
    payload: { item, quantity },
  }),
  setTotalPrice: () => ({
    type: "online-store/cartPage/SET_TOTAL_PRICE",
  }),
};

export default cartReducer;
