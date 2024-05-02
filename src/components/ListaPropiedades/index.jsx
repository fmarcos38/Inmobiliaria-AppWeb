import { useEffect } from 'react';
import Card from '../Card';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProps } from '../../Redux/Actions';


function ListaPropiedades() {
    //me traigo las props falsas
    const props = useSelector(state => state.propiedades); 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProps());
    }, [dispatch]);

    return (
        <div className='cont-listaProps'>            
            <div className='contListaP'>
                {
                    props[0] ?
                        props.map(p => {
                            return (
                                <Card
                                    key={p.id}
                                    id={p.id}
                                    operacion={p.operacion}
                                    tipo={p.tipo}
                                    ambientes={p.ambientes}
                                    dormitorios={p.dormitorios}
                                    baños={p.baños}
                                    sup={p.sup}
                                    direccion={p.direccion}
                                    barrio={p.barrio}
                                    imagenes={p.imagenes}
                                    descripcion_Breve={p.descripcion_Breve}
                                    precio={p.precio}
                                />
                            )
                        }) : (
                            <p>Cargando props ...</p>
                        )
                }
            </div>
        </div>
    )
}

export default ListaPropiedades