import React from 'react'
import './styles.css';
import { Link } from 'react-router-dom';
import { propiedades } from '../../Helps/propiedades';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import imgCasaDpto from '../../Imagenes/logoCasaDepto.jpg';
import imgIconoPlay from '../../Imagenes/iconoPlay.jpg'; 


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
                        <p className='infoProp1-texto1'>Excelente {prop1.tipo} de {prop1.ambientes} ambientes.</p>
                        <p className='infoProp1-texto2'><LocationOnIcon /> Zona {prop1.barrio}.</p>
                        <p className='infoProp1-precio'><b>USD{prop1.precio}</b></p>
                    </div>

                    
                </div>

                {/* col 2 */}
                <div className='col2-landing'>                  
                    <div className='contProp-col2'>
                        <img src={prop1.imagenes[0]} className='imgProp' alt='not found' />
                        <p className='infoProp1-texto1'>Excelente {prop1.tipo} de {prop1.ambientes} ambientes.</p>
                        <p className='infoProp1-texto2'><LocationOnIcon /> Zona {prop1.barrio}.</p>
                        <p className='infoProp1-precio'><b>USD{prop1.precio}</b></p>
                    </div>
                </div>
            </div>
            
            {/* col 3 */}
            <div className='col3-landing'>
                <img src={imgCasaDpto} className='imgCasaDpto' alt='not found'/>
                <div className='contTexto1-col3'>
                    <div className='sub-cont-info-col3'>
                        <p className='texto-col3-comprar'><b>Queres comprar</b></p>
                        <p className='texto-col3-texto'>Tenemos la propirdad que estás buscando</p>
                        <p className='texto-col3-vender'><b>Queres vender</b></p>
                        <p className='texto-col3-texto'>Realizamos tazaciones, acesoramos</p>
                        <p className='texto-col3-nuestroClientes'><b>Nuestros clientes nos habalan</b></p>
                        <Link to={'/formularioContacto'} className='linkContacto'>
                            <p className='texto-col3-texto-link'>No dudes en contactartos</p>
                        </Link>
                        <div className='cont-texto-btn'>
                            <span className='explorarProps'>Explorar Propiedades</span>
                            <button className='btn-propiedades'>
                                <img src={imgIconoPlay} className='iconoPlay' alt='' />
                            </button>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default LandingPage;

