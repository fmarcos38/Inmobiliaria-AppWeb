import React from 'react';
import './estilos.css';
import { useSelector } from 'react-redux';
import ListaPropiedades from '../../components/ListaPropiedades';
import Filtros from '../../components/Filtros';

function PropsDestacadas() {

    const props = useSelector(state => state.propiedades);
    const destacadas = props.filter(p => p.destacada === true);


    return (
        <div className='cont-propsVenta'>
            <h1>Nuestras Propiedades destacadas</h1>
            <Filtros muestraVentaAlq={false}/>            
            <ListaPropiedades props={destacadas} />
        </div>
    )
}

export default PropsDestacadas