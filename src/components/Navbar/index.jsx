import React, { useState } from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';
//import logo from '../../Imagenes/logo-osmosis.svg';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';



function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <div className='conteiner-navbar'>
                {/* menu Izq */}
                <div className='contIzq'>
                    {/* logo */}
                    <h1>
                        <NavLink to='/home' >
                            {/* <img src={logo} alt='img not found' className='logo' /> */}
                            <p className='logo'>Inmobiliaria <b>Mendive</b></p>
                        </NavLink>
                    </h1>
                    {/* menu SOLO Pantalla Grande*/}
                    <ul className='ul-menu-izq'>
                        <li>
                            <NavLink to='#' >
                                Venta
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='#' >
                                Alquileres
                            </NavLink>
                        </li>
                        <li>
                        <a href='#'>
                            Contacto
                        </a>
                        </li>
                    </ul>
                </div>
                {/* menu Derecha */}
                <div className='contDer'>
                    {/* menu Derecho Pantalla Grabde */}            
                    <div className='cont-Tel-Redes'>
                        <div className='direccion'>
                            <LocationOnIcon />
                            <p>Sarmiento 2323</p>
                            <LocalPhoneIcon />
                            <p>2234422665</p>
                        </div>
                        <div className='redes'>
                            <a href='https://www.instagram.com/florm.bienesraices/' className='iconosRedes'>
                                <InstagramIcon />
                            </a>
                            <a href='http://api.whatsapp.com/send?phone=2234422665'>
                                <WhatsAppIcon />
                            </a>
                        </div>                        
                    </div>
                    {/* menu hambur P.Chica */}
                    <div 
                        className={`menu-icon ${isOpen ? 'open' : ''}`} 
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="menu">
                        {
                            isOpen && (
                                <ul>
                                    <li>Hola</li>
                                    <li>Pepe</li>
                                    <li>Salis?</li>
                                </ul>
                            )
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar