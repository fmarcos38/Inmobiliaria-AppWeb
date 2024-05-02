import React, { useContext, useEffect } from 'react'
import './estilos.css';
import { InmobiliariaContext } from '../../Context';
import { useDispatch } from 'react-redux';
import { getProps, filtraTipo } from '../../Redux/Actions';
import { propiedades } from '../../Helps/propiedades';


function Filtros() {

    //me traigo las props falsas
    const arrPropieda = propiedades; //en un futuro seran de la DB de TOKKO
    const context = useContext(InmobiliariaContext);
    const dispatch = useDispatch();
    //funcion q filtra por ventas o alquileres SI alguna de estas opc esta tildada - sino muestra todas las props
    function filtraProps () {
        let props;
        if(context.checkedVenta) {
            props = arrPropieda.filter(p => p.operacion === 'venta')
        }else if(context.checkedAlquiler) {
            props = arrPropieda.filter(p => p.operacion === 'alquiler')
        }else{
            props = arrPropieda;
        }
        return props;
    };    
    let props = filtraProps();

    const handleClick = (e) => {
        switch(e.target.id){
            case 'depto':
                dispatch(filtraTipo('depto'));
                break;
            case 'casa':
                dispatch(filtraTipo('casa'));
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        dispatch(getProps(props));
    }, [dispatch, props]);

    
    return (
        <div className='cont-principal-filtros'>
            <div className='cont-filtros'>
                <div className='check-venta-alq'>
                    <label className='label-venta'>Venta</label>
                    <input 
                        type='checkbox' className='input-venta'
                        checked={context.checkedVenta}
                        onChange={() => context.actualizaCheckVenta()}
                    />
                    <label className='label-alq'>Alquiler</label>
                    <input 
                        type='checkbox' className='input-alq'
                        checked={context.checkedAlquiler}
                        onChange={() => context.actualizaCheckAlq()}
                    />
                </div>

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
                </div>
            </div>
        </div>
    )
}

export default Filtros