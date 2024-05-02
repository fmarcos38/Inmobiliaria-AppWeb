import React, { useEffect } from 'react';
import './estilos.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detalleProp, resetDetalle } from '../../Redux/Actions';
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
                <div className='info-imagenes'>
                    {
                        detalle_prop?.imagenes 
                        ?
                            <img src={detalle_prop.imagenes[1]} alt='Not found' className='imagen-poke' />
                        : 
                            <p>No img</p>
                    }
                </div>

                <div className='info-textos'>
                <p>Tipo: {detalle_prop?.tipo}</p>
                    <p>Ambientes: {detalle_prop?.ambientes}</p>
                </div>
            </div>
        </div>
    )
}

export default DetalleProp;