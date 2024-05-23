import React from 'react';
import './estilos.css';
import { useSelector } from 'react-redux';
import ListaPropiedades from '../../components/ListaPropiedades';
import Filtros from '../../components/Filtros';

function PropsDestacadas() {

    const props = useSelector(state => state.propiedades);
    const destacadas = props.filter(p => p.destacada === true);


    return (
        <div className='cont-prop-Venta'>
            <Filtros check={false}/> {/* check es para cuando estoy en la vista/pagina Venta/Alquiler NO muestre los checks de venta/alquiler */}
            <div className='cont-titulo-props-venta'> 
                <h1>Propiedades Destacadas</h1>
                <ListaPropiedades props={destacadas} />                
            </div>            
        </div>
    )
}

export default PropsDestacadas