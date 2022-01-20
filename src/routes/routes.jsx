import { Redirect, Route, Switch } from "react-router";
import React from "react";
import CartContainer from "../components/CartList/CartContainer";
import ProductInfoContainer from "../components/Products/ProductItem/ProductInfoContainer";
import ROUTES from "./pathsOfRoutes";
import MyProductsContainer from "../components/Products/MyProductsContainer";
import AllProductsContainer from "../components/Products/AllProductsContainer";
import OrdersHistoryContainer from "../components/Orders/OrdersHistory/OrdersHistoryContainer";
import OrderInfoContainer from "../components/Orders/OrderItem/OrderInfoContainer";

const routes = (
  <Switch>
    <Route path={ROUTES.CART} render={() => <CartContainer />} />
    <Route path={ROUTES.MY_PRODUCTS} render={() => <MyProductsContainer />} />
    <Route path={ROUTES.PRODUCT_ID} render={() => <ProductInfoContainer />} />
    <Route path={ROUTES.PRODUCTS} render={() => <AllProductsContainer />} />
    <Route path={ROUTES.ORDER_ID} render={() => <OrderInfoContainer />} />
    <Route path={ROUTES.ORDERS} render={() => <OrdersHistoryContainer />} />
    <Route exact path="/" render={() => <Redirect to={ROUTES.PRODUCTS} />} />
    <Route path="*" render={() => <div>Page not found</div>} />
  </Switch>
);

export default routes;
