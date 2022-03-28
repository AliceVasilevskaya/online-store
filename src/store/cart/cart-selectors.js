import { useSelector } from "react-redux";

const CartSelectors = function () {
  const items = useSelector((state) => {
    return state.cartPage.items;
  });
  const totalPrice = useSelector((state) => {
    return state.cartPage.totalPrice;
  });
  // const order = useSelector((state) => {
  //   return state.cartPage.order;
  // });
  // const orders = useSelector((state) => {
  //   return state.cartPage.orders;
  // });

  return {
    // order,
    // orders,
    items,
    totalPrice,
  };
};
export default CartSelectors;
