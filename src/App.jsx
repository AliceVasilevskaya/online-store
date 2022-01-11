import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import HeaderContainer from "./components/Header/HeaderContainer";
import routes from "./routes/routes";
import store from "./store/redux";

const App = function () {
  return (
    <Provider store={store}>
      <div className="app-wrapper">
        <HeaderContainer />
        <div className="app-wrapper-content">{routes}</div>
      </div>
    </Provider>
  );
};

export default App;
