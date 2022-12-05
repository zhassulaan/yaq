import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserProvider from "./context/UserContext";
import Context from "./context/Context";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserProvider>
        <Context>
          <App />
        </Context>
      </UserProvider>
    </Provider>
  </React.StrictMode>
);
