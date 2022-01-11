import { useSelector } from "react-redux";

const CartSelectors = function () {
  const items = useSelector((state) => {
    return state.cartPage.items;
  });
  const totalPrice = useSelector((state) => {
    return state.cartPage.totalPrice;
  });
  return {
    items,
    totalPrice,
  };
};
export default CartSelectors;
