import React from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import HeaderContainer from "./Pages/Header/HeaderContainer";
import ProductsContainer from "./Pages/Products/ProductsContainer";
import { ProductsProvider } from "./Pages/Products/products-context";
import { CartContextProvider } from "./Pages/CartList/cart-context";
import CartContainer from "./Pages/CartList/CartContainer";
import ProductInfoContainer from "./Pages/ProductInfo/ProductInfoContainer";

const App = function () {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="app-wrapper">
      <ProductsProvider>
        <CartContextProvider>
          <HeaderContainer />
          <div className="app-wrapper-content">
            <Switch>
              <Route path="/cart" render={() => <CartContainer />} />
              <Route
                path="/products/:productId"
                render={() => <ProductInfoContainer />}
              />
              <Route path="/products" render={() => <ProductsContainer />} />
              <Route path="*" render={() => <div>Page not found</div>} />
            </Switch>
          </div>
        </CartContextProvider>
      </ProductsProvider>
    </div>
  );
};

export default App;
