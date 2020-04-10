import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
//import { createStore, applyMiddleware, compose } from "redux";
import { createStore, applyMiddleware } from "redux";
import EmployeeReducer from "../src/reducers/employeeReducer";
import thunk from "redux-thunk";
//import logger from "redux-logger";
// const ReactReduxDevTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// const middleware = [thunk];
// const store = createStore(
//   EmployeeReducer,
//   compose(applyMiddleware(...middleware, logger, ReactReduxDevTools))
// );
const store = createStore(EmployeeReducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
