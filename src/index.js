import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UniversityProvider from "./context/UniversityContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //Wrap App component in the provider so that all it's children will be able to access the context
  <UniversityProvider>
    <App />
  </UniversityProvider>
);
