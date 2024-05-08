
import Card from '../Card';
import './styles.css';

function ListaPropiedades({props}) {


    return (
        <div className='cont-listaProps'>            
            <div className='contListaP'>
                {
                    props[0] ?
                        props.map(p => {
                            return (
                                <div className='cont-card' key={p.id}>
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
                                    className='card'
                                />
                                </div>
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