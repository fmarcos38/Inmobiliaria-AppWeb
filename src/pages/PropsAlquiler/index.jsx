import React from 'react';
import './estilos.css';
import { useSelector } from 'react-redux';
import Filtros from '../../components/Filtros';
import ListaPropiedades from '../../components/ListaPropiedades';


function PropsAlquiler() {

    const props = useSelector(state => state.propiedades);
    const soloEnAlq = props.filter(p => p.operacion === 'alquiler');
    

    return (
        <div className='cont-propsVenta'>
            <h1>Nuestras Propiedades en alquiler</h1>
            <Filtros muestraVentaAlq={false}/>            
            <ListaPropiedades props={soloEnAlq} />
        </div>
    )
}

export default PropsAlquiler