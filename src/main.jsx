import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import APIClient from "./query-client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <APIClient>
      <App />
    </APIClient>
  </React.StrictMode>
);
