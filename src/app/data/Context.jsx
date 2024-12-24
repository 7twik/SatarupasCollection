"use client";
import React, {
    createContext,
    useState,
    useContext,
    useEffect,
  } from "react";
  
 
  const StateContext = createContext();
  
  export const StateProvider = ({ children }) => {
    const localStore = localStorage.getItem("carttupa");
    const [data, setData] = useState(localStore ? JSON.parse(localStore) : []);
    useEffect(() => {
        localStorage.setItem("carttupa", JSON.stringify(data));
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