import React from 'react'
import { propiedades } from '../../Helps/propiedades.js';
import Card1 from '../Card/Card1';
/* import Card2 from '../Card/Card2';
import Card3 from '../Card/Card3'; */
import './styles.css';

function ListaPropiedades() {
    //me traigo las props falsas
    const props = propiedades;

    return (
        <div className='contListaP'>
            {/* tipo de Card1 */}
            {
                props[0] ?
                    props.map(p => {
                        return (
                            <div>
                                <Card1
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
                            </div>
                        )
                    }) : (
                        <p>Cargando props ...</p>
                    )
            }
        </div>
    )
}

export default ListaPropiedades