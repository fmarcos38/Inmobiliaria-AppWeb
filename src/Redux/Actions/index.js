import { propiedades } from "../../Helps/propiedades";
import { DETALLE_PORP, FILTRA_PROPS, GET_PROPS, IS_OPEN_MODAL_PICTURE, RESET_DETALLE } from "./ActionsType";

//trae props
export const getProps = (props = propiedades) => {
    return function(dispatch){        
        dispatch({type: GET_PROPS, payload: props});    
    }
};

//filtra por tipo de prop
export const filtraTipo = (tipo) => {
    return function(dispatch){
        dispatch({type: FILTRA_PROPS, payload: tipo})
    }
};

//detalle prop
export const detalleProp = (id) => {
    return function(dispatch){
        dispatch({type: DETALLE_PORP, payload: id});
    }
}

//reset detalle
export const resetDetalle = () => {
    return function(dispatch) {
        dispatch({ type: RESET_DETALLE });
    }
};

//cierra Modal imagen prop
export const isOpenModalPicture = () => {
    return function(dispatch){
        dispatch({type: IS_OPEN_MODAL_PICTURE});
    }
};