import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SearchContextProvider } from "./context/SearchContext";
import { AuthContextProvider } from "./context/authContext";
import "bootstrap";
import { CustomerContextProvider } from "./context/customer-context";
import { BookingContextProvider} from "./context/bookingsContext.jsx";
import { PropertyContextProvider} from "./context/propertysContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <CustomerContextProvider>
          <BookingContextProvider>
            <PropertyContextProvider>
              <App />
            </PropertyContextProvider>
          </BookingContextProvider>
        </CustomerContextProvider>
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
