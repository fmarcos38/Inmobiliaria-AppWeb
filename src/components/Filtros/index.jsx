import React from 'react'
import './estilos.css';


function Filtros() {
    return (
        <div className='cont-principal-filtros'>
            <div className='cont-filtros'>
                <div className='check-venta-alq'>
                    <label>Venta</label>
                    <input type='checkbox' />
                    <label>Alquiler</label>
                    <input type='checkbox' />
                </div>

                <div className='tipo-propiedad'>
                    <button>
                        Depto
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <button>
                        Casas
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <button>
                        PH
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>                    
                </div>

                <div>
                    <button>
                        Locales
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <button>
                        Terreno
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <button>
                        Oficinas
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <button>
                        Cocheras
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                <div>
                    <button className='btn-props-dest'>
                        Propiedades destacadas
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Filtros