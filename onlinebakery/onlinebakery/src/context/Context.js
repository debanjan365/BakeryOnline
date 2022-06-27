import { createContext } from "react";

const MyContext=createContext({
    cartData:JSON.parse(localStorage.getItem('cartData'))||[],
    setCartData:(data)=>{}
  });

export default MyContext;