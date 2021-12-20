import { Route, Switch } from "react-router";
import React from "react";
import CartContainer from "../components/CartList/CartContainer";
import ProductInfoContainer from "../components/ProductInfo/ProductInfoContainer";
import ProductsContainer from "../components/Products/ProductsContainer";
import ROUTES from "./pathsOfRoutes";

const routes = (
  <Switch>
    <Route path={ROUTES.CART} render={() => <CartContainer />} />
    <Route path={ROUTES.PRODUCT_ID} render={() => <ProductInfoContainer />} />
    <Route path={ROUTES.PRODUCTS} render={() => <ProductsContainer />} />
    <Route path="*" render={() => <div>Page not found</div>} />
  </Switch>
);

export default routes;
