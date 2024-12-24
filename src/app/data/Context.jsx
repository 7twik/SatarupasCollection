"use client";
import React, {
    createContext,
    useState,
    useContext,
    useEffect,
  } from "react";
  
 
  const StateContext = createContext();
  
  export const StateProvider = ({ children }) => {
    const [data, setData] = useState(window.localStorage.getItem("carttupa") ? JSON.parse(window.localStorage.getItem("carttupa")) : []);
    useEffect(() => {
        window.localStorage.setItem("carttupa", JSON.stringify(data));
        }, [data]);
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