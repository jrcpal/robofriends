import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import "tachyons";
import reportWebVitals from "./reportWebVitals";
import App from "./containers/App";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Strict mode calls lifecycle methods, like useEffect, twice
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
