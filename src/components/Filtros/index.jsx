import React, { useEffect, useState } from 'react';
import { filtraOperacionTipo, getProps, muestraDestacadas} from '../../Redux/Actions';
import { useDispatch } from 'react-redux';
import FiltraPrecio from './FIltroRangoPrecio';
import './estilos.css';

function Filtros({check}) {

    //estado para check venta
    const [ operacion, setOperacion ] = useState('all'); 
    const dispatch = useDispatch();
    //funcion onChange para los checkbox
    const handleOnChangeOperacion = (e) => {
        const { value } = e.target;
        setOperacion(value === operacion ? 'all' : value);
    };
    //para los btns
    const handleClick = (e) => {
        switch(e.target.id){
            case 'depto':
                if(operacion){;
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({operacion: 'venta', tipo: 'depto'}));
                }else if(operacion){
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({operacion: 'alquiler', tipo: 'depto'}));
                }else{
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({tipo: 'depto'}));
                }                
                break;
            case 'casa':
                if(operacion){;
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({operacion: 'venta', tipo: 'casa'}));
                }else if(operacion){
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({operacion: 'alquiler', tipo: 'casa'}));
                }else{
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({tipo: 'casa'}));
                } 
                break;
            case 'ph':
                if(operacion){;
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({operacion: 'venta', tipo: 'ph'}));
                }else if(operacion){
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({operacion: 'alquiler', tipo: 'ph'}));
                }else{
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({tipo: 'ph'}));
                } 
                break;
            case 'local':
                if (operacion) {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'local' }));
                }else if (operacion) {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'local' }));
                }else{
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({tipo: 'local'}));
                } 
                break;
            case 'terreno':
                if (operacion) {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'terreno' }));
                }else if (operacion) {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'terreno' }));
                }else{
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({tipo: 'terreno'}));
                } 
                break;
            case 'oficina':
                if (operacion) {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'oficina' }));
                }else if (operacion) {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'oficina' }));
                }else{
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({tipo: 'oficina'}));
                } 
                break;
            case 'cochera':
                if (operacion) {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'cochera' }));
                }else if (operacion) {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'cochera' }));
                }else{
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({tipo: 'cochera'}));
                } 
                break;
            case 'destacada':
                if (operacion) {
                    dispatch(getProps());
                    dispatch(muestraDestacadas({ operacion: 'venta', destacada: true }));
                }else if (operacion) {
                    dispatch(getProps());
                    dispatch(muestraDestacadas({ operacion: 'alquiler', destacada: true }));
                }else{
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({tipo: 'destacada'}));
                } 
                break;
            case 'todas':
                dispatch(getProps());
                break;
            default:
                break;
        }
    }

    //useEffect para actualizar estado global de las props
    useEffect(() => {
        if (operacion === 'all') {
            dispatch(getProps());
        }
        if (operacion === 'venta') {
            dispatch(getProps());
            dispatch(filtraOperacionTipo({ operacion: 'venta' }));
        }
        if (operacion === 'alquiler') {
            dispatch(getProps());
            dispatch(filtraOperacionTipo({ operacion: 'alquiler' }));
        }
    }, [dispatch, operacion]);


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
                                id='check-venta'
                                type='checkbox'
                                value="venta" 
                                className='input-venta'
                                checked={operacion === 'venta'} /* esto quiere decir -> cuando está seleccionado operacion se vuelve venta */
                                onChange={(e) => handleOnChangeOperacion(e)}
                            />
                            <label className='label-alq'>Alquiler</label>
                            <input
                                id='check-alquiler'
                                type='checkbox' 
                                value="alquiler"
                                className='input-alq'
                                checked={operacion === 'alquiler'}
                                onChange={(e) => handleOnChangeOperacion(e)}
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
                        <button id='ph' onClick={(e) => handleClick(e)}>
                            PH
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>

                    <div>
                        <button id='local' onClick={(e) => handleClick(e)}>
                            Locales
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <button id='terreno' onClick={(e) => handleClick(e)}>
                            Terreno
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <button id='oficina' onClick={(e) => handleClick(e)}>
                            Oficinas
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <button id='cochera' onClick={(e) => handleClick(e)}>
                            Cocheras
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>

                    <div>
                        <button className='btn-props-dest' id='destacada' onClick={(e) => handleClick(e)}>
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

                <div className='cont-filtra-precio'>
                    <FiltraPrecio operacion={operacion}/>
                </div>
            </div>
        </div>
    )
}

export default Filtros;
