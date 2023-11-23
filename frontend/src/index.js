import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SearchContextProvider } from "./context/SearchContext";
import { AuthContextProvider } from "./context/authContext";
import "bootstrap";
import { CustomerContextProvider } from "./context/customer-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <CustomerContextProvider>
          <App />
        </CustomerContextProvider>
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
