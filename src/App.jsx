import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import routes from "./routes/routes";

const App = function () {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <div className="app-wrapper-content">{routes}</div>
    </div>
  );
};

export default App;
