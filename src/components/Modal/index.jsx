import React from 'react'
import './styles.css';
import { useDispatch } from 'react-redux';
import { isOpenModalPicture } from '../../Redux/Actions';

function Modal({imgProp}) {

    
    const dispatch = useDispatch();

    const handleOnclickClose = () =>{
        dispatch(isOpenModalPicture());
    };

    return (
        <div className='contModal'>
            <button
                className='btn-close-modal'
                onClick={() => handleOnclickClose()}
            >
                <b>X</b>
            </button>
            <img src={imgProp} alt='not f' className='imgProp' />
        </div>
    )
}

export default Modal