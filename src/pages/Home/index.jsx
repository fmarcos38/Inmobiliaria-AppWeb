import React from 'react'
import './styles.css';
import { Link } from 'react-router-dom';
import { propiedades } from '../../Helps/propiedades';
import ListaPropiedades from '../../components/ListaPropiedades';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import imgCasaDpto from '../../Imagenes/logoCasaDepto.jpg';
import imgIconoPlay from '../../Imagenes/iconoPlay.jpg'; 
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CallIcon from '@mui/icons-material/Call';

function Home() {

    const prop1 = propiedades[0];
    //const prop2 = propiedades[1];

    return (
        <div className='cont-home'>
            <div className='contGralLanding-imagen'>
                <div className='contLanding'>
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
                        <div className='contTexto1-col3'>
                            <div className='sub-cont-info-col3'>
                                <img src={imgCasaDpto} className='imgCasaDpto' alt='not found' />
                                <p className='texto-col3-comprar'><b>Queres comprar</b></p>
                                <p className='texto-col3-texto'>Tenemos la propirdad que estás buscando</p>
                                <p className='texto-col3-vender'><b>Queres vender</b></p>
                                <p className='texto-col3-texto'>Realizamos tazaciones, acesoramos</p>
                                <p className='texto-col3-nuestroClientes'><b>Nuestros clientes nos avalan</b></p>
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
                <h2 className='texto-inferior'>Somos sinónimo de confianza</h2>
            </div>

            {/* Home pantalla chica */}
            <div className='home-pantChica'>
                {/* filtros */}
                {/* <p>Acá van los filtros</p> */}

                <div className='cont-info'>
                    <HomeWorkIcon style={{'font-size': '35px'}}/>
                    <p className='texto-col3-comprar'><b>Queres comprar !!</b></p>
                    <p className='texto-col3-texto'>Tenemos la propirdad que estás buscando.</p>
                    <AttachMoneyIcon style={{'font-size': '35px'}}/>
                    <p className='texto-col3-vender'><b>Queres vender !!</b></p>
                    <p className='texto-col3-texto'>Realizamos tazaciones, acesoramiento.</p>
                    <InsertEmoticonIcon style={{'font-size': '35px'}}/>
                    <p className='texto-col3-nuestroClientes'><b>Nuestros clientes nos avalan</b></p>
                    <Link to={'/formularioContacto'} className='linkContacto'>
                        <p className='texto-col3-texto-link'>Click aquí si queres ponerte en contacto</p>
                        <CallIcon/>
                    </Link>
                    <p className='p-prop-dest'>Propiedades Destacadas</p>
                    {/* flecha */}
                    <div className="arrow-container">
                        <div className="arrow-shine"></div>
                        <div className="arrow">
                            <div className="arrow-inner"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* filtros */}
            <p>Acá van los filtros</p>

            {/* lista props destacadas */}
            <div>
                <ListaPropiedades />
            </div>
        </div>
    )
}

export default Home;