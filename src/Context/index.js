import React, { createContext, useState, useEffect} from "react";
//import { useDispatch } from "react-redux";
//import { filtraOperacionV, filtraOperacionA  } from '../Redux/Actions';
//creo el contexto 
export const InmobiliariaContext = createContext();

//creo provider, aquí van estados y funciones actualizadoras globales
export const InmobiliariaProvider = ({children}) => {

    


    return (
        <InmobiliariaContext.Provider 
            value={{
                                
            }}
        >
            {children}
        </InmobiliariaContext.Provider>
    );
};