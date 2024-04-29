import React from 'react'
import './styles.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import iconoSup from '../../Imagenes/icono-superficie.svg';
import iconoAmb from '../../Imagenes/icono-ambientes.svg';
import iconoDor from '../../Imagenes/icono-dormitorios.svg';
import iconoBañ from '../../Imagenes/icono-banos.svg';

function Card({ id, operacion, tipo, ambientes, dormitorios, baños, sup, direccion, barrio, imagenes, descripcion_Breve, precio }) {

    return (
        <div className='contCard'>
            {/* titulo */}
            <div className='card-title'>
                <h2>{operacion} {tipo}</h2>
            </div>
            {/* imagen */}
            <div className='card-image'>                
                {/* realizar carrusel de imgs */}
                <img className='card-img' src={imagenes[0]} alt='not found'/>
            </div>
            {/* info 1 */}
            <div className='card-info1'> 
                <div className='cont-info1'>
                    <LocationOnIcon/>
                    <p className='direcc'>
                        Barrio: {barrio} | 
                        Direcc: {direccion}
                    </p>
                </div>           
                <p className='descrip'>{descripcion_Breve}</p>
                <p className='precio'>
                    <strong>USD {precio}</strong>
                </p>                
            </div>
            {/* info 2 */}
            <div className='card-info2'>
                <div className='div-info2'>
                    <p className='info2'>
                        <img src={iconoSup} alt='' style={{'width': '20px', 'height': '20px', 'color': 'black', 'marginTop':'5px'}}/>
                    </p>
                    <p className='info2'>Superficie</p>
                    <p className='info2'>{sup}m2</p>
                </div>

                <div className='div-info2'>
                    <p className='info2'>
                        <img src={iconoAmb} alt='' style={{'width': '20px', 'height': '20px', 'marginTop':'5px'}}/>
                    </p>
                    <p className='info2'>Ambientes</p>
                    <p className='info2'>{ambientes}</p>
                </div>

                <div className='div-info2'>
                    <p className='info2'>
                    <img src={iconoDor} alt='' style={{'width': '20px', 'height': '20px', 'marginTop':'5px'}}/>
                    </p>
                    <p className='info2'>Dormitorios</p>
                    <p className='info2'>{dormitorios}</p>
                </div>

                <div className='div-info2'>
                    <p className='info2'>
                        <img src={iconoBañ} alt='' style={{'width': '20px', 'height': '20px', 'marginTop':'5px'}}/>
                    </p>
                    <p className='info2'>Baños</p>
                    <p className='info2'>{baños}</p>
                </div>               
            </div>
        </div>
    )
}

export default Card;
