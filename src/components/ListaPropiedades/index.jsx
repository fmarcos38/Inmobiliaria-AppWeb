import Card from '../Card';
import './styles.css';
import { useSelector } from 'react-redux';


function ListaPropiedades() {
    //me traigo las props falsas
    const props = useSelector(state => state.propiedades); 

    return (
        <div className='contPropiedadesDestacadas'>
            <h2 className='titulo-listaProps-destacadas'>Encuentra la propiedad que estás buscando</h2>
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