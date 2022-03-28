import { firstPage, maxFilterValue, minFilterValue } from "../utils/constants";

const ROUTES = {
  CART: "/cart",
  PRODUCT_ID: "/products/:productId",
  PRODUCTS: "/products",
  PRODUCTS_ORIGINS: "/products-origins",
  MY_PRODUCTS: "/my-products",
  ORDERS: "/orders",
  ORDER_ID: "/orders/:orderId",
  DEFAULT_FILTERS: `?page=${firstPage}&perPage=${10}&origins=&minPrice=${minFilterValue}&maxPrice=${maxFilterValue}`,
};

export default ROUTES;
