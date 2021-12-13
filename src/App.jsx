import React from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProductsContainer from "./components/Products/ProductsContainer";
import { ProductsProvider } from "./context/products/products-context";
import { CartContextProvider } from "./context/cart/cart-context";
import CartContainer from "./components/CartList/CartContainer";
import ProductInfoContainer from "./components/ProductInfo/ProductInfoContainer";

const App = function () {
  return (
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
