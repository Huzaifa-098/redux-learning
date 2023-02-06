import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Immutable from "immutable";
import store from "./store";
import { bugAdded, bugResolved } from "./actions";
const root = ReactDOM.createRoot(document.getElementById("root"));

const unsubscribe = store.subscribe(() => {
  // console.log("Store changed!", store.getState());
});

store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugResolved(1));
console.log(store.getState());

root.render(
  <React.StrictMode>
    <App />

    {/* <Immutable /> */}
  </React.StrictMode>
);

reportWebVitals();
