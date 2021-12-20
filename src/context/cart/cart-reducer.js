import { addProductToCart, setTotalPrice } from "./cart-action-types";

const cartReducer = (state, action) => {
  switch (action.type) {
    case addProductToCart: {
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
    case setTotalPrice: {
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
    type: addProductToCart,
    payload: { item, quantity },
  }),
  setTotalPrice: () => ({
    type: setTotalPrice,
  }),
};

export default cartReducer;
