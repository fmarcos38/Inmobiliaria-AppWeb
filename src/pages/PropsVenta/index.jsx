import React, { useEffect } from 'react';
import './estilos.css';
import { useDispatch, useSelector } from 'react-redux';
import Filtros from '../../components/Filtros';
import ListaPropiedades from '../../components/ListaPropiedades';
import { filtraTipo } from '../../Redux/Actions';

function PropsVenta() {

    const props = useSelector(state => state.propsFiltradas);
    const soloEnVenta = props.filter(p => p.operacion === 'venta');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filtraTipo('todas'));
    },[dispatch]);

    return (
        <div className='cont-propsVenta'>
            <Filtros check={true}/>
            <ListaPropiedades props={soloEnVenta} />
        </div>
    )
}

export default PropsVenta