import React, { useState } from 'react';
import './styles.css';
import { Link, NavLink } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import logo from '../../Imagenes/Logo-Flor-2.jpg'

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
                            <img src={logo} alt='img not found' className='logo-navbar' />
                        </NavLink>
                    </h1>
                    {/* menu SOLO Pantalla Grande*/}
                    <ul className='ul-menu-izq'>
                        <li>
                            <NavLink to='/venta' className={'navLink-Navbar'}>
                                Venta
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/alquiler' className={'navLink-Navbar'}>
                                Alquileres
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/destacadas' className={'navLink-Navbar'}>
                                Destacadas
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contacto' className={'navLink-Navbar'}>
                                Contacto
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/nosotros' className={'navLink-Navbar'}>
                                Nosotros
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

                    {/* menu hambur y desplegable P.Chica */}
                    <div className='colInf-3'>
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
                        <div className="menu-desplegable">
                            {
                                isOpen && (
                                    <ul className='na-lista-pChica'>
                                        <li className='items-pChica'>
                                            <Link to='/' className='link-navbar'>Home</Link>
                                        </li>
                                        <li className='items-pChica'>
                                            <Link to='/venta' className='link-navbar'>Venta</Link>
                                        </li>
                                        <li className='items-pChica'>
                                            <Link to='/alquiler' className='link-navbar'>Alquiler</Link>
                                        </li>
                                        <li className='items-pChica'>
                                            <Link to='/nosotros' className='link-navbar'>Nosotros</Link>
                                        </li>
                                        <li className='items-pChica'>
                                            <Link to='/contacto' className='link-navbar'>Contacto</Link>
                                        </li>
                                    </ul>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar