import React from 'react'
import './styles.css';
import { propiedades } from '../../Helps/propiedades';


function LandingPage() {

    const prop1 = propiedades[0];
    const prop2 = propiedades[1];

    return (
        <div className='contGralLanding'>            
            <div className='cont-Co1-Col2'>
                {/* col 1 */}
                <div className='col1-landing'>
                    <div className='contProp-col1'>
                        <img src={prop1.imagenes[0]} className='imgProp' alt='not found' />
                        <p className='infoProp1'>Excelente {prop1.tipo} de {prop1.ambientes} ambientes, </p>
                        <p className='infoProp1'>ubicado en el barrio de {prop1.barrio}.</p>
                        <p className='infoProp1'>Valor: USD{prop1.precio}</p>
                    </div>

                    <div className='contTexto-col1'>
                        <p className='infoProp2'>Tenemos la propiedad que estas buscando !!</p>
                        <p className='infoProp2'>No dudes en consultarnos</p>
                        <p className='infoProp2'>Realizamos tazaciones</p>
                    </div>
                </div>

                {/* col 2 */}
                <div className='col2-landing'>
                    <div className='contTexto-col2'>
                        <p className='infoProp2'>Tenemos la propiedad que estas buscando !!</p>
                        <p className='infoProp2'>No dudes en consultarnos</p>
                        <p className='infoProp2'>Realizamos tazaciones</p>
                    </div>

                    <div className='contProp-col2'>
                        <img src={prop1.imagenes[0]} className='imgProp' alt='not found' />
                        <p className='infoProp1'>Excelente {prop1.tipo} de {prop1.ambientes} ambientes, </p>
                        <p className='infoProp1'>ubicado en el barrio de {prop1.barrio}.</p>
                        <p className='infoProp1'>Valor: USD{prop1.precio}</p>
                    </div>
                </div>
            </div>
            
            {/* col 3 */}
            <div className='col3-landing'>
                <div className='contTexto1-col3'>
                    <p className='texto-col3'>La vida es corta y el mundo es ancho.</p>
                    <p className='texto-col3'>Para aprovechar al máximo tu aventura solo necesitas salir e ir a donde quieras.</p>
                    <p className='texto-col3'>Te estamos esperamos</p>
                </div>

                <div className='contTexto1-col3'>
                    <p className='texto-col3'>Queres comprar...</p>
                    <p className='texto-col3'>Queres vender...</p>
                    <p className='texto-col3'>Estás en el lugar correcto...</p>
                    <button>Contactanos</button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;

