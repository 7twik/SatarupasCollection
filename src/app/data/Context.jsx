"use client";
import React, {
    createContext,
    useState,
    useContext,
    useEffect,
  } from "react";
  
 
  const StateContext = createContext();
  
  export const StateProvider = ({ children }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const cart = window.localStorage.getItem("carttupa");
        if (cart) {
          setData(JSON.parse(cart));
        }
      }, []);
    
    return (
      <StateContext.Provider
        value={{
          data,
            setData
        }}
      >
        {children}
      </StateContext.Provider>
    );
  };
  
  export const useStateAuth = () => useContext(StateContext);