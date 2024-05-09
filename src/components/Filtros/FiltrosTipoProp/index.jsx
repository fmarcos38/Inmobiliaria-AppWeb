import React, { useEffect, useState } from 'react'
import './estilos.css';
import { filtraOperacionTipo, getProps, reset_props } from '../../../Redux/Actions';
import { useDispatch, useSelector } from 'react-redux';


function Filtros({check}) {

    const allProps = useSelector(state => state.propiedades);
    const dispatch = useDispatch();

    //estado para check venta
    const [ checkedVenta, setCheckedVenta ] = useState(false);
    //estado para check alq
    const [ checkedAlquiler, setCheckedAlquiler ] = useState(false);

    //funcion actualiza check venta
    const actualizaCheckVenta = () => {
        setCheckedVenta(!checkedVenta);
        setCheckedAlquiler(false);
        dispatch(getProps());
        dispatch(filtraOperacionTipo({operacion: 'venta'}));
        
    };
    //funcion actualiza check alq
    const actualizaCheckAlq = () => {
        setCheckedAlquiler(!checkedAlquiler);
        setCheckedVenta(false);
        dispatch(getProps());
        dispatch(filtraOperacionTipo({operacion: 'alquiler'}));
        
    };


    const handleClick = (e) => {
        switch(e.target.id){
            case 'depto':
                if(checkedVenta){;
                    dispatch(filtraOperacionTipo({operacion: 'venta', tipo: 'depto'}));
                }
                if(checkedAlquiler){
                    dispatch(filtraOperacionTipo({operacion: 'alquiler', tipo: 'depto'}));
                }                
                break;
            case 'casa':
                
                break;
            case 'todas':
                
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        dispatch(getProps());

        /* return () => {dispatch(reset_props())}; */
    }, [dispatch]);

    return (
        <div className='cont-principal-filtros'>
            <div className='cont-filtros'>
                {
                    check ? (
                        <div style={{'marginTop': '20px'}}></div>
                    ) : (
                        <div className='check-venta-alq'>
                            <label className='label-venta'>Venta</label>
                            <input
                                type='checkbox' className='input-venta'
                                checked={checkedVenta}
                                onChange={() => actualizaCheckVenta()}
                            />
                            <label className='label-alq'>Alquiler</label>
                            <input
                                type='checkbox' className='input-alq'
                                checked={checkedAlquiler}
                                onChange={() => actualizaCheckAlq()}
                            />
                        </div>
                    )
                }               

                <div className='cont-tipo-propiedad'>
                    <div className='tipo-propiedad'>
                        <button id='depto' onClick={(e) => handleClick(e)}>
                            Deptos
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <button id='casa' onClick={(e) => handleClick(e)}>
                            Casas
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <button>
                            PH
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>

                    <div>
                        <button>
                            Locales
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <button>
                            Terreno
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <button>
                            Oficinas
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <button>
                            Cocheras
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>

                    <div>
                        <button className='btn-props-dest'>
                            Propiedades destacadas
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>

                    <div>
                        <button id='todas' className='btn-props-dest' onClick={(e) => handleClick(e)}>
                            Todas las Propiedades
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filtros;


/*
<div className='check-venta-alq'>
                                <button id='venta' onClick={(e) => handleClick(e)}>
                                    Venta
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                                <button id='alquiler' onClick={(e) => handleClick(e)}>
                                    Alquiler
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
*/