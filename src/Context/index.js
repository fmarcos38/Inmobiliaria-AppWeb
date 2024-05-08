import { createContext, useState, } from "react";

//creo el contexto 
export const InmobiliariaContext = createContext();

//creo provider, aquí van estados y funciones actualizadoras globales
export const InmobiliariaProvider = ({children}) => {

    //estado para check venta
    const [ checkedVenta, setCheckedVenta ] = useState(false);
    //estado para check alq
    const [ checkedAlquiler, setCheckedAlquiler ] = useState(false);

    //funcion actualiza check venta
    const actualizaCheckVenta = () => {
        setCheckedVenta(!checkedVenta);
        setCheckedAlquiler(false);
    };
    //funcion actualiza check alq
    const actualizaCheckAlq = () => {
        setCheckedAlquiler(!checkedAlquiler);
        setCheckedVenta(false);
    };


    return (
        <InmobiliariaContext.Provider 
            value={{
                checkedVenta,
                actualizaCheckVenta,
                checkedAlquiler,
                actualizaCheckAlq,
                
            }}
        >
            {children}
        </InmobiliariaContext.Provider>
    );
};