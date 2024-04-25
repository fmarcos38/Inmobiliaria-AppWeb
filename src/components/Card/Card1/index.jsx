import React from 'react'
import './styles.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import BathtubIcon from '@mui/icons-material/Bathtub';
import rule from '../../../Imagenes/icono-superficie.svg'

function Card1({ id, operacion, tipo, hambientes, baños, sup, direccion, barrio, imagenes, descripcion_Breve, }) {

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
            <div className='card-text'> 
                <div className='cont-info1'>
                    <LocationOnIcon/>
                    <p className='direcc'>
                        Barrio: {barrio} | 
                        Direcc: {direccion}
                    </p>
                </div>           
                <p className='descrip'>{descripcion_Breve}</p>                
            </div>
            {/* info 2 */}
            <div className='card-stats'>
                <div className='div-sup'>
                    <p>
                        <img src={rule} alt='' style={{'width': '20px', 'height': '20px'}}/>
                    </p>
                    <p>Superficie</p>
                    <p>{sup}m2</p>
                </div>
                <div className='div-amb'></div>
                <div className='div-dor'></div>
                <div className='div-bañ'></div>                
            </div>
        </div>
    )
}

export default Card1;

/*
<BedroomParentIcon/><p>2</p>
                <BathtubIcon/><p>1</p>
                */