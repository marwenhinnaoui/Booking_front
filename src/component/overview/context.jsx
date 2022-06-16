import React, { createContext, useState } from "react";
  
export const Context = createContext();
export const ContextProvider = ({ children }) => {
    const [Logedin, setItems] = useState(0);
  
    return (
        <Context.Provider value={{ Logedin, setItems }}>
            {children}
        </Context.Provider>
    );
};