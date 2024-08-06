import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
export const UserContext =createContext({});

export function UserContextProvider({children }){
    const [cart,setCart]=useState([]);
    useEffect(()=>{
       
    },[cart])
    return(
        <UserContext.Provider value={{cart,setCart}}>
        {children}
        </UserContext.Provider>
    )
}
UserContextProvider.propTypes = {
    children: PropTypes.node,
  }; 