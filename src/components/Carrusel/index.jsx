import React, { useState } from 'react'
import './styles.css';
import { propiedades } from '../../Helps/propiedades';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Carrusel({imagenes}) {

    const prop = propiedades[0];
    const [indexImgActual, setIndexImgActual] = useState(0)

    const handleClickPrev = () => {
        if(indexImgActual === 0){ return }
        else{
            setIndexImgActual(indexImgActual - 1);
        }
    };
    const handleClickNext = () => {
        if(indexImgActual === prop.imagenes.length -1){ return }
        else{
            setIndexImgActual(indexImgActual + 1);
        }
    };

    const handleClick = ( index ) => {
        
    };

    return (
        <div className='contGralCarrusel'>
            <div className='cont-img-btns'>
                {/* btn atrás */}
                <button className='btn-carrusel-prev' onClick={() => handleClickPrev()}>
                    <ArrowBackIosNewIcon />
                </button>

                {/* imagen a ostrar */}
                <img src={prop.imagenes[indexImgActual]} alt='' className='img-carrusel' />

                {/* btn prox */}
                <button className='btn-carrusel-next' onClick={() => handleClickNext()}>
                    <ArrowForwardIosIcon />
                </button>
            </div>

            {/* cont imagenes pequeñas */}
            <div className='cont-imgs-peq'>
            {
                /* imagenes.map((img, index) => (
                    <img
                        key={index}
                        src={img} 
                        alt=''
                        className=''
                        onClick={(index) => handleClick(index)}
                    />
                )) */
            }
            </div>
        </div>
    )
}

export default Carrusel