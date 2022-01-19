import { Route, Switch } from "react-router";
import React from "react";
import CartContainer from "../components/CartList/CartContainer";
import ProductInfoContainer from "../components/Products/ProductItem/ProductInfoContainer";
import ROUTES from "./pathsOfRoutes";
import MyProductsContainer from "../components/Products/MyProductsContainer";
import AllProductsContainer from "../components/Products/AllProductsContainer";

const routes = (
  <Switch>
    <Route path={ROUTES.CART} render={() => <CartContainer />} />
    <Route path={ROUTES.MY_PRODUCTS} render={() => <MyProductsContainer />} />
    <Route path={ROUTES.PRODUCT_ID} render={() => <ProductInfoContainer />} />
    <Route path={ROUTES.PRODUCTS} render={() => <AllProductsContainer />} />
    <Route path="*" render={() => <div>Page not found</div>} />
  </Switch>
);

export default routes;
