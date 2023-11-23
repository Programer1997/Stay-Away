import React, { useState } from "react";

//step 1 :  createContext
export const DataContext = React.createContext({});

//step 2 :  create Provider :
export const ContextProvider = ({ children }) => {
  const [example, setExample] = useState("Este es un saludo de Context");

  return (
    <DataContext.Provider value={{ example, setExample }}>
      {children}
    </DataContext.Provider>
  );
};
