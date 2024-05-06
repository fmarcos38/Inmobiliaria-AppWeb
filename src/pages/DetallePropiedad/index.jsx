import React, { useEffect } from 'react';
import './estilos.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detalleProp, resetDetalle } from '../../Redux/Actions';
import Carrusel from '../../components/Carrusel';
//import { propiedades } from '../../Helps/propiedades';

function DetalleProp(){

    const detalle_prop = useSelector(state => state.detalleProp);//propiedades[0];
    const dispatch = useDispatch();
    const { id } = useParams();  //let id = props.match.params.id 
    

    useEffect(() => {
        dispatch(detalleProp(id));

        return () => { dispatch(resetDetalle()); }
    }, [dispatch, id]);
    
    
    return(
        <div className='contGralDetalle'>
            <div className='cont-detail'>
                <div className='info-1'>
                    <p>OPERACION: {detalle_prop.operacion}</p>
                    <p>TIPO DE PROPIEDAD: {detalle_prop.tipo}</p>
                    <p>VALOR: USD{detalle_prop.precio}</p>
                </div>

                <div className='cont-imgs-info'>
                    <div className='info-imagenes'>
                        {
                            detalle_prop?.imagenes
                                ?
                                <Carrusel imagenes={detalle_prop.imagenes} />
                                :
                                <p>No img</p>
                        }
                    </div>

                    <div className='info-textos'>
                        <span>DETALLES DE LA PROPIEDAD</span>
                        <p>Ambientes: {detalle_prop.ambientes}</p>
                        <p>Dormitorios: {detalle_prop.dormitorios}</p>
                        <p>Baños: {detalle_prop.baños}</p>
                        <p>Sup Cubierta: {detalle_prop.sup}</p>
                        <p>Sup Semicubierta: {detalle_prop.sup}</p>
                        <p>Sup tot: {detalle_prop.sup}</p>
                        <p>Dirección: {detalle_prop.direccion}</p>
                        <p>Barrio: {detalle_prop.barrio}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DetalleProp;