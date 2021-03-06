import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TreeImpl from "./TreeImpl";
import reportWebVitals from "./reportWebVitals";
import { TreeContext, TreeContextProvider } from "./components/tree/TreeContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <TreeContextProvider>
        <TreeImpl />
    </TreeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// oyr send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
