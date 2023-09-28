import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UniversityProvider from "./context/UniversityContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UniversityProvider>
    <App />
  </UniversityProvider>
);
