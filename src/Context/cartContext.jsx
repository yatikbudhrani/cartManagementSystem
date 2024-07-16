import React, { createContext, useContext, useState } from "react";

export const cartContext = createContext(0);

export const UseCart = () => {
  return useContext(cartContext);
};

export const CartProvider = (props) => {
  let [total, setTotal] = useState(0);
  let [count, setCount] = useState(0);

  return (
    <cartContext.Provider value={{ total, setTotal, count, setCount }}>
      {props.children}
    </cartContext.Provider>
  );
};
