import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
