import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getProps} from '../../Redux/Actions';
import { Link } from 'react-router-dom';
import { propiedades } from '../../Helps/propiedades';
import Filtros from '../../components/Filtros';
import ListaPropiedades from '../../components/ListaPropiedades';
import { useDispatch } from 'react-redux';
import './styles.css';
/* iconos materiaUI */
import LocationOnIcon from '@mui/icons-material/LocationOn';
import imgCasaDpto from '../../Imagenes/logoCasaDepto.jpg';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CallIcon from '@mui/icons-material/Call';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import CotizacionDolar from '../../components/CotizacionDolar';
import Loading2 from '../../components/Loading/Loading-2';

function Home() {

    const prop1 = propiedades[0]; 
    const loading = useSelector(state => state.loading);
    const allProps = useSelector(state => state.propiedades);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getProps());
    }, [dispatch]);

    return (
        <div className='cont-home-load'>
            {
                loading ? (
                    <Loading2/>
                ) : (
                    <div className='cont-home'>
                        <div className='contGralLanding-imagen'>
                            {/* muestra card 1 2 y 3  */}
                            <div className='contLanding'>
                                <div className='cont-Co1-Col2'>
                                    {/* col 1 */}
                                    <div className='col1-landing'>
                                        <div className='contProp-col1'>
                                            <img src={prop1.imagenes[0]} className='imgPropHome' alt='not found' />
                                            <p className='infoProp1-texto1'>Excelente {prop1.tipo} de {prop1.ambientes} ambientes.</p>
                                            <p className='infoProp1-texto2'><LocationOnIcon /> Zona {prop1.barrio}.</p>
                                            <p className='infoProp1-precio'><b>USD{prop1.precio}</b></p>
                                        </div>
                                    </div>

                                    {/* col 2 */}
                                    <div className='col2-landing'>
                                        <div className='contProp-col2'>
                                            <img src={prop1.imagenes[0]} className='imgPropHome' alt='not found' />
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
                                            <p className='texto-col3-texto'>Realizamos tasaciones, acesoramos</p>
                                            <p className='texto-col3-nuestroClientes'><b>Nuestros clientes nos avalan</b></p>
                                            <Link to={'/formularioContacto'} className='linkContacto'>
                                                <p className='texto-col3-texto-link'>Contactar</p>
                                            </Link>
                                            <div className='cont-texto-btn'>
                                                <a href='#explorarProps' className='a-explorarProps'>
                                                    <button className='btn-propiedades'>
                                                        Explorar
                                                        <AddHomeWorkIcon className='iconoExplorarProps' />
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* socalo */}
                            <h2 className='zocalo'>Encuentra la propiedad que estás buscando</h2>
                        </div>

                        {/* Home pantalla chica */}
                        <div className='home-pantChica'>
                            <div className='cont-info'>
                                <HomeWorkIcon style={{ 'font-size': '35px' }} />
                                <p className='texto-col3-comprar'><b>Queres comprar !!</b></p>
                                <p className='texto-col3-texto'>Tenemos la propirdad que estás buscando.</p>
                                <AttachMoneyIcon style={{ 'font-size': '35px' }} />
                                <p className='texto-col3-vender'><b>Queres vender !!</b></p>
                                <p className='texto-col3-texto'>Realizamos tazaciones, acesoramiento.</p>
                                <InsertEmoticonIcon style={{ 'font-size': '35px' }} />
                                <p className='texto-col3-nuestroClientes'><b>Nuestros clientes nos avalan</b></p>
                                    <div className='cont-contacto-pant-ch'>
                                        <Link to={'/contacto'} className='linkContacto'>
                                            <p className='texto-contactar-p-chica'>
                                                <em>Click aquí si queres ponerte en contacto</em>
                                            </p>
                                            <CallIcon />
                                        </Link>
                                    </div>
                            </div>
                        </div>

                        {/* filtros */}
                        <div id='explorarProps'>
                            <Filtros />
                        </div>

                        {/* lista props */}
                        <ListaPropiedades props={allProps} />

                        {/* cotizaciones */}
                        <CotizacionDolar />
                    </div>
                )
            }
        </div>
    )
}

export default Home;