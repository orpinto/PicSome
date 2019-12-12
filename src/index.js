import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./styles.css";
import { ShopContextProvider } from "./ShopContext";

ReactDOM.render(
  <ShopContextProvider>
    <Router>
      <App />
    </Router>
  </ShopContextProvider>,
  document.getElementById("root")
);
