import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
      {/* Uygulamayı context provider ile sarmalayınız */}
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);

