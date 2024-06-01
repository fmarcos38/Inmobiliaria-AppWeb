import React from 'react';
import './estilos.css';
import { useSelector } from 'react-redux';
import Filtros from '../../components/Filtros/';
import ListaPropiedades from '../../components/ListaPropiedades';


function PropsVenta() {

    const props = useSelector(state => state.propiedades);
    const soloEnVenta = props.filter(p => p.operacion === 'venta');
    

    return (
        <div className='cont-propsVenta'>
            <h1>Nuestras Propiedades en venta</h1>
            <Filtros muestraVentaAlq={false}/>            
            <ListaPropiedades props={soloEnVenta} />
        </div>
    )
}

export default PropsVenta