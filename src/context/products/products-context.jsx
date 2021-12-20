import React, { useMemo } from "react";
import { productsReducer } from "./products-reducer";

const initialState = {
  products: [],
  product: {},
  isFetching: true,
};

const ProductsContext = React.createContext();
const ProductsProvider = function ({ children }) {
  const [state, dispatch] = React.useReducer(productsReducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

function useProducts() {
  const context = React.useContext(ProductsContext);
  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
}

export { ProductsProvider, useProducts };
