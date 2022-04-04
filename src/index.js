import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import PushNotifications from "./PushNotifications";

ReactDOM.render(
  <React.StrictMode>
        <PushNotifications />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// oyr send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
