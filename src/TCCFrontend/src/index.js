import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";

const theme = {
  defaultColor: "#649760",
  dangerColor: "red",
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
