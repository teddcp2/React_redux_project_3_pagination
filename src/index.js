import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import RootReducers from "./reducers";
import thunk from "redux-thunk";

import App from "./App";
// import { PageMiddleWare } from "./reducers/PageMiddleware";

const store = createStore(RootReducers, applyMiddleware(thunk));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
