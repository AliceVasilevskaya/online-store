import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import { ProductsProvider } from "./context/products/products-context";
import { CartContextProvider } from "./context/cart/cart-context";

import routes from "./routes/routes";

const App = function () {
  return (
    <div className="app-wrapper">
      <ProductsProvider>
        <CartContextProvider>
          <HeaderContainer />
          <div className="app-wrapper-content">{routes}</div>
        </CartContextProvider>
      </ProductsProvider>
    </div>
  );
};

export default App;
