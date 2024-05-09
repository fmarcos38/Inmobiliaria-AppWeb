import React, { useState } from 'react';
import './styles.css';
import { Link, NavLink } from 'react-router-dom';
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
                        <NavLink to='/' >
                            {/* <img src={logo} alt='img not found' className='logo' /> */}
                            <p className='logo'>Inmobiliaria <b>Mendive</b></p>
                        </NavLink>
                    </h1>
                    {/* menu SOLO Pantalla Grande*/}
                    <ul className='ul-menu-izq'>
                        <li>
                            <NavLink to='/venta' >
                                Venta
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/alquiler' >
                                Alquileres
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='#' >
                                Oportunidades
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contacto' >
                                Contacto
                            </NavLink>
                        </li>
                    </ul>
                </div>
                
                {/* menu Derecha */}
                <div className='contDer'>
                    {/* menu Derecho Pantalla Grande */}            
                    <div className='direccion'>
                        <LocationOnIcon />
                        <p>Sarmiento 2323</p>
                        <LocalPhoneIcon />
                        <p>2234422665</p>
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
                    {/* menu desplegable P.chica*/}
                    <div className="menu">
                        {
                            isOpen && (
                                <ul>
                                    <li>
                                        <Link to='/'>Home</Link>
                                    </li>
                                    <li>
                                        <Link to='/venta'>Venta</Link>
                                    </li>
                                    <li>
                                        <Link to='/alquiler'>Alquiler</Link>
                                    </li>
                                    <li>
                                        <Link to='/nosotros'>Nosotros</Link>
                                    </li>
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