import React from "react";
import ReactDOM from "react-dom/client";
import { useLayoutEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, useLocation } from "react-router-dom";
import "./index.css";
import store from "./redux/store";
import App from "./App";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Wrapper>
        <App />
      </Wrapper>
    </BrowserRouter>
  </Provider>
);
