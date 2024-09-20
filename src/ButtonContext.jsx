import { createContext, useState } from "react";

export const ButtonContext = createContext();

export const ButtonContextProvider = ({children})=>{
    const [ clicked , setClicked ] = useState(true);
    const [ activeComponent, setActiveComponent ] =  useState('home');
   return (
    <ButtonContext.Provider value={{clicked , setClicked , activeComponent , setActiveComponent}}>
        {children}
    </ButtonContext.Provider>
   )
}