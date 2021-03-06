import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
// import LogRocket from 'logrocket';
// LogRocket.init('rgcsa3/padre');

ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter
      basename={"/webshop-web-MichaelAular"}>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
